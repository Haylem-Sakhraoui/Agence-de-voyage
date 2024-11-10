import { Injectable } from '@angular/core';
import { Login } from 'src/app/model/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  list: Login[];

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Method to log in the admin and store their data in cookies
  loginAdmin(login: Login): Observable<Login> {
    return new Observable((observer) => {
      this.http
        .post<Login>(
          'http://localhost:5000/api/users/loginUser',
          login,
          this.httpOptions
        )
        .subscribe(
          (response) => {
            // Store user data in cookies
            this.cookieService.set('adminData', JSON.stringify(response), {
              path: '/',
            });
            observer.next(response);
            observer.complete();
          },
          (error) => observer.error(error)
        );
    });
  }

  // Method to register a new admin
  addAdmin(login: Login): Observable<Login> {
    return this.http.post<Login>(
      'http://localhost:5000/api/users/new',
      login,
      this.httpOptions
    );
  }

  // Method to log out the admin by clearing the cookie
  logoutAdmin(): void {
    this.cookieService.delete('adminData', '/');
  }

  // Method to get the logged-in admin data from cookies
  getAdminData(): Login | null {
    const adminData = this.cookieService.get('adminData');
    return adminData ? (JSON.parse(adminData) as Login) : null;
  }
}
