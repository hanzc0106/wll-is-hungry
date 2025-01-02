export const random = (n: number) => {
  return Math.floor(Math.random() * n)
}

export const shuffle = <T>(arr: T[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = random(i + 1)
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

export const randomPickIndexes = (n: number, k: number) => {
  if (k > n) {
    throw new Error('k must be less than n')
  }

  const indexes = Array.from({ length: n }, (_, i) => i)
  shuffle(indexes)
  return indexes.slice(0, k)
}

export const randomPick = <T>(arr: T[], k: number) => {
  const indexes = randomPickIndexes(arr.length, k)
  return arr.filter((_, index) => indexes.includes(index))
}
