import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsParentComponent } from "./Components/products-parent/products-parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductsListComponent, FooterComponent, ProductsParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-standaloneproject';
}
