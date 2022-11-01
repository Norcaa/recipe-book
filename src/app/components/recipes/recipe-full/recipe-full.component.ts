import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/core/models/category';
import { Recipe } from 'src/app/core/models/recipe';
import { CategoryService } from 'src/app/core/services/category.service';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
    selector: 'app-recipe-full',
    templateUrl: './recipe-full.component.html',
    styleUrls: ['./recipe-full.component.scss']
})
export class RecipeFullComponent implements OnInit {

    recipename: string = 'big-night-pizza'
    recipe!: Recipe; 
    category!: Category
    
    constructor(
        private router: ActivatedRoute, 
        private recipeService: RecipeService, 
        private categoryService: CategoryService) { }

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
                this.findCategory()
            }
        })
    }

    findCategory() {
        this.category = new Category(1, 'Meat', 'local_pizza', 'https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2020/06/iStock-1141704314-1200x675.jpg')
        /* this.categoryService.getCategories().subscribe(datas => {
            datas.forEach(category => {
                if (this.recipe.category = category.id) {
                    this.category = category
                }
            })
        }) */
    }
}
