import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-group-of-routes',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterOutlet],
  templateUrl: './group-of-routes.component.html',
  styleUrl: './group-of-routes.component.scss'
})
export class GroupOfRoutesComponent {

}
