export type Res<T> = {
  code: number
  data: T
  message: string
}

export interface RecipeIngredient {
  recipe_id: number
  ingredient_id: number
  quantity: string
  is_required: boolean
}

export interface Ingredient {
  id: number
  type: 'ingredient' | 'seasoning'
  name: string
  recipe_ingredients?: RecipeIngredient
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
