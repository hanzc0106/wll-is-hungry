import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllVegeRecipes, getAllMeatRecipes } from '@/services'
import type { Recipe, RecipeRes } from '@/types'
import { getLocalStorage, setLocalStorage } from '@/utils/localstorage'

export const useRecipesStore = defineStore('queryRecipes', () => {
  const vegeRecipes = ref<Recipe[]>([])
  const meatRecipes = ref<Recipe[]>([])

  function setVegeRecipes(recipes: Recipe[]) {
    vegeRecipes.value = recipes
  }
  function setMeatRecipes(recipes: Recipe[]) {
    meatRecipes.value = recipes
  }

  function init() {
    const localVegeRecipes = getLocalStorage<RecipeRes[]>('vegeRecipes')
    if (localVegeRecipes) {
      setVegeRecipes(localVegeRecipes)
    } else {
      getAllVegeRecipes().then((data) => {
        setVegeRecipes(data)
        setLocalStorage('vegeRecipes', data)
      })
    }

    const localMeatRecipes = getLocalStorage<RecipeRes[]>('meatRecipes')
    if (localMeatRecipes) {
      setMeatRecipes(localMeatRecipes)
    } else {
      getAllMeatRecipes().then((data) => {
        setMeatRecipes(data)
        setLocalStorage('meatRecipes', data)
      })
    }
  }

  init()

  return { vegeRecipes, meatRecipes, setVegeRecipes, setMeatRecipes }
})
