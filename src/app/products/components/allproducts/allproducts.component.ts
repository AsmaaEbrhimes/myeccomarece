
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../servises/products.service';
import { CommonModule } from '@angular/common';
import { SpennerComponent } from '../../../shared/components/spenner/spenner.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-allproducts',
  standalone: true,
  imports: [CommonModule, SpennerComponent, FormsModule, RouterModule],   // شرط اساسي ال  import ده
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit, OnDestroy {
  public products: any[] = [];
  public categories: any[] = []
  public value: any = ""
  public Cart: any = []
  addbutton: boolean = false
  loding: boolean = false
  amount: number = 0

  private _ProductsService = inject(ProductsService)
  private _Subscription = new Subscription();

  ngOnInit(): void {
    this.getProducts();
    this.getcategories();
  }
  getProducts(): void {
    this.loding = true
    this._Subscription.add(
      this._ProductsService.getAllProducts().subscribe({
        next: (res) => {
          this.loding = false
          this.products = res;
        },
        error: (err) => {
          console.log(err)
        },
      })
    )
  }
  getcategories(): void {
    this._Subscription.add(
      this._ProductsService.getALLCategory().subscribe({
        next: (res) => {
          this.categories = res;
        },
        error: (err) => {
        },
      })
    )
  }
  ngOnDestroy(): void {
    this._Subscription.unsubscribe();
  }


  FilterCategory(event: any) {
    let value = event.target.value
    if (value == "all") {
      this.getProducts()
    } else {
      this.getproductsCategory(value)
    }
  }

  getproductsCategory(word: string) {
    this.loding = true
    this._Subscription.add(
      this._ProductsService.getproductsByCategory(word).subscribe({
        next: (res) => {
          this.loding = false
          this.products = res
        },
        error: (err) => {
          console.log(err)
        },
      })
    )

  }


  AddToCart(item: any) {
    item.addbutton = false;
    if (!item.amount || item.amount <= 0) {
      alert('Please enter a valid quantity.');
      return;
    }
    let cart: any[] = [];
    if ('cart' in localStorage) {
      cart = JSON.parse(localStorage.getItem('cart')!);
    }
    const exists = cart.find((cartItem: any) => cartItem.id === item.id);
    if (exists) {
      alert('This product already exists in the cart.');
      return;
    }
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }



  toggleAddButton(item: any) {
    item.addbutton = true;
  }
}




