import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    /* examples */
    categories: Category[] = [ 
        new Category(1, 'Meat', '', 'https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2020/06/iStock-1141704314-1200x675.jpg'),
        new Category(1, 'Soup', '', 'https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2020/06/iStock-1141704314-1200x675.jpg'),
        new Category(1, 'Bakery', '', 'https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2020/06/iStock-1141704314-1200x675.jpg')
    ]

    constructor(private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.categoryService.getCategories().subscribe(datas => {
            console.log(datas)
            this.categories = datas
        })
    }

}
