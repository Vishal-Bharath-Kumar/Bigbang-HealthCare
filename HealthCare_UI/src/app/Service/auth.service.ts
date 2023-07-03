import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean>;
  public isLoggedIn: Observable<boolean>;

  constructor() {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(false);
    this.isLoggedIn = this.isLoggedInSubject.asObservable();
  }

  login(): void {
    // Your login logic here
    // Example: Update isLoggedInSubject value to true
    this.isLoggedInSubject.next(true);
  }

  logout(): void {
    // Your logout logic here
    // Example: Update isLoggedInSubject value to false
    this.isLoggedInSubject.next(false);
  }
}
