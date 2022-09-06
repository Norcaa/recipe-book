import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component'; 
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeFullComponent } from './recipe-full/recipe-full.component';

const MODULES = [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeFullComponent
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
