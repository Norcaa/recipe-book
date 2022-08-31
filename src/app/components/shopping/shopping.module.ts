import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingComponent } from './shopping.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

const MODULES = [
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEditComponent
]

@NgModule({
    declarations: [
        ...MODULES
    ],
    exports: [
        ...MODULES
    ],
    imports: [
        CommonModule
    ]
})
export class ShoppingModule { }
