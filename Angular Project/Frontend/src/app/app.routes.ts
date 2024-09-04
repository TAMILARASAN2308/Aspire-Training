// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PassengerComponent } from './passenger/passenger.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { DestinationsPageComponent } from './destinations-page/destinations-page.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { TicketComponent } from './ticket/ticket.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'passenger', component: PassengerComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'confirm', component: ConfirmBookingComponent },
  { path: 'destinations', component: DestinationsPageComponent },
  { path: 'mybookings', component: MyBookingsComponent  },
  { path: 'ticket/:id', component: TicketComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

