// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  flightPrice: string = 'Rs.1000';
  cardNumber: string = '';
  cardHolder: string = '';
  expirationMM: string = '';
  expirationYY: string = '';
  cvv: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    const storedPrice = localStorage.getItem('flightPrice');
    if (storedPrice) {
      this.flightPrice = `Rs.${storedPrice}`;
    }
  }

  handleSubmit(event: Event): void {
    event.preventDefault();

    if (!this.cardNumber || !this.cardHolder || !this.expirationMM || !this.expirationYY || !this.cvv) {
      alert('Please fill in all fields before submitting.');
    } else {
      this.http.post('http://localhost:8000/auth/payment', {
        cardNumber: this.cardNumber,
        cardHolder: this.cardHolder,
        expirationMM: this.expirationMM,
        expirationYY: this.expirationYY,
        CVV: this.cvv
      }).subscribe({
        next: (response: any) => {
          if (response.msg_type === 'success') {
            alert(response.msg);
            this.router.navigateByUrl('/confirm');
          } else {
            alert('Payment failed. Please try again.');
          }
        },
        error: (error) => {
          console.error('Error:', error);
          alert('Internal server error');
        }
      });
    }
  }

}
