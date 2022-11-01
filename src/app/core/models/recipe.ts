import { Ingredient } from "./ingredient"

export class Recipe {
    constructor(
        public id: number, 
        public name: string, 
        public slug: string, 
        public category: number, // id
        public time: number, // id
        public description: string, 
        public ingredients: Ingredient[], 
        public steps: string[], 
        public difficulty: string, //TODO: enum? 
        public imagePath: string) {
    }
}