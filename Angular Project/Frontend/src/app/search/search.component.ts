// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  flights: any[] = [];
  fromLocation: string = '';
  toLocation: string = '';
  departureDate: string = '';
  returnDate: string = 'N/A';
  classType: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      flights: any[];
      fromLocation: string;
      toLocation: string;
      departureDate: string;
      returnDate: string;
      classType: string;
    };

    if (state) {
      this.flights = state.flights || [];
      this.fromLocation = state.fromLocation || '';
      this.toLocation = state.toLocation || '';
      this.departureDate = state.departureDate || '';
      this.returnDate = state.returnDate || 'N/A';
      this.classType = state.classType || '';
    }
  }
}
