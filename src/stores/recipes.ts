import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllVegeRecipes, getAllMeatRecipes } from '@/services'
import type { Recipe } from '@/types'

export const useRecipesStore = defineStore('queryRecipes', () => {
  const vegeRecipes = ref<Recipe[]>([])
  const meatRecipes = ref<Recipe[]>([])

  function setVegeRecipes(recipes: Recipe[]) {
    vegeRecipes.value = recipes
  }
  function setMeatRecipes(recipes: Recipe[]) {
    meatRecipes.value = recipes
  }

  onMounted(() => {
    getAllVegeRecipes().then((res) => {
      setVegeRecipes(res.data)
    })
    getAllMeatRecipes().then((res) => {
      setMeatRecipes(res.data)
    })
  })

  return { vegeRecipes, meatRecipes, setVegeRecipes, setMeatRecipes }
})
