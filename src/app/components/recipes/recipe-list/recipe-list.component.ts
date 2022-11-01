import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/core/models/ingredient';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { __values } from 'tslib';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

    @Output() selectedRecipe = new EventEmitter<Recipe>()

    recipes: Recipe[] = []
    //route: string = ''

    constructor(private recipeService: RecipeService, private router: ActivatedRoute) { }

    ngOnInit(): void {
        this.recipeService.getRecipes().subscribe(recipes => {
            console.log(recipes)
        
            this.recipes = recipes
            console.log(this.recipes)
        })

        /* this.router.url.subscribe(url => {
            console.log(url)
        }) */
    }

    selectRecipe(selectedRecipe: Recipe) {
        this.selectedRecipe.emit(selectedRecipe)
    }
}
