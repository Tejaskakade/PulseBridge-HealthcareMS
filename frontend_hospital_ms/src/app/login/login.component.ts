import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  role: string = "Admin"; // Default role selection
  inValidLogin: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  checkLogin() {
    this.authService.authenticate(this.username, this.password, this.role).subscribe(
      (response) => {
        if (response) {
          sessionStorage.setItem('username', this.username);
          sessionStorage.setItem('role', this.role);

          // Navigate based on the role
          if (this.role === "Admin") {
            this.router.navigate(['admin']);
          } else if (this.role === "Doctor") {
            this.router.navigate(['docdash']);
          }

          this.inValidLogin = false;
        } else {
          this.inValidLogin = true;
          alert("Invalid credentials or role!");
        }
      },
      (error) => {
        console.error(error);
        this.inValidLogin = true;
        alert("An error occurred while logging in. Please try again.");
      }
    );
  }
}
