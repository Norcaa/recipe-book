import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeFullComponent } from './components/recipes/recipe-full/recipe-full.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingComponent } from './components/shopping/shopping.component';

const routes: Routes = [
    {
        path: '',
        /*  component: HomeComponent, */
        children: [
            {
                path: 'recipe',
                children: [
                    {
                        path: 'new',
                        component: NewRecipeComponent,
                    },
                    {
                        path: ':recipename',
                        component: RecipeFullComponent,
                    }
                ]
            },
            {
                path: 'recipes',
                children: [
                    {
                        path: 'list',
                        component: RecipeListComponent
                    },
                    {
                        path: 'categories',
                        component: CategoriesComponent
                    },
                    {
                        path: '',
                        component: RecipesComponent
                    }
                ]
            },
            {
                path: 'shopping',
                component: ShoppingComponent,
            },
            {
                path: '',
                component: HomeComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
