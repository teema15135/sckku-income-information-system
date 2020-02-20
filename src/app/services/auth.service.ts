import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../models/credential.model';
import { LoginResponse } from '../models/authResponse.model';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  USER_KEY = 'user';

  LOGIN_URL = `${environment.apiDomainName}/auth/login`;

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  get isLogin() {
    return this.loggedIn.value;
  }

  login(cred: Credential) {
    return new Promise((resolve, reject) => {
      this.http.post<LoginResponse>(this.LOGIN_URL, cred, {
        observe: 'response'
      }).subscribe(res => {
        this.setUser(res.body);
        this.loggedIn.next(true);
        resolve(res.body);
      }, err => {
        if (err.status === 401) {
          resolve(false);
        }
      });
    });
  }

  logout() {
    return new Promise(resolve => {
      this.loggedIn.next(false);
      resolve(true);
    });
  }

  setUser(user: User) {
    this.storage.setObj(this.USER_KEY, user);
  }

  getUser(): User {
    return this.storage.getObj(this.USER_KEY);
  }
}
