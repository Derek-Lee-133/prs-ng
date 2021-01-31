import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineItem } from '../model/line-item';
import { Product } from '../model/product.class';





const URL = 'http://localhost:8080/line-items'

@Injectable({
  providedIn: 'root'
})

export class LineItemService {

  constructor(private http: HttpClient) { }

  // service functions
  // getAll requests

  getAll(): Observable<LineItem[]> {
    return this.http.get(URL + '/') as Observable<LineItem[]>;
  }
  getById(id): Observable<LineItem> {
    return this.http.get(URL + '/' + id) as Observable<LineItem>;
  }
  // LineItem create
  create(LineItem: LineItem): Observable<LineItem> {
    console.log("add a LineItem", LineItem)
    return this.http.post(URL + '/', LineItem) as Observable<LineItem>;
  }
  // update LineItem
  update(LineItem: LineItem): Observable<LineItem> {
    return this.http.put(URL + '/', LineItem) as Observable<LineItem>;
  }
  // delete LineItem
  delete(id): Observable<LineItem> {
    return this.http.delete(URL + '/' + id) as Observable<LineItem>;
  }
  // login
  login(product: LineItem): Observable<LineItem> {
    return this.http.post(URL + '/login', product) as Observable<LineItem>;
  }
  // get all line-items by request id
  getAllLineItemsByRequestId(id): Observable<LineItem[]> {
    return this.http.get(URL + '/lines-for-pr/' + id) as Observable<LineItem[]>;
  }
  compProduct(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }
}
