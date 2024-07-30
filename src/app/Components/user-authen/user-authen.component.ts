import { Component } from '@angular/core';
import { UserAuthenService } from '../../Services/user-authen.service';

@Component({
  selector: 'app-user-authen',
  standalone: true,
  imports: [],
  templateUrl: './user-authen.component.html',
  styleUrl: './user-authen.component.scss'
})
export class UserAuthenComponent {
  userlog:boolean=true;
constructor(private userauthService: UserAuthenService){
  this.userlog=this.userauthService.getUserLogged;
  // console.log(this.userlog);

}

loginFunc(){
  this.userauthService.login("user@gmail.com","1111");
  this.userlog=this.userauthService.getUserLogged;
}
logoutFunc(){
  this.userauthService.logout();
  this.userlog=this.userauthService.getUserLogged;

}
}
