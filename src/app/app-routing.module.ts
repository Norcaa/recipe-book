import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/recipes/categories/categories.component';
import { NewRecipeComponent } from './components/recipes/new-recipe/new-recipe.component';
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
                path: 'auth',
                children: [
                    {
                        path: 'login',
                        component: AuthComponent
                    },
                    {
                        path: 'registration',
                        component: AuthComponent
                    },
                    {
                        path: 'profile',
                        component: ProfileComponent
                    },
                    {
                        path: 'forgot-password',
                        component: ForgotPasswordComponent
                    }
                ]
            },
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
