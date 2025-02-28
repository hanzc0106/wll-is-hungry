export type Ingredient = {
  id: number
  recipe_id: number
  NAME: string
  quantity: string
  type: 'ingredient' | 'seasoning'
  is_required: boolean
}

export type Step = {
  id: number
  recipe_id: number
  step_number: number
  description: string
}

export type Recipe = {
  id: number
  name: string
  description?: string
  summary: string
  createdAt: Date
  updatedAt?: Date
  ingredients?: Ingredient[]
  steps?: Step[]
}
