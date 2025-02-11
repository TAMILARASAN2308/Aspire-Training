// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-011-2024
// Reviewed By :
// Review Date :


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any = [];

  constructor() { }

  itemsSource = new BehaviorSubject([]);
  currentItems = this.itemsSource.asObservable();

  addItem(newCartItem: any) {
    const preCartItem = this.cartItems.find(
      (element: any) => element.product._id === newCartItem.product._id
    );
    if (preCartItem) {
      alert('Item already in cart');
      return;
    }

    this.cartItems.push(newCartItem);
    this.itemsSource.next(this.cartItems);
    alert('Item added to cart');
  }
  removeItem(productId: any) {
    this.cartItems = this.cartItems.filter((item:any) => item.product._id !== productId);
    this.itemsSource.next(this.cartItems);
    alert('Item removed from cart');
  }
}
