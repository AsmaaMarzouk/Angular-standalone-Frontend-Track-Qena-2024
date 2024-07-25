import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  prdID:number=0;

  product:Iproduct|undefined=undefined;
  constructor(private activatedRoute: ActivatedRoute,private productservice:ProductsService) {}
  ngOnInit(): void {

  //  console.log( this.activatedRoute.snapshot.paramMap.get('ProductId'));

  // convert from string to number => parseInt , Number , +
  this.prdID=(this.activatedRoute.snapshot.paramMap.get('ProductId'))?Number(this.activatedRoute.snapshot.paramMap.get('ProductId')):0;
  // console.log(this.prdID);

 this.product= this.productservice.getProductById(this.prdID);
//  console.log(this.product);

  }
}
