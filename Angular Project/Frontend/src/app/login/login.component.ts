// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  msg: string = '';
  msgType: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { userName, password } = this.loginForm.value;

      this.http.post<any>('http://localhost:8000/auth/login', { userName, password })
        .pipe(
          catchError(error => {
            console.error('Error:', error);
            this.msg = 'Internal server error';
            this.msgType = 'error';
            return of(null);
          })
        )
        .subscribe(data => {
          if (data && data.msg) {
            this.msg = data.msg;
            this.msgType = data.msg_type;
            if (data.msg_type === 'success') {
              this.router.navigate(['/home']);
            }
          }
        });
    }
  }
}
