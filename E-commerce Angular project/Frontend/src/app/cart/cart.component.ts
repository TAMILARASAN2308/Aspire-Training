import { ApiService } from './../api.service';
import { CartService } from './../cart.service';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavBarComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any = [];
  cartCount: number = 0;
  subTotal = 0;
  constructor(private router: Router,private cartService:CartService,private apiService:ApiService) { }


  ngOnInit(): void {
    this.cartService.currentItems.subscribe((data:any)=>{
      this.cartItems=data;
    })
    this.cartCount = this.cartItems.length;
    this.updateSubTotal();
  }

  increaseQty(item: any): void {
    if (item.qty == item.product.stock) {
      alert(`Cannot increase quantity. Maximum available stock is ${item.product.stock}.`);
      return;
    }
    item.qty++;
    this.subTotal++;
  }

  decreaseQty(item: any): void {
    if (item.qty == 1) {
      return
    }
    item.qty--;
    this.subTotal--;

  }
  updateSubTotal(){
    this.subTotal = this.cartItems.reduce((acc: any, current: any) => {
      return acc + current.qty;
    }, 0);
  }

  getTotal(): number {
    return this.cartItems.reduce((acc: any, item: any) => acc + (item.product.price * item.qty), 0);
  }

  removeFromCart(productId: string): void {
    console.log('Removing product with ID:', productId);
    this.cartService.removeItem(productId);
    this.cartService.currentItems.subscribe((data: any) => {
      this.cartItems = data;
      this.cartCount = this.cartItems.length;
      this.updateSubTotal();
    });
}


checkout() {
  this.apiService.orderCreate(this.cartItems).subscribe((data: any) => {
    if (data.success) {
      const orderId = data.order._id;
      // Navigate to the checkout process component with the cart data and order ID
      this.router.navigate(['checkout-process'], {
        queryParams: { orderId: orderId, cartData: JSON.stringify(this.cartItems) }
      });
    } else {
      console.error('Order creation failed:', data);
    }
  });
}


}
