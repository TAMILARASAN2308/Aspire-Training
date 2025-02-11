import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Output() dataEmitter = new EventEmitter<string>();
  searchText:string = '';

  search(){
    this.dataEmitter.emit(this.searchText);
  }

  clearSearch(){
    if(this.searchText==""){
      this.search()
    }
  }

  searchByEnterKey(){
    this.search()
  }
}
