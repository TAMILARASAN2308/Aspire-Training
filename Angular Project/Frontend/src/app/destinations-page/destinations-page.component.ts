// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-destinations-page',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './destinations-page.component.html',
  styleUrls: ['./destinations-page.component.css']
})
export class DestinationsPageComponent {}
