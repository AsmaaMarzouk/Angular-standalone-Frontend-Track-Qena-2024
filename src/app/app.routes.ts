import { Routes } from '@angular/router';
import { MainHomeComponent } from './Components/main-home/main-home.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ObsAndOperatorsComponent } from './Components/obs-and-operators/obs-and-operators.component';

export const routes: Routes = [
  // routes => path
  // default path
  // first path match
  // {path:'',component:MainHomeComponent},
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:MainHomeComponent,title:"Home page"},
  {path:"Products",component:ProductsListComponent,title:"Products list page"},
  {path:"ProductsParent",component:ProductsParentComponent,title:"Products Parent page"},
  {path:'Prd/:ProductId',component:ProductDetailsComponent,title:"Product Details"},
  {path:'ObsAndOperators',component:ObsAndOperatorsComponent,title:"Obs Page"},
  // not found page, wildcard path
  {path:"**",component:NotFoundPageComponent},

];

// second case
// export const routes: Routes = [

//  {path:"",component:GroupOfRoutesComponent,children:[
//   {path:'Home',component:MainHomeComponent,title:"Home page"},
//   {path:"Products",component:ProductsListComponent,title:"Products list page"},
//   {path:"ProductsParent",component:ProductsParentComponent,title:"Products Parent page"},
//  ]},
//   // not found page, wildcard path
//   {path:"**",component:NotFoundPageComponent},

// ];
