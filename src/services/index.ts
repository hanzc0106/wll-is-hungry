import type { RecipeRes, Res } from '@/types'

const host = 'http://localhost:3232'
const api = '/api/v1'

// 查询素菜
export async function getAllVegeRecipes(): Promise<RecipeRes[]> {
  const res = await fetch(`${host}${api}/recipe/allVege`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
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
  })
  const data = (await res.json()) as Res<RecipeRes[]>
  return data.data
}

// 查询菜谱
export async function getRecipesByIds(ids: number[]): Promise<RecipeRes[]> {
  const res = await fetch(`${host}${api}/recipe/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ids }),
  })
  const data = (await res.json()) as Res<RecipeRes[]>
  return data.data
}
