import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {
  baseUrl:string=`${environment.baseURL}/Products`;
// HttpClient
  constructor(private httpclient: HttpClient) { }

  // get all
  getAllProducts():Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(this.baseUrl)
  }

  // url param
  getProductByID(prdid:string):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`${this.baseUrl}/${prdid}`)
  }

  // query string
  searchPrdWithMaterial(mat:string):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${this.baseUrl}?Material=${mat}`)

  }
}
