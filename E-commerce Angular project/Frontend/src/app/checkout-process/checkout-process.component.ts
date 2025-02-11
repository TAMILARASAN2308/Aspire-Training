import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout-process',
  standalone: true,
  imports: [NavBarComponent, FormsModule, CommonModule],
  templateUrl: './checkout-process.component.html',
  styleUrls: ['./checkout-process.component.css']
})
export class CheckoutProcessComponent implements OnInit {
  shippingAddress: string = '';
  cartItems: any[] = [];
  paymentMethod: string = '';
  cardDetails = {
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  };
  orderId: string = '';

  constructor(private route: ActivatedRoute, private router: Router,private apiService:ApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['cartData']) {
        this.cartItems = JSON.parse(params['cartData']);
      }
      if (params['orderId']) {
        this.orderId = params['orderId'];
      }
    });
  }

  getTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.qty), 0);
  }

  onProceed() {
    const checkoutData = {
      address: this.shippingAddress,
      paymentMethod: this.paymentMethod,
      cardDetails: this.paymentMethod === 'card' ? this.cardDetails : {}
    };

    this.apiService.checkout(checkoutData).subscribe(
      response => {
        console.log('Checkout successful:', response);
        this.router.navigate(['order', 'success', this.orderId]);
      },
      error => {
        console.error('Error during checkout:', error);
      }
    );
  }

}
