import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.css'
})
export class OrderSuccessComponent implements OnInit {
  orderId = '';
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((data) => { 
      this.orderId = data['id'];
    });
  }
}
