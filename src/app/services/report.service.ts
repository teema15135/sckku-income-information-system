import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SummaryReport } from '../models/summaryReport.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private http: HttpClient
  ) { }

  getSummaryReportData() {
    return new Promise((resolve, reject) => {
      const http = this.http.get(`${environment.apiDomainName}/report/2`, {
        observe: 'response'
      }).subscribe(res => {
        resolve(res.body);
        http.unsubscribe();
      }, err => {
        reject(err);
        http.unsubscribe();
      });
    });
  }
  
}
