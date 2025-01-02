<script setup lang="ts">
const props = defineProps(['label', 'max', 'min', 'defaultValue'])
const emits = defineEmits(['change'])

import { ref, computed } from 'vue'
import AppButton from './AppButton.vue'

const min = computed(() => props.min || 0)
const max = computed(() => props.max || 5)
const value = ref(props.defaultValue || 0)

const disableSub = computed(() => value.value === min.value)
const disableAdd = computed(() => value.value === max.value)

const sub = () => {
  if (value.value <= min.value) return
  value.value--
  emits('change', value.value)
}

const add = () => {
  if (value.value >= max.value) return
  value.value++
  emits('change', value.value)
}

const input = (event: Event) => {
  const target = event.target as HTMLInputElement
  const intV = parseInt(target.value)
  const displayV = Object.is(intV, NaN) ? 0 : intV < min.value ? min.value : intV > max.value ? max.value : intV
  value.value = displayV
  target.value = displayV
  emits('change', value.value)
}
</script>

<template>
  <div class="input-number">
    <label v-if="props.label" class="label">{{ props.label }}: </label>
    <AppButton class="btn btn-sub" :class="disableSub" @click="sub">-</AppButton>
    <input class="input" type="text" :value="value" @change="input" />
    <AppButton class="btn btn-add" :class="disableAdd" @click="add">+</AppButton>
  </div>
</template>

<style scoped>
.input-number {
}

.label {
  margin-inline-end: 1rem;
}

.btn {
}
.btn-sub {
}
.btn-add {
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
