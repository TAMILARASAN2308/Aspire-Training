import { ApiService } from './../api.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavBarComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  products:any = [];
  searchText:string = '';

  constructor(private apiService:ApiService){
  }

  receiveData(searchText: string) {
    this.searchText = searchText;
    console.log('Received:', searchText);
    this.apiService.searchProducts(this.searchText).subscribe((data:any)=>{
      this.products = data.products;
    })
  }

  ngOnInit(): void {
      this.apiService.getProducts().subscribe((data)=>{
        this.products = data.products;
      })
  }
}
