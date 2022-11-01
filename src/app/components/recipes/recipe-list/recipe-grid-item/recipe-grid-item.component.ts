import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';

@Component({
  selector: 'app-recipe-grid-item',
  templateUrl: './recipe-grid-item.component.html',
  styleUrls: ['./recipe-grid-item.component.scss']
})
export class RecipeGridItemComponent implements OnInit {

    @Input() recipe!: Recipe;
    @Output() selectedRecipe = new EventEmitter<Recipe>()

    constructor() { }

    ngOnInit(): void {
    }

    selectRecipe(recipe: Recipe) {
        this.selectedRecipe.emit(recipe)
    }

}
