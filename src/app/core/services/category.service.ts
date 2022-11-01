import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private apiUrl = "http://localhost:3000/categories"
    //private apiUrl = "http://localhost:8080/categories"

    constructor(private http: HttpClient) { }

    getCategories(): Observable<Category[]> {
        console.log('get categories')
        return this.http.get<Category[]>(this.apiUrl);
    }

    addCategory() {
        // TODO: roles, admin request 
    }

    UpdateCategory() {
        // TODO: roles, admin request 
    }

    deleteCategory() {
        // TODO: roles, admin request 
    }
}
