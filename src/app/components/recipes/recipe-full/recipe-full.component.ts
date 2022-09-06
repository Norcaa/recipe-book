import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
    selector: 'app-recipe-full',
    templateUrl: './recipe-full.component.html',
    styleUrls: ['./recipe-full.component.scss']
})
export class RecipeFullComponent implements OnInit {

    recipename: string = 'Big Night Pizza'
    recipe!: Recipe; 
    
    constructor(private router: ActivatedRoute, private recipeService: RecipeService) { }

    ngOnInit(): void {
        this.router.params.subscribe(param => {
            this.recipename = param['recipename']
            console.log(this.recipename)

            this.recipeService.getRecipes().subscribe(recipes => {
                this.findRecipe(recipes)
            })
        })        
    }

    findRecipe(recipes: Recipe[]) {
        recipes.forEach(recipe => {
            if (this.recipename == recipe.slug) {
                this.recipe = recipe
            }
        })
    }

}
