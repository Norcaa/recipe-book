import { Ingredient } from "./ingredient"

export class Recipe {
    public id!: number
    public name!: string
    public slug!: string // temporarly?
    public description!: string
    public ingredients!: Ingredient[]
    public steps!: string[]
    public imagePath!: string

    // timers!: number[] | preptime, waittime, cooktime
    // originalURL: string | source
    // tags: string[] | Tag[]
    // table: calories, fat, satfat, carbs, fiber, sugar, protein
    // servings
    // specifics
    // comments
    // "I Made It"
    // rating
    // nutrient content

    constructor(id: number, name: string, slug: string, description: string, ingredients: Ingredient[], steps: string[], imagePath: string) {
        this.id = id
        this.name = name
        this.slug = slug
        this.description = description
        this.ingredients = ingredients
        this.steps = steps
        this.imagePath = imagePath
    }
}