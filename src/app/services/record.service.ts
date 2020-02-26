import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IncomeRecord } from '../models/record.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(
    private http: HttpClient
  ) { }

  saveIncomeRecord(body: IncomeRecord) {
    return new Promise((resolve, reject) => {
      const http = this.http.post(`${environment.apiDomainName}/record/1`, body, {
        observe: 'response'
      }).subscribe(res => {
        resolve(res);
        http.unsubscribe();
      }, err => {
        reject(err);
        http.unsubscribe();
      });
    });
  }
}
