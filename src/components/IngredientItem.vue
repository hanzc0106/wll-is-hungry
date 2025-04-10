<template>
  <div class="ingredient">
    <p>{{ is_required ? `${name}（必需）` : name }}</p>
    <p>{{ quantity }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Ingredient } from '@/types'
const props = defineProps({
  ingredient: {
    type: Object,
    required: true,
  },
})

const {
  name,
  recipe_ingredients: { quantity, is_required },
} = props.ingredient as Required<Ingredient>
</script>

<style scoped>
.ingredient {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
