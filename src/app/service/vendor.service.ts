import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Vendor } from '../model/vendor.class';



const URL= 'http://localhost:8080/vendors'

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }
   // service functions
  // getAll products

  getAll(): Observable<Vendor[]> {
    return this.http.get(URL+'/') as Observable<Vendor[]>;
  }
  getById(id): Observable<Vendor> {
    return this.http.get(URL + '/' + id) as Observable<Vendor>;
  }
   // Vendor create
   create(Vendor:Vendor): Observable<Vendor> {
    return this.http.post(URL+'/',Vendor) as Observable<Vendor>;
  }
   // update Vendor
   update(Vendor: Vendor): Observable<Vendor> {
    return this.http.put(URL + '/', Vendor) as Observable<Vendor>;
  }
  // delete Vendor
  delete(id): Observable<Vendor> {
    return this.http.delete(URL + '/' + id) as Observable<Vendor>;
  }
  // login
  login(vendor: Vendor): Observable<Vendor> {
    return this.http.post(URL+'/login', vendor) as Observable<Vendor>;
  }

}
