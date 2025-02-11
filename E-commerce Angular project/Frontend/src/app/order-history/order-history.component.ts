import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.orderHistory().subscribe(
      (data: any) => {
        console.log('Order data:', data);
        this.orders = data.orders || []; // Ensure 'orders' matches your API response
      },
      (error) => {
        console.error('Error fetching order data:', error);
      }
    );
  }



  onDelete(orderId: string): void {
    this.orders = this.orders.filter(order => order._id !== orderId);
    alert('Order deleted successfully');
  }
}
