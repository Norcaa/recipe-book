import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

    itemName!: string;
    itemQuantity!: number;

    @Output() addNewShoppingItem = new EventEmitter<Ingredient>()

    constructor() { }

    ngOnInit(): void {
    }

    onAddItem() {
        this.addNewShoppingItem.emit(new Ingredient(this.itemName, this.itemQuantity.toString(), 'anyhting'))
    }

    onDeleteItem() {

    }

    onClearForm() {
        this.itemName = ''
        this.itemQuantity = 0
    }

}
