// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  msg: string = '';
  msgType: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const userName = (form.elements.namedItem('userName') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    const confirmPassword = (form.elements.namedItem('confirmPassword') as HTMLInputElement).value;

    this.http.post<{ msg: string; msg_type: string }>('http://localhost:8000/auth/register', {
      userName,
      email,
      password,
      confirmPassword
    }).subscribe({
      next: (data) => {
        this.msg = data.msg;
        this.msgType = data.msg_type;
        if (data.msg_type === 'success') {
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        console.error('Error:', error);
        this.msg = 'Internal server error';
        this.msgType = 'error';
      }
    });
  }
}
