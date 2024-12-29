import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  // authenticate(username: string, password: string, role: string): boolean {
  //   // Static credentials for demonstration purposes
  //   if (role === "Admin" && username === "admin" && password === "Admin@123") {
  //     sessionStorage.setItem('username', username);
  //     sessionStorage.setItem('role', role);
  //     return true;
  //   } else if (role === "Doctor" && username === "doctor" && password === "Doctor@123") {
  //     sessionStorage.setItem('username', username);
  //     sessionStorage.setItem('role', role);
  //     return true;
  //   }
  //   return false;
  // }

  authenticate(username: string, password: string, role: string): Observable<boolean> {
    const loginData = { username, password, role };
    return this.http.post<boolean>(`${this.baseUrl}/login`, loginData);
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    return !(user == null);
  }

  getUserRole(): string | null {
    return sessionStorage.getItem('role');
  }

  logout(): void {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
  }

}
