import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from "../products-list/products-list.component";
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products-parent',
  standalone: true,
  imports: [FormsModule, ProductsListComponent],
  templateUrl: './products-parent.component.html',
  styleUrl: './products-parent.component.scss'
})
export class ProductsParentComponent {
  filtername:string='';
  cart:Iproduct[]=[];
  addProductInCart(newPrd:Iproduct){

    this.cart.push(newPrd);
  }

}
