import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../models/credential.model';
import { LoginResponse } from '../models/authResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  WEB_SERVICE_URL = `https://protected-shelf-83050.herokuapp.com`;
  LOGIN_URL = `${this.WEB_SERVICE_URL}/auth/login`;

  constructor(
    private http: HttpClient
  ) { }

  login(cred: Credential) {
    return new Promise((resolve, reject) => {
      this.http.post<LoginResponse>(this.LOGIN_URL, cred, {
        observe: 'response'
      }).subscribe(res => {
        resolve(res.body);
      }, err => {
        if (err.status === 401) {
          resolve(false);
        }
      });
    });
  }
}
