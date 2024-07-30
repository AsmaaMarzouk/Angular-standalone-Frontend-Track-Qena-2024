import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenService {
  isuserLogged: BehaviorSubject<boolean>;
  constructor() {
    this.isuserLogged = new BehaviorSubject<boolean>(this.getUserLogged);
  }

  // login
  login(useremail: string, password: string) {
    let token = '123456';
    localStorage.setItem('usertoken', token);
    this.isuserLogged.next(true);
  }
  // logout
  logout() {
    localStorage.removeItem('usertoken');
    this.isuserLogged.next(false);
  }

  // true , false
  // usertoken

  get getUserLogged() {
    return localStorage.getItem('usertoken') ? true : false;
  }

  getUserLogObserable(){
    return this.isuserLogged.asObservable()
  }
}
