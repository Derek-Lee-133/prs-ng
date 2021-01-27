import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {lineItem} from '../model/line-item';



const URL= 'http://localhost:8080/line-items'

@Injectable({
    providedIn: 'root'
  })

  export class LineItemService {

    constructor(private http: HttpClient) { }
  
    // service functions
    // getAll requests
  
    getAll(): Observable<lineItem[]> {
      return this.http.get(URL+'/') as Observable<lineItem[]>;
    }
    getById(id): Observable<lineItem> {
      return this.http.get(URL + '/' + id) as Observable<lineItem>;
    }
     // lineItem create
     create(lineItem:lineItem): Observable<lineItem> {
      return this.http.post(URL+'/',lineItem) as Observable<lineItem>;
    }
     // update lineItem
     update(lineItem: lineItem): Observable<lineItem> {
      return this.http.put(URL + '/', lineItem) as Observable<lineItem>;
    }
    // delete lineItem
    delete(id): Observable<lineItem> {
      return this.http.delete(URL + '/' + id) as Observable<lineItem>;
    }
    // login
    login(product: lineItem): Observable<lineItem> {
      return this.http.post(URL+'/login', product) as Observable<lineItem>;
    }
    // get all line-items by request id
    getAllLineItemsByRequestId(id): Observable<lineItem[]> {
      return this.http.get(URL + '/lines-for-pr/' + id) as Observable<lineItem[]>;
    }
  }
  