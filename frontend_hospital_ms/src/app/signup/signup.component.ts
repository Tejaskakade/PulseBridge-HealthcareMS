import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../user'; // Import the User model

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = new User(); // Use the User class

  constructor(private router: Router, private http: HttpClient) {}

  register(form: NgForm): void {
    if (form.invalid) {
      alert('Please fill all fields correctly.');
      return;
    }

    // Call the backend API
    this.http.post<boolean>('http://localhost:8080/api/do_register', this.user).subscribe({
      next: (response) => {
        if (response) {
          alert('Signup successful! Redirecting to login page...');
          this.router.navigate(['/login']);
        } else {
          alert('Signup failed. Please try again.');
        }
      },
      error: (error) => {
        console.error('Error during signup:', error);
        alert('An error occurred during signup. Please try again.');
      }
    });
  }
}
