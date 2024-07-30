import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAuthenService } from '../../Services/user-authen.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  user:boolean = true;
constructor(private userAuthService: UserAuthenService){
  // this.user=this.userAuthService.getUserLogged;
}
  ngOnInit(): void {

    this.userAuthService.getUserLogObserable().subscribe({
      next:(u)=>{
        this.user=u;
        console.log(this.user);

      },
      error:(err)=>{
        console.log(err);

      }
    })
  }


}
