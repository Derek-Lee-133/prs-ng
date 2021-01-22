import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from '../model/product.class';

const URL= 'http://localhost:8080/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

// service functions
  // getAll products

  getAll(): Observable<Product[]> {
    return this.http.get(URL+'/') as Observable<Product[]>;
  }
  getById(id): Observable<Product> {
    return this.http.get(URL + '/' + id) as Observable<Product>;
  }
   // Product create
   create(Product:Product): Observable<Product> {
    return this.http.post(URL+'/',Product) as Observable<Product>;
  }
   // update Product
   update(Product: Product): Observable<Product> {
    return this.http.put(URL + '/', Product) as Observable<Product>;
  }
  // delete Product
  delete(id): Observable<Product> {
    return this.http.delete(URL + '/' + id) as Observable<Product>;
  }
  // login
  login(product: Product): Observable<Product> {
    return this.http.post(URL+'/login', product) as Observable<Product>;
  }
}
