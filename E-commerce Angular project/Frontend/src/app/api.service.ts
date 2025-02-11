// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-011-2024
// Reviewed By :
// Review Date :


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(environment.apiUrl+'/api/v1/products')
  }

  searchProducts(searchText: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/v1/products', {
      params: { keyword: searchText }
    });
  }

  getSingleProducts(id:string):Observable<any>{
    return this.http.get(environment.apiUrl+'/api/v1/product/'+id)
  }

  orderCreate(order:any){
    return this.http.post(environment.apiUrl + '/api/v1/order', order);
}
  orderHistory(): Observable<any> {
  return this.http.get(environment.apiUrl + '/api/v1/all-products');
}
  checkout(order: any): Observable<any> {
  return this.http.post(environment.apiUrl + '/api/v1/checkout', order);
}


}
