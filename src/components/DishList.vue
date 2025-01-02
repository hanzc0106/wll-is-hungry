<template>
  <div class="dish-list" @click="$emit('generate')">
    <h3 v-if="$slots.default"><slot></slot></h3>
    <div class="dish-list-dishes">
      <DishItem v-for="dish of props.dishes" :key="dish.name">{{ dish.name }}</DishItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import DishItem from './DishItem.vue'
const props = defineProps(['dishes'])
</script>

<style scoped>
.dish-list:hover {
  cursor: pointer;
}

.dish-list h3 {
  margin-bottom: 0.2rem;
  text-align: center;
}

.dish-list-dishes {
  padding: 0.6rem 0.5rem;

  width: 10rem;
  min-height: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;

  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
}
</style>
