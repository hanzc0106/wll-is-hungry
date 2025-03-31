<template>
  <section class="recipes">
    <RecipeItem v-for="(recipe, index) of recipes" :key="recipe.id" :recipe="recipe" :index="index" />
  </section>
</template>

<script setup lang="ts">
import { getRecipesByIds } from '@/services'
import type { Recipe, RecipeRes } from '@/types'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import RecipeItem from '@/components/RecipeItem.vue'

// 查询菜谱
const recipes = ref<Recipe[]>([])
// 获取route params
const ids = useRoute().query.ids as string

// 获取菜谱列表
const getRecipes = async () => {
  const data = await getRecipesByIds(ids.split(',').map(Number))
  recipes.value = data.map((recipe: RecipeRes) => {
    return {
      ...recipe,
      summary: recipe.summary.split('\n'),
    } as Recipe
  })
}

onMounted(getRecipes)
</script>

<style scoped>
.recipes {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 2rem 1rem;
}

@media (min-width: 1024px) {
  .recipes {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
