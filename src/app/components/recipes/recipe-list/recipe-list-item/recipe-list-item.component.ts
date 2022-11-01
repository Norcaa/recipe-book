import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';

@Component({
    selector: 'app-recipe-list-item',
    templateUrl: './recipe-list-item.component.html',
    styleUrls: ['./recipe-list-item.component.scss']
})
export class RecipeListItemComponent implements OnInit {

    @Input() recipe!: Recipe;
    @Output() selectedRecipe = new EventEmitter<Recipe>()

    constructor() { }

    ngOnInit(): void {
    }

    selectRecipe(recipe: Recipe) {
        this.selectedRecipe.emit(recipe)
    }

}
