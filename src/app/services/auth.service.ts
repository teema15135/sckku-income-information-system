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
  CRED_KEY = 'user_cred';

  LOGIN_URL = `${environment.apiDomainName}/auth/login`;

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  get isLogin() {
    return this.loggedIn.value;
  }

  async relogin() {
    try {
      if (await this.login(this.getCredential())) {
        return true;
      }
      return false;
    } catch (err) {
      throw err;
    }
  }

  login(cred: Credential) {
    return new Promise((resolve, reject) => {
      this.http.post<LoginResponse>(this.LOGIN_URL, cred, {
        observe: 'response'
      }).subscribe(res => {
        this.setUser(res.body);
        this.setCredential(cred);
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
    this.storage.remove(this.USER_KEY);
    this.storage.remove(this.CRED_KEY);
    this.loggedIn.next(false);
    return true;
  }

  getCredential(): Credential {
    return this.storage.getObj(this.CRED_KEY);
  }

  setCredential(cred: Credential) {
    return this.storage.setObj(this.CRED_KEY, cred);
  }

  resetCredential() {
    return this.storage.remove(this.CRED_KEY);
  }

  setUser(user: User) {
    this.storage.setObj(this.USER_KEY, user);
  }

  getUser(): User {
    return this.storage.getObj(this.USER_KEY);
  }
}
