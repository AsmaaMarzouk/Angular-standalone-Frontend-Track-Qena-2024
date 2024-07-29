import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base:string=`${environment.baseURL}/Users`;
  httpheader:{};
  constructor(private httpclient: HttpClient) {
    this.httpheader={
      options:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  addUser(newUser:Iuser):Observable<Iuser>{
    return this.httpclient.post<Iuser>(this.base,newUser,this.httpheader)

  }
}
