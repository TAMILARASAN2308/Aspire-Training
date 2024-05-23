// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'myApp';
//   fullName = "tamilarasan";

//   getName() {
//     return "tamil";
//   }

//   clickCount=0;
//   clickMe(){
//     this.clickCount++;
//   }
// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myAngularApp';
  fullName = "tamilarasan";

  getName() {
    return "tamilarasan";
  }

  clickCount=0;
  clickMe(){
    this.clickCount++;
  }
}
