<template>
  <div class="recipeWarp">
    <div class="header">
      <h1 class="name">{{ `${index + 1}. ${name}` }}</h1>
      <p class="des">{{ description }}</p>
    </div>
    <div class="ingredientsWrap">
      <div class="ingredients">
        <IngredientItem v-for="ingredient of ingredientList" :key="ingredient.id" :ingredient="ingredient" />
      </div>
      <div class="seasonings">
        <IngredientItem v-for="seasoning of seasoningList" :key="seasoning.id" :ingredient="seasoning" />
      </div>
    </div>
    <div class="stepsWrap">
      <StepItem v-for="step of steps" :key="step.id" :step="step" />
    </div>
    <div class="summaryWrap">
      <h2>总结</h2>
      <div v-for="item in summary" :key="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import type { Recipe } from '@/types'
import StepItem from './StepItem.vue'
import IngredientItem from './IngredientItem.vue'
// 从props.recipe中获取属性
const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})
const index = props.index
const { name, description, summary, ingredients = [], steps = [] } = props.recipe as Recipe

steps.sort((a, b) => a.step_number - b.step_number)

// 'ingredient' | 'seasoning'
const ingredientList = computed(() => ingredients.filter((item) => item.type === 'ingredient'))
const seasoningList = computed(() => ingredients.filter((item) => item.type === 'seasoning'))
</script>

<style scoped lang="less">
.recipeWarp {
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 16px;

  .header {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .name {
    }
    .des {
    }
  }
}
.ingredientsWrap {
  display: flex;
  gap: 16px;
  .ingredients,
  .seasonings {
    padding: 8px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
  }
  .ingredients {
    flex: 1;
  }
  .seasonings {
    flex: 1;
  }
}
.stepsWrap {
}
.summaryWrap {
  h2 {
  }
}
</style>
