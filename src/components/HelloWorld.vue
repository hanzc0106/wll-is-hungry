<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">今晚吃什么</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;

  position: relative;
  text-align: center;
  top: -10px;
}

@media (min-width: 1024px) {
  h1 {
    font-size: 2.6rem;
    text-align: left;
  }
}
</style>
