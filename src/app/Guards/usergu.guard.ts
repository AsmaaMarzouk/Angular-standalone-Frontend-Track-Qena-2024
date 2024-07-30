import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthenService } from '../Services/user-authen.service';

export const userguGuard: CanActivateFn = (route, state) => {

  const userAuth=inject(UserAuthenService);
  const router=inject(Router);

  if(userAuth.getUserLogged){
    return true;
  }
  else{
    alert("Please login first")
    router.navigate(['/UserLogin']);
    return false;
  }
};
