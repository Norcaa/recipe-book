import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    private apiUrl = "http://localhost:3000/recipes"

    constructor(private http: HttpClient) { }

    getRecipes(): Observable<Recipe[]> {
        console.log('get recipes')
        return this.http.get<Recipe[]>(this.apiUrl);
    }

    postRecipe(recipe: Recipe): Observable<Recipe> {
        return this.http.post<Recipe>(this.apiUrl, recipe);
    }

    updateRecipe(recipe: Recipe): Observable<Recipe> {
        const url = `${this.apiUrl}/${recipe.id}`; //http://localhost:3000/tasks/*frissítendőid*
        return this.http.put<Recipe>(url, recipe);
    }

    deleteRecipe(recipe: Recipe): Observable<Recipe> {
        const url = `${this.apiUrl}/${recipe.id}`
        return this.http.delete<Recipe>(url);
    }



}
