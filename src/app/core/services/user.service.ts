import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    // TODO: roles, profile, etc

    //private apiUrl = "http://localhost:8080/users"
    private apiUrl = "http://localhost:3000/users"

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        console.log('get Users')
        return this.http.get<User[]>(this.apiUrl);
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, user);
    }

    updateUser(user: User): Observable<User> {
        const url = `${this.apiUrl}/${user.id}`;
        return this.http.put<User>(url, user);
    }

    deleteUser(user: User): Observable<User> {
        const url = `${this.apiUrl}/${user.id}`
        return this.http.delete<User>(url);
    }
}
