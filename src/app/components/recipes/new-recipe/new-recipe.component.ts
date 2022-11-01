import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Category } from 'src/app/core/models/category';
import { Ingredient } from 'src/app/core/models/ingredient';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
    selector: 'app-new-recipe',
    templateUrl: './new-recipe.component.html',
    styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

    image: string = ''
    name: string = ''
    description: string = ''
    category?: Category
    ingredients: Ingredient[] = [
        {
            'name': '',
            quantity: '',
            type: '' 
        }
    ]
    steps: string[] = [
        ""
    ]

    constructor() { }

    ngOnInit(): void { 
    }

    check() {
        console.log(this.category)
    }

    setSlug(name: string) {

    }
}
