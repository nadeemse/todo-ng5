import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';


import { ToastComponent } from '../shared/toast/toast.component';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthService {
  loggedIn = false;
  isAdmin = false;

  jwtHelper: JwtHelper = new JwtHelper();

  currentUser = { _id: '', username: '', role: '' };

  constructor(private userService: UserService,
              private router: Router,
              public toast: ToastComponent) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(emailAndPassword) {
    return this.userService.login(emailAndPassword)
    .subscribe(
      // Successful responses call the first callback.
      (response: any) => {
        console.log(response);
        localStorage.setItem('token', response.headers.get('access_token'));
        localStorage.setItem
        const decodedUser = {
          username: emailAndPassword.username,
          role: 'admin',
          _id: 123
        };
        this.setCurrentUser(decodedUser);
        this.router.navigate(['/account/profile']);
      },
      // Errors will call this callback instead:
      err => {
        this.toast.setMessage('invalid email or password!', 'error');
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.isAdmin = false;
    this.currentUser = { _id: '', username: '', role: '' };
    this.router.navigate(['/']);
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token).user;
  }

  setCurrentUser(decodedUser) {
    this.loggedIn = true;
    this.currentUser._id = decodedUser._id;
    this.currentUser.username = decodedUser.username;
    this.currentUser.role = decodedUser.role;
    decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    delete decodedUser.role;
  }

}
