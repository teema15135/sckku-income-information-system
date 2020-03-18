import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IncomeRecord } from '../models/record.model';
import { environment } from 'src/environments/environment';
import { Observable, Subscriber } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { Fee } from '../models/fee.model';
import { CompileShallowModuleMetadata } from '@angular/compiler';

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

  getIncomeRecord(recordId: string) {
    return this.http.get<IncomeRecord>(`${environment.apiDomainName}/record/1/${recordId}`);
  }

  updateIncomeRecord(body: IncomeRecord) {
    return this.http.put(`${environment.apiDomainName}/report/2`, body, {
        observe: 'response'
      });
  }

  deleteIncomeRecord(body: IncomeRecord) {
    return this.http.put(`${environment.apiDomainName}/report/2`, {
      _id: body._id,
      receiptDate: body.receiptDate,
      receiptNumber: body.receiptNumber,
      paymentLocation: '',
      departmentName: '',
      branchName: '',
      accountCode: '',
      incomeListKku: '',
      incomeCodeSc: '',
      incomeListSc: 'ยกเลิก',
      details: '',
      receivingType: '',
      dateDeposit: '',
      checkNumber: '',
      checkDate: '',
      amountOfMoney: null,
    }, { observe: 'response' });
  }

  getFeeIncome() {
    return this.http.get<Fee>(`${environment.apiDomainName}/record/2`);
  }

  updateFeeIncome(fee: Fee) {
    return this.http.post(`${environment.apiDomainName}/record/2`, fee);
  }

  saveKKUFMIS(values: number[]) {
    const body = [
      {
        sc: '410100000',
        value: values[3]
      }, {
        sc: '410102000',
        value: values[4]
      }, {
        sc: '410105000',
        value: values[5]
      }, {
        sc: '410300000',
        value: values[6]
      }, {
        sc: '410400000',
        value: values[7]
      }, {
        sc: '410500000',
        value: values[8]
      }, {
        sc: '410600000',
        value: values[9]
      }, {
        sc: '410800000',
        value: values[10]
      }, {
        sc: '411300000',
        value: values[11]
      }, {
        sc: '999999912',
        value: values[12]
      }, {
        sc: '411000000',
        value: values[13]
      }, {
        sc: '999999914',
        value: values[14]
      }, {
        sc: '999999915',
        value: values[15]
      }, {
        sc: '999999916',
        value: values[16]
      }, {
        sc: '999999917',
        value: values[17]
      }, {
        sc: '411200000',
        value: values[18]
      }
    ];
    return this.http.post(`${environment.apiDomainName}/record/3`, body);
  }
}
