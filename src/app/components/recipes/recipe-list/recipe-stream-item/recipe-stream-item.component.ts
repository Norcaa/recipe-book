import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';

@Component({
  selector: 'app-recipe-stream-item',
  templateUrl: './recipe-stream-item.component.html',
  styleUrls: ['./recipe-stream-item.component.scss']
})
export class RecipeStreamItemComponent implements OnInit {

    @Input() recipe!: Recipe;
    @Output() selectedRecipe = new EventEmitter<Recipe>()

    constructor() { }

    ngOnInit(): void {
    }

    selectRecipe(recipe: Recipe) {
        this.selectedRecipe.emit(recipe)
    }

}
