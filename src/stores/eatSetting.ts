import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getLocalStorage, setLocalStorage } from '@/utils/localstorage'

export const useEatSettingStore = defineStore('eatSetting', () => {
  const vegeCount = ref(1)
  const meatCount = ref(1)

  function setVegeCount(count: number) {
    vegeCount.value = count
    setLocalStorage('vegeCount', count)
  }

  function setMeatCount(count: number) {
    meatCount.value = count
    setLocalStorage('meatCount', count)
  }

  function init() {
    // 直接初始化而不是在onMounted中
    if (getLocalStorage<string>('vegeCount')) {
      vegeCount.value = Number(getLocalStorage<string>('vegeCount'))
    }
    if (getLocalStorage<string>('meatCount')) {
      meatCount.value = Number(getLocalStorage<string>('meatCount'))
    }
  }
  init()

  return { vegeCount, meatCount, setVegeCount, setMeatCount }
})
