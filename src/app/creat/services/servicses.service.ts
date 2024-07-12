import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicsesCreat {

  constructor(private http: HttpClient) { }
  GetAllgategoryes(): Observable<any> {
    return this.http.get<any>(environment.baseApi+"products/categories")
  }


  creatproduct(model:any): Observable<any>{
   return this.http.post<any>(environment.baseApi+"products",model)
  }
}
