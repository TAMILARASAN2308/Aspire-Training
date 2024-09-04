// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  id: string = '';
  passengers: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.fetchPassengerDetails();
  }

  async fetchPassengerDetails(): Promise<void> {
    try {
      const response: any = await this.http.get(`http://localhost:8000/auth/ticket/${this.id}`).toPromise();
      this.passengers = response;
    } catch (error) {
      console.error('Error fetching passenger details:', error);
    }
  }
}
