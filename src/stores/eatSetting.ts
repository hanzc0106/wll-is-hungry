import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useEatSettingStore = defineStore('eatSetting', () => {
  const vegeCount = ref(2)
  const meatCount = ref(1)

  function setVegeCount(count: number) {
    vegeCount.value = count
  }

  function setMeatCount(count: number) {
    meatCount.value = count
  }

  return { vegeCount, meatCount, setVegeCount, setMeatCount }
})
