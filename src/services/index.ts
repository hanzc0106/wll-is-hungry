import type { RecipeRes, Res } from '@/types'
import { config } from '@/config/constants'
console.log(import.meta.env.MODE)

const { host, apiPath: api } = config

// 查询素菜
export async function getAllVegeRecipes(): Promise<RecipeRes[]> {
  const res = await fetch(`${host}${api}/recipe/allVege`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    credentials: 'omit',
  })
  const data = (await res.json()) as Res<RecipeRes[]>
  return data.data
}

// 查询荤菜
export async function getAllMeatRecipes(): Promise<RecipeRes[]> {
  const res = await fetch(`${host}${api}/recipe/allMeat`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    credentials: 'omit',
  })
  const data = (await res.json()) as Res<RecipeRes[]>
  return data.data
}

// 查询菜谱
export async function getRecipesByIds(ids: number[]): Promise<RecipeRes[]> {
  const params = new URLSearchParams()
  ids.forEach((id) => {
    params.append('id', id.toString())
  })
  const res = await fetch(`${host}${api}/recipe/query?${params.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    credentials: 'omit',
  })
  const data = (await res.json()) as Res<RecipeRes[]>
  return data.data
}
