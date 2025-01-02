<template>
  <button @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
defineEmits(['click'])
</script>

<style scoped></style>
