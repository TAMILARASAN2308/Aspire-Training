// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponent],
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  rows: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBookings();
  }

  async fetchBookings(): Promise<void> {
    try {
      const response: any = await firstValueFrom(this.http.get('http://localhost:8000/auth/flightbookings'));
      this.rows = response;
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  }

  async handleCancelBooking(id: string): Promise<void> {
    try {
      await firstValueFrom(this.http.delete(`http://localhost:8000/auth/cancel/${id}`));
      this.rows = this.rows.filter(row => row._id !== id);
    } catch (error) {
      console.error('Error canceling booking:', error);
    }
  }
}
