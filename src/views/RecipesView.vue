<template>
  <div>
    <div v-for="recipe in recipes" :key="recipe.id">
      <h2>{{ recipe.name }}</h2>
      <h3>{{ recipe.summary }}</h3>
      <div v-for="ingredient in recipe.ingredients" :key="ingredient.id">
        <p>{{ ingredient.NAME }} {{ ingredient.quantity }}</p>
        <p>{{ ingredient.type }}</p>
        <p>{{ ingredient.is_required }}</p>
        <hr />
      </div>
      <div v-for="step in recipe.steps" :key="step.id">
        <p>{{ step.step_number }}</p>
        <p>{{ step.description }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getRecipesByIds } from '@/services'
import type { Recipe } from '@/types'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

// 查询菜谱
const recipes = ref<Recipe[]>([])
// 获取route params
const ids = useRoute().query.ids as string

// 获取菜谱列表
const getRecipes = async () => {
  const res = await getRecipesByIds(ids.split(',').map(Number))
  recipes.value = res.data
}

onMounted(getRecipes)
</script>

<style scoped></style>
