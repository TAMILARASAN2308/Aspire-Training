import { Component } from '@angular/core';
import { product } from './product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductComponent {

  categoryInput:string="Stationary";

  products:product[]=[{productId:101,productName:"Laptop",cost:40000,category:"Electronics"},
  {productId:102,productName:"Pendrive",cost:400,category:"Electronics"},
  {productId:103,productName:"Mobile",cost:30000,category:"Electronics"},
  {productId:104,productName:"Pepsi",cost:80,category:"Beverages"},
  {productId:105,productName:"7Up",cost:85,category:"Beverages"},
  {productId:106,productName:"Charger",cost:450,category:"Electronics"},
  {productId:107,productName:"Pen",cost:40,category:"Stationary"},
  {productId:108,productName:"Bag",cost:1500,category:"Stationary"},
  {productId:109,productName:"PowerBank",cost:4000,category:"Electronics"},
  {productId:110,productName:"File",cost:50,category:"Stationary"},
  {productId:111,productName:"Slice",cost:40000,category:"Beverages"}
  ];
}
