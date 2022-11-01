import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

    recipes: Recipe[] = []
    selectedRecipe?: Recipe
    previousRecipe?: Recipe
    nextRecipe?: Recipe
    selectNumber: number = 0

    constructor(private recipeService: RecipeService) { }

    ngOnInit(): void {
        this.recipeService.getRecipes().subscribe(data => {
            this.recipes = data
            this.setQueue()
        })
    }

    setRecipe(variable?: number): void {
        if (!variable) {
            this.selectNumber++
        } else if (this.selectNumber > 0) {
            this.selectNumber--
        } else {
            this.selectNumber = this.recipes.length - 1
        }

        if (this.selectNumber >= this.recipes.length) {
            this.selectNumber = 0
        }
 
        this.setQueue()
    }

    setQueue(): void {
        this.selectedRecipe = this.recipes[this.selectNumber]
        this.previousRecipe = this.recipes[
            this.selectNumber <= 0 
            ? this.recipes.length - 1
            : this.selectNumber - 1]
        this.nextRecipe = this.recipes[
            this.selectNumber >= this.recipes.length-1 
            ? 0 
            : this.selectNumber + 1]
    }

}
