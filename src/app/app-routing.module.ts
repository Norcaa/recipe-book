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
        data: { title: 'Food App' },
        /*  component: HomeComponent, */
        children: [
            {
                path: 'recipe',
                //loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
                children: [
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
                        path: '',
                        component: RecipesComponent
                    }
                ]
            },
            {
                path: 'shopping',
                component: ShoppingComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
