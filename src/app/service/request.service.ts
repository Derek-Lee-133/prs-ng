import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Request} from '../model/request.class';
import {lineItem} from '../model/line-item';


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
  login(product: Request): Observable<Request> {
    return this.http.post(URL+'/login', product) as Observable<Request>;
  }
  // get all line-items by request id
  getAllLineItemsByRequestId(id): Observable<lineItem[]> {
    return this.http.get(URL + '/lines-for-pr' + id) as Observable<lineItem[]>;
  }
}
