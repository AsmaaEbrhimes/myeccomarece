import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products/servises/products.service';
import { ServicsesCreat } from './creat/services/servicses.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    HeaderComponent,
    CommonModule,
    ReactiveFormsModule
   
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsService,ServicsesCreat]
})
export class AppComponent {
  title = 'my-ecommerce';
}
