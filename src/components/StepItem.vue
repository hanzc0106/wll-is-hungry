<template>
  <div class="step">
    <p>{{ step_number }}.&nbsp;</p>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Step } from '@/types'

const props = defineProps({
  step: {
    type: Object,
    required: true,
  },
})

const { step_number, description } = props.step as Step
</script>

<style scoped>
.step {
  display: flex;
}
</style>
