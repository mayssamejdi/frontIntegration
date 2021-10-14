import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

const baseUrl ='http://localhost:8080/api/categ'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  getCategoryList(): Observable<any> {
    return this.http.get(baseUrl);
  }

  addCategory(name:string): Observable<any> {
    return this.http.post(`${baseUrl}/add`,{name});
  }
  updateCategory(id:number,name : any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}/update`, {name});
  }
  deleteCategory(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  getCategoryById(id: number):Observable<any>{
    return this.http.get(`${baseUrl}/${id}`)
  }
}
