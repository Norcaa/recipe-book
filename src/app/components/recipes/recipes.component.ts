import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
    selectedRecipe!: Recipe

    constructor() { }

    ngOnInit(): void {
    }

}
