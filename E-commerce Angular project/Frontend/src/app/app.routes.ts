// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-011-2024
// Reviewed By :
// Review Date :

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckoutProcessComponent } from './checkout-process/checkout-process.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

export const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'product/:id', component:ProductDetailComponent },
  { path: 'cart', component:CartComponent},
  { path: 'order/success/:id', component: OrderSuccessComponent },
  {path:'checkout-process',component:CheckoutProcessComponent},
  {path:'order-history',component:OrderHistoryComponent}
];
