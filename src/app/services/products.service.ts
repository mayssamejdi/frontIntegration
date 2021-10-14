import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Products } from '../models/products';


const baseUrl ='http://localhost:8080/api/prod'
@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http:HttpClient) { }

   addProducts(name:any,quantity:any,id:any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/add/${id}`, {name,quantity});
  } 

 
  getProductsList(): Observable<any> {
    return this.http.get(baseUrl);
  }
  getProductById(id: number):Observable<any>{
    return this.http.get(`${baseUrl}/${id}`)
  }
  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  updateProduct(id:number,name:any,quantity:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, {name});
  }


}
