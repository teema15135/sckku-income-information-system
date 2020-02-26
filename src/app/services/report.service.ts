import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IncomeRecord } from '../models/record.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private http: HttpClient
  ) { }

  getAllDailyReport(): Promise<IncomeRecord[]> {
    return new Promise((resolve, reject) => {
      this.http.get<IncomeRecord[]>(`${environment.apiDomainName}/report/1`, {
        observe: 'response'
      }).subscribe(report => {
        resolve(report.body);
      }, err => {
        if (err.status === 401) {
          resolve([]);
        } else {
          reject();
        }
      });
    });
  }
}
