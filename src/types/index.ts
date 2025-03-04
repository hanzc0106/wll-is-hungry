export type Res<T> = {
  code: number
  data: T
  message: string
}

export interface Ingredient {
  id: number
  recipe_id: number
  NAME: string
  quantity: string
  type: 'ingredient' | 'seasoning'
  is_required: boolean
}

export interface Step {
  id: number
  recipe_id: number
  step_number: number
  description: string
}

export interface Recipe {
  id: number
  name: string
  description?: string
  summary: string[]
  createdAt: Date
  updatedAt?: Date
  ingredients?: Ingredient[]
  steps?: Step[]
}

export type RecipeRes = Recipe & { summary: string }
