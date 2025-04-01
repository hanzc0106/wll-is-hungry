export function getLocalStorage<T>(key: string): T | undefined {
  const value = localStorage.getItem(key)
  if (value) {
    return JSON.parse(value)
  }
  return undefined
}

export function setLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value))
}

export function rmLocalStorage(key: string): void {
  localStorage.removeItem(key)
}

export function clearLocalStorage(): void {
  localStorage.clear()
}
