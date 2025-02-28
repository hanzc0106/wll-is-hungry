import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEatSettingStore = defineStore('eatSetting', () => {
  const vegeCount = ref(1)
  const meatCount = ref(1)

  function setVegeCount(count: number) {
    vegeCount.value = count
  }

  function setMeatCount(count: number) {
    meatCount.value = count
  }

  return { vegeCount, meatCount, setVegeCount, setMeatCount }
})
