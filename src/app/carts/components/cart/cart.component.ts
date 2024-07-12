import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartProducts: any[] = [];
  public total: number = 0;
  public success:boolean = false;

  ngOnInit(): void {
    this.getCartProduct();
    this.getCartpriceTotal();
  }

  getCartProduct() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
  }

  getCartpriceTotal() {
    this.total = this.cartProducts.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.price * currentValue.amount);
    }, 0);
  }

  detactedinput(){
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))
  }
  increseAmount(index:number) {
    this.cartProducts[index].amount++
    this.getCartpriceTotal()
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))
  }

  decreseAmount(index:number) {
    this.cartProducts[index].amount--
    this.getCartpriceTotal()
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))
  }

  DeleteProduct(index:number){
    this.cartProducts.splice(index,1)
    this.getCartpriceTotal()
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))
  }

  ClearAllProduct(){
    this.cartProducts=[]
    this.getCartpriceTotal()
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))
  }

  orderNow(){
    this.success=true
  }
}

