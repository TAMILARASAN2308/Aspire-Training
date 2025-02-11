import { CartService } from './../cart.service';
import { ApiService } from './../api.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,NavBarComponent,FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  product:any=null;
  qty:number=1;
  preCartItem: boolean = false;

  constructor(private route:ActivatedRoute,private apiService:ApiService,private cartService:CartService){
  }

  ngOnInit(): void {
      this.route.params.subscribe((data)=>{
        console.log(data['id'],'PARAMETER DATA');
        const id:string= data['id'];
        this.apiService.getSingleProducts(id).subscribe((data:any)=>{
          this.product=data.product;
          console.log(this.product);
        })
      })
  }

  increaseQty(){
    if(this.qty == this.product.stock){
      return;
    }
    this.qty++
  }
  decreaseQty(){
    if(this.qty == 1){
      return;
    }
    this.qty--
  }

  addToCart() {
    const newCartItem = {
      product:this.product,
      qty:this.qty
    };

    if (this.product.stock == 0) {
      alert("Out Of Stock")
      return;
    }

    this.cartService.addItem(newCartItem);
  }

}
