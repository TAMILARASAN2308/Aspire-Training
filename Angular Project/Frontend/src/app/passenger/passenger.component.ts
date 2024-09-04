// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

interface PassengerForm {
  fullname: string;
  dob: string;
  gender: string;
  email: string;
  phoneNumber: string;
  bookingClass: string;
  alternatePhone: string;
  passengerAge: string;
}

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent]
})
export class PassengerComponent {
  passengerCount = 1;
  passengerForms: PassengerForm[] = [
    { fullname: '', dob: '', gender: '', email: '', phoneNumber: '', bookingClass: '', alternatePhone: '', passengerAge: '' }
  ];

  constructor(private router: Router) { }

  addPassengerForm() {
    this.passengerCount++;
    this.passengerForms.push({ fullname: '', dob: '', gender: '', email: '', phoneNumber: '', bookingClass: '', alternatePhone: '', passengerAge: '' });
  }

  async handleFormSubmit() {
    let allFormsValid = true;
    for (const form of this.passengerForms) {
      if (!this.isFormValid(form)) {
        allFormsValid = false;
        break;
      }
    }

    if (allFormsValid) {
      try {

        const response = await fetch('http://localhost:8000/auth/passenger', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.passengerForms)
        });

        const data = await response.json();
        if (response.ok) {
          alert(data.msg);
          this.router.navigate(['/payment']);
        } else {
          alert(data.msg);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Internal server error');
      }
    } else {
      alert('Please fill in all fields.');
    }
  }


  private isFormValid(form: PassengerForm): boolean {
    return Object.values(form).every(value => typeof value === 'string' && value.trim() !== '');
  }
}
