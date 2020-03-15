import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SummaryReport } from '../models/summaryReport.model';
import { DailyReport } from '../models/dailyReport.model';
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
        if (err.status === 401) {
          resolve([{
            receiptDate: '-',
            receiptNumber: '-',
            accountCode: '-',
            incomeCodeSc: '-',
            incomeListKku: '-',
            incomeListSc: '-',
            details: '-',
            receivingType: '-',
            amountOfMoney: '-',
            branchName: '-',
          }]);
        } else {
          reject(err);
        }
        http.unsubscribe();
      });
    });
  }

  getSummaryReportFinding(incomeCodeSc: string) {
    return new Promise((resolve, reject) => {
      const http = this.http.get(`${environment.apiDomainName}/report/2/${incomeCodeSc}`, {
        observe: 'response'
      }).subscribe(res => {
        resolve(res.body);
        http.unsubscribe();
      }, err => {
        if (err.status === 401) {
          resolve([{
            receiptDate: '-',
            receiptNumber: '-',
            accountCode: '-',
            incomeCodeSc: '-',
            incomeListKku: '-',
            incomeListSc: '-',
            details: '-',
            receivingType: '-',
            amountOfMoney: '-',
            branchName: '-',
          }]);
        } else {
          reject(err);
        }
        http.unsubscribe();
      });
    });
  }

  getDailyReportData() {
    return new Promise<any[]>((resolve, reject) => {
      const http = this.http.get<any[]>(`${environment.apiDomainName}/report/1`, {
        observe: 'response'
      }).subscribe(res => {
        resolve(res.body);
        http.unsubscribe();
      }, err => {
        if (err.status === 401) {
          resolve([{
            receiptDate: '-',
            receiptNumber: '-',
            incomeCodeSc: '-',
            incomeListSc: '-',
            amountOfMoney: '-',
            branchName: '-'
          }]);
        } else {
          reject(err);
        }
        http.unsubscribe();
      });
    });
  }

  getDailyReportDataManually(date: string) {
    return new Promise<any[]>((resolve, reject) => {
      const http = this.http.get<any[]>(`${environment.apiDomainName}/report/1/${date}`, {
        observe: 'response'
      }).subscribe(res => {
        resolve(res.body);
        http.unsubscribe();
      }, err => {
        if (err.status === 401) {
          resolve([{
            receiptDate: '-',
            receiptNumber: '-',
            incomeCodeSc: '-',
            incomeListSc: '-',
            amountOfMoney: '-',
            branchName: '-'
          }]);
        } else {
          reject(err);
        }
        http.unsubscribe();
      });
    });
  }

  getTypeReportData() {
    return new Promise((resolve, reject) => {
      const http = this.http.get(`${environment.apiDomainName}/report/3`, {
        observe: 'response'
      }).subscribe(res => {
        resolve(res.body['data']);
        http.unsubscribe();
      }, err => {
        if (err.status === 401) {
          // resolve([{
          //   receiptDate: '-',
          //   receiptNumber: '-',
          //   accountCode: '-',
          //   incomeCodeSc: '-',
          //   incomeListKku: '-',
          //   incomeListSc: '-',
          //   details: '-',
          //   receivingType: '-',
          //   amountOfMoney: '-',
          //   branchName: '-',
          // }]);
        } else {
          reject(err);
        }
        http.unsubscribe();
      });
    });
  }


}
