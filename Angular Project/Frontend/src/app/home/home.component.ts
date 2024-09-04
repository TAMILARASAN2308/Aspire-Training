// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedClass: string = '';

  constructor(private router: Router) {}

  handleClassType(className: string) {
    this.selectedClass = className;


    (document.getElementById('classInput') as HTMLInputElement).value = className;

    const buttons = document.getElementsByClassName('cbnt');
    Array.from(buttons).forEach((btn) => {
      const span = btn as HTMLSpanElement;
      span.style.backgroundColor = '';
      span.style.color = '#64748b';
    });


    const classMap: { [key: string]: number } = {
      'Business Class': 0,
      'Economy Class': 1,
      'First Class': 2
    };

    const selectedIndex = classMap[className];
    if (selectedIndex !== undefined && buttons[selectedIndex]) {
      const selectedButton = buttons[selectedIndex] as HTMLSpanElement;
      selectedButton.style.backgroundColor = '#3d5cb8';
      selectedButton.style.color = '#ffffff';
    }
  }

  async handleSubmit(event: Event) {
    event.preventDefault();

    const fromLocation = (document.getElementById('fromLocation') as HTMLSelectElement).value;
    const toLocation = (document.getElementById('toLocation') as HTMLSelectElement).value;
    const departureDate = (document.getElementById('departuredate') as HTMLInputElement).value;
    const returnDate = (document.getElementById('returndate') as HTMLInputElement).value;
    const classType = (document.getElementById('classInput') as HTMLInputElement).value;

    if (!fromLocation || !toLocation || !departureDate) {
      alert('Please fill in all required fields before submitting.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/auth/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fromLocation, toLocation, departureDate, returnDate, classType })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const flights = await response.json();

      this.router.navigate(['/search'], { state: { flights, fromLocation, toLocation, departureDate, returnDate, classType } });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
}
