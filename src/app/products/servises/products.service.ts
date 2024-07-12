import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(environment.baseApi + 'products');
  }

  getALLCategory(): Observable<any> {
    return this.http.get<any>(environment.baseApi + "products/categories")
  }
  getproductsByCategory(word: string): Observable<any> {
    return this.http.get<any>(environment.baseApi + `products/category/${word}`);
  }

  GetProductById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseApi + `products/${id}`);
  }
}
