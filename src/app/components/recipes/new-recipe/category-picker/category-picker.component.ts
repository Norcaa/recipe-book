import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Category } from 'src/app/core/models/category';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
    selector: 'app-category-picker',
    templateUrl: './category-picker.component.html',
    styleUrls: ['./category-picker.component.scss']
})
export class CategoryPickerComponent implements OnInit {

    @Output() category = new EventEmitter<Category>()
    selectedCategory = new FormControl<any>('');
    categories: Category[] = []
    filteredOptions?: Observable<Category[]>;

    constructor(private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.categoryService.getCategories().subscribe(datas => {
            this.categories = datas
            this.filteredOptions = this.selectedCategory.valueChanges.pipe(
                startWith(''), 
                map(value => this._filter(value || '')),
            );
        })     
    }

    private _filter(value: string): Category[] {
        const filterValue = value.toString().toLowerCase()
        return this.categories.filter(category => category.name.toLowerCase().includes(filterValue));
    }

    getOptionName(option: Category): string {
        return option.name
    }

    emitCategory() {
        console.log('emit Category')
        if (this.selectedCategory.value) {
            this.category.emit(this.selectedCategory.value)
        }       
    }
}
