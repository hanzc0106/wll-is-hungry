<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  max: {
    type: Number,
    default: 5,
  },
  min: {
    type: Number,
    default: 0,
  },
  value: {
    type: Number,
    default: 0,
  },
  defaultValue: {
    type: Number,
    default: 0,
  },
})
const emits = defineEmits(['update:modelValue', 'change', 'input'])

import { ref, computed } from 'vue'
import AppButton from './AppButton.vue'

const min = computed(() => props.min)
const max = computed(() => props.max)
const value = ref(props.value || props.defaultValue)

const disableSub = computed(() => value.value === min.value)
const disableAdd = computed(() => value.value === max.value)

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const val = parseInt(target.value)
  const displayVal = Object.is(val, NaN) ? 0 : val < min.value ? min.value : val > max.value ? max.value : val
  value.value = displayVal
  emits('update:modelValue', value.value)
  emits('change', value.value)
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const val = parseInt(target.value)
  const displayVal = Object.is(val, NaN) ? 0 : val < min.value ? min.value : val > max.value ? max.value : val
  value.value = displayVal
  emits('update:modelValue', value.value)
  emits('input', value.value)
}

const sub = () => {
  if (value.value <= min.value) return
  value.value--
  emits('update:modelValue', value.value)
  emits('change', value.value)
}

const add = () => {
  if (value.value >= max.value) return
  value.value++
  emits('update:modelValue', value.value)
  emits('change', value.value)
}
</script>

<template>
  <div class="input-number">
    <label v-if="props.label" class="label">{{ props.label }}: </label>
    <AppButton class="btn btn-sub" :class="disableSub" @click="sub">-</AppButton>
    <input class="input" type="text" :value="value" @change="handleChange" @input="handleInput" />
    <AppButton class="btn btn-add" :class="disableAdd" @click="add">+</AppButton>
  </div>
</template>

<style scoped>
.label {
  margin-inline-end: 1rem;
}

.disableSub {
  background-color: var(--vt-c-white-mute);
  color: var(--vt-c-black-mute);
}

.input {
  margin-inline: 0.5rem;
  text-align: center;
  width: 4rem;
}
</style>
