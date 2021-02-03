import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Request} from '../model/request.class';



const URL= 'http://localhost:8080/requests'


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  // service functions
  // getAll requests

  getAll(): Observable<Request[]> {
    return this.http.get(URL+'/') as Observable<Request[]>;
  }
  getById(id): Observable<Request> {
    return this.http.get(URL + '/' + id) as Observable<Request>;
  }
   // Request create
   create(Request:Request): Observable<Request> {
    return this.http.post(URL+'/',Request) as Observable<Request>;
  }
   // update Request
   update(Request: Request): Observable<Request> {
    return this.http.put(URL + '/', Request) as Observable<Request>;
  }
  // delete Request
  delete(id): Observable<Request> {
    return this.http.delete(URL + '/' + id) as Observable<Request>;
  }
  // login
  login(request: Request): Observable<Request> {
    return this.http.post(URL+'/login', request) as Observable<Request>;
  }
  // submit for review
  submitForReview(request:Request): Observable<Request> {
    console.log('submit-review:',request);
    return this.http.put(URL+'/submit-review', request) as Observable <Request>

  }
  
  //get list of requests for review
  getReview(id): Observable<Request[]> {
    return this.http.get(URL+'/list-review/' + id ) as Observable<Request[]>;
  }

  
}
