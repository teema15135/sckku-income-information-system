import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
  ) { }

  set(key: string, value: string) {
    return localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    return localStorage.removeItem(key);
  }

  setObj(key: string, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getObj(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
