<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useEatSettingStore } from '@/stores/eatSetting'
import { randomPick } from '@/utils/random'
import { vegeDishes, meatDishes } from '@/constants/dishes'

import InputNumber from '@/components/ui-kit/InputNumber.vue'
import AppButton from '@/components/ui-kit/AppButton.vue'
import DishList from '@/components/DishList.vue'

const eatSettingStore = useEatSettingStore()
const { vegeCount, meatCount } = storeToRefs(eatSettingStore)

const changeVege = (count: number) => {
  eatSettingStore.setVegeCount(count)
}

const changeMeal = (count: number) => {
  eatSettingStore.setMeatCount(count)
}

const pickedVegeDishes = ref<{ name: string }[]>([])
const pickedMeatDishes = ref<{ name: string }[]>([])

const generateVegeList = () => {
  pickedVegeDishes.value = randomPick(vegeDishes, vegeCount.value)
}

const generateMeatList = () => {
  pickedMeatDishes.value = randomPick(meatDishes, meatCount.value)
}

const generate = () => {
  generateVegeList()
  generateMeatList()
}

const showGenerate = computed(() => vegeCount.value > 0 || meatCount.value > 0)
const hasGenerated = computed(() => pickedMeatDishes.value.length > 0 || pickedVegeDishes.value.length > 0)
</script>

<template>
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
        <h2>{{ hasGenerated ? '重新生成' : '生成菜谱' }}</h2>
      </AppButton>
      <div class="dish-list-wrapper">
        <DishList v-if="pickedVegeDishes.length" :dishes="pickedVegeDishes" @generate="generateVegeList"
          >素菜们</DishList
        >
        <DishList v-if="pickedMeatDishes.length" :dishes="pickedMeatDishes" @generate="generateMeatList"
          >荤菜们</DishList
        >
      </div>
    </div>
  </main>
</template>

<style>
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
  .input-group {
    align-items: flex-start;
  }
}
</style>
