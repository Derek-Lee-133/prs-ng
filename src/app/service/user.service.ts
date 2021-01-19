import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.class'

const URL= 'http://localhost:8080/users'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

   // service functions
  // getAll movies

  getAll(): Observable<User[]> {
    return this.http.get(URL+'/') as Observable<User[]>;
  }
  getById(id): Observable<User> {
    return this.http.get(URL + '/' + id) as Observable<User>;
  }
   // User create
   create(User:User): Observable<User> {
    return this.http.post(URL+'/',User) as Observable<User>;
  }
   // update User
   update(User: User): Observable<User> {
    return this.http.put(URL + '/', User) as Observable<User>;
  }
  // delete User
  delete(id): Observable<User> {
    return this.http.delete(URL + '/' + id) as Observable<User>;
  }
  // login
  login(user: User): Observable<User> {
    return this.http.post(URL+'/login', user) as Observable<User>;
  }

}
