import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

    @Input() recipe!: Recipe;
    @Output() selectedRecipe = new EventEmitter<Recipe>()

    constructor() { }

    ngOnInit(): void {
    }

    selectRecipe(recipe: Recipe) {
        this.selectedRecipe.emit(recipe)
    }

}
