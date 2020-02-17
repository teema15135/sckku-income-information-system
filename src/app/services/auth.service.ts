import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../models/credential.model';
import { LoginResponse } from '../models/authResponse.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  USER_KEY = 'user';

  WEB_SERVICE_URL = `https://protected-shelf-83050.herokuapp.com`;
  LOGIN_URL = `${this.WEB_SERVICE_URL}/auth/login`;

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  login(cred: Credential) {
    return new Promise((resolve, reject) => {
      this.http.post<LoginResponse>(this.LOGIN_URL, cred, {
        observe: 'response'
      }).subscribe(res => {
        this.setUser(res.body);
        resolve(res.body);
      }, err => {
        if (err.status === 401) {
          resolve(false);
        }
      });
    });
  }

  setUser(user) {
    this.storage.setObj(this.USER_KEY, user);
  }

  getUser() {
    return this.storage.getObj(this.USER_KEY);
  }
}
