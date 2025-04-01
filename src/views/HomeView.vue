<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import type { Recipe } from '@/types'

import { useEatSettingStore } from '@/stores/eatSetting'
import { useRecipesStore } from '@/stores/recipes'
import { randomPick } from '@/utils/random'
// import { vegeDishes, meatDishes } from '@/constants/dishes'
import HomeHeader from '@/components/HomeHeader.vue'
import InputNumber from '@/components/ui-kit/InputNumber.vue'
import AppButton from '@/components/ui-kit/AppButton.vue'
import DishList from '@/components/DishList.vue'
import router from '@/router'
import { useRoute } from 'vue-router'

const recipesStore = useRecipesStore()
const { vegeRecipes, meatRecipes } = storeToRefs(recipesStore)

const eatSettingStore = useEatSettingStore()
const { vegeCount, meatCount } = storeToRefs(eatSettingStore)

const changeVege = (count: number) => {
  eatSettingStore.setVegeCount(count)
}

const changeMeal = (count: number) => {
  eatSettingStore.setMeatCount(count)
}

const pickedVegeDishes = ref<Recipe[]>([])
const pickedMeatDishes = ref<Recipe[]>([])

const generateVegeList = () => {
  pickedVegeDishes.value = randomPick(vegeRecipes.value, vegeCount.value)
  updateURL()
}

const generateMeatList = () => {
  pickedMeatDishes.value = randomPick(meatRecipes.value, meatCount.value)
  updateURL()
}

const updateURL = () => {
  // 从 pickedVegeDishes 和 pickedMeatDishes 中得到ids
  const ids = [
    ...pickedVegeDishes.value.map((recipe) => recipe.id),
    ...pickedMeatDishes.value.map((recipe) => recipe.id),
  ]
  // 将ids设置到路由中
  router.replace({ query: { ids: ids.join(',') } })
}

const generate = () => {
  generateVegeList()
  generateMeatList()
}

const showRecipes = () => {
  const vegeIds = pickedVegeDishes.value.map((recipe) => recipe.id)
  const meatIds = pickedMeatDishes.value.map((recipe) => recipe.id)
  const ids = [...vegeIds, ...meatIds]
  router.push({ name: 'recipes', query: { ids: ids.join(',') } })
}

const showGenerate = computed(() => vegeCount.value > 0 || meatCount.value > 0)
const hasGenerated = computed(() => pickedMeatDishes.value.length > 0 || pickedVegeDishes.value.length > 0)

const route = useRoute()
onMounted(() => {
  console.log(route.query.ids)
  if (route.query.ids) {
    const ids = route.query.ids as string
    const pickedIds = ids.split(',').map(Number)
    console.log(pickedIds)
    if (pickedIds.length === 0) return
    pickedVegeDishes.value = vegeRecipes.value.filter((recipe) => pickedIds.includes(recipe.id))
    pickedMeatDishes.value = meatRecipes.value.filter((recipe) => pickedIds.includes(recipe.id))
    console.log(vegeRecipes.value, meatRecipes.value)
  }
})
</script>

<template>
  <section class="home">
    <HomeHeader />
    <main>
      <div class="settings">
        <h2>准备吃几荤几素呢</h2>
        <div class="input-group">
          <InputNumber label="素菜" :defaultValue="vegeCount" @change="changeVege" class="input-number" />
          <InputNumber label="荤菜" :defaultValue="meatCount" @change="changeMeal" class="input-number" />
        </div>
      </div>
      <div class="recipes">
        <AppButton v-if="showGenerate" class="recipe-btn" @click="generate">
          <h3>{{ hasGenerated ? '重新生成' : '生成菜谱' }}</h3>
        </AppButton>
        <div class="dish-list-wrapper">
          <DishList v-if="pickedVegeDishes.length" :dishes="pickedVegeDishes" @generate="generateVegeList"
            >素菜们</DishList
          >
          <DishList v-if="pickedMeatDishes.length" :dishes="pickedMeatDishes" @generate="generateMeatList"
            >荤菜们</DishList
          >
        </div>
        <AppButton v-if="hasGenerated" class="recipe-btn" @click="showRecipes"><h3>查看菜谱</h3></AppButton>
      </div>
    </main>
  </section>
</template>

<style scoped>
.home {
  padding-block: 2rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 1.2rem;
}

h2,
h3 {
  text-align: center;
}

.settings {
  margin-bottom: 1.5rem;
}
.input-group {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.recipes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.recipe-btn {
  width: 10rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.dish-list-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

@media (min-width: 1024px) {
  .home {
    gap: 40px;
  }

  .input-group {
    align-items: flex-start;
  }
}
</style>
