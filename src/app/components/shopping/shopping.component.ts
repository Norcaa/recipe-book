import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient';

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('Tomato', '2', 'anything'),
        new Ingredient('Apple', '5', 'anything')
    ]

    constructor() { }

    ngOnInit(): void {
    }

    addNewShoppingItem(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
    }

}
