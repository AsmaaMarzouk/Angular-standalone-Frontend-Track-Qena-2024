import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { Iproduct } from '../../Models/iproduct';
import { Location } from '@angular/common';
import { ProductsWithApiService } from '../../Services/products-with-api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  // prdID: number = 0;
  prdID: number = 0;
  product: Iproduct | undefined = undefined;
  IDsList: number[] = [];
  currentIndex: number = 0;

  // Day6
  searchResult:Iproduct[]=[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productservice: ProductsService,
    private router: Router,
    private location: Location,
    private productApi: ProductsWithApiService
  ) {}
  ngOnInit(): void {
    //  console.log( this.activatedRoute.snapshot.paramMap.get('ProductId'));

    // convert from string to number => parseInt , Number , +
    // this.prdID=(this.activatedRoute.snapshot.paramMap.get('ProductId'))?Number(this.activatedRoute.snapshot.paramMap.get('ProductId')):0;
    // console.log(this.prdID);

    //  this.product= this.productservice.getProductById(this.prdID);
    //  console.log(this.product);

    // Day5
    this.IDsList = this.productservice.getProductsIDs();
    // console.log(this.IDsList);

    this.activatedRoute.paramMap.subscribe((params) => {
      this.prdID = Number(params.get('ProductId')) || 0;
      // console.log(this.prdID);

      // this.product = this.productservice.getProductById(this.prdID);
      // let prod = this.productservice.getProductById(this.prdID);
      // if (prod) {
      //   this.product = prod;
      // } else {
      //   // alert("product not found")
      //   // this.router.navigate(['**'])
      //   this.location.back();
      // }

      // Day6

      this.productApi.getProductByID(this.prdID.toString()).subscribe({
        next: (prd) => {
          this.product = prd;
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  prevFunc() {
    this.currentIndex = this.IDsList.indexOf(this.prdID);
    // console.log(this.currentIndex);
    this.router.navigate(['Prd', this.IDsList[--this.currentIndex]]);
  }
  nextFunc() {
    this.currentIndex = this.IDsList.indexOf(this.prdID);
    this.router.navigate(['Prd', this.IDsList[++this.currentIndex]]);
  }

  goBackFunc() {
    this.location.back();
    // this.router.navigate(['/Products']);
  }

  // Day6
  searchFunc(material:string) {
    this.productApi.searchPrdWithMaterial(material).subscribe({
      next:(data)=>{

        // console.log(data);
        this.searchResult=data;

      },
      error:(error)=>{
        console.log(error);

      }
    })

  }
}
