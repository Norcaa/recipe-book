import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeFullComponent } from './recipe-full/recipe-full.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryItemComponent } from './categories/category-item/category-item.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { CategoryPickerComponent } from './new-recipe/category-picker/category-picker.component';
import { RecipeListItemComponent } from './recipe-list/recipe-list-item/recipe-list-item.component';
import { RecipeGridItemComponent } from './recipe-list/recipe-grid-item/recipe-grid-item.component';
import { RecipeStreamItemComponent } from './recipe-list/recipe-stream-item/recipe-stream-item.component';

const MODULES = [
    RecipesComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeFullComponent,
    RecipeGridItemComponent,
    RecipeStreamItemComponent,
    CategoriesComponent,
    CategoryItemComponent,
    CategoryPickerComponent,
    NewRecipeComponent
]

@NgModule({
    declarations: [
        ...MODULES
    ],
    exports: [
        ...MODULES
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class RecipesModule { }
