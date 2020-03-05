import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IncomeRecord } from '../models/record.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
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

  getFeeIncome() {
    return new Observable<Fee>((sub) => {
      setTimeout(() => {
        // tslint:disable-next-line: max-line-length
        sub.next({ fees: [{id: '010', name: '1. สาขาวิชาคณิตศาสตร์', depth: 0, values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '011', name: '- คณิตศาสตร์', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '012', name: '- คณิตศาสตร์ประยุกต์', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '020', name: '2. สาขาวิชาเคมี', depth: 0, values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '021', name: '- เคมี', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '022', name: '- เคมีอินทรีย์', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '023', name: '- วิทยาศาสตร์โพลิเมอร์', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '024', name: '- เคมีสำหรับครู', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '030', name: '3. สาขาวิชาจุลชีววิทยา', depth: 0, values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '031', name: '- จุลชีววิทยา', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '040', name: '4. สาขาวิชาชีวเคมี', depth: 0, values: [0, 0, 0, 42340, 0, 0, 0, 0, 0, 0, 0, 0, 42340]}, {id: '041', name: '- ชีวะเคมี', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '050', name: '5. สาขาวิชาชีววิทยา', depth: 0, values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '051', name: '- ชีวะวิทยา', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '052', name: '- ชีวะวิทยาสำหรับครู', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '060', name: '6. สาขาวิชาฟิสิกส์', depth: 0, values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '061', name: '- ฟิสิกส์', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '062', name: '- วัสดุศาสตร์และนาโนเทคโนโลยี', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '070', name: '7. สาขาวิทยาการคอมพิวเตอร์', depth: 0, values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '071', name: '- วิทยาการคอมพิวเตอร์', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '072', name: '- วิทยาการคอมพิวเตอร์ (ภาษาอังกฤษ)', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '073', name: '- เทคโนโลยีสารสนเทศและการสื่อสาร', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '074', name: '- เทคโนโลยีสารสนเทศ', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '075', name: '- ภูมิสารสนเทศศาสตร์', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '076', name: '- การรับรู้จากระยะไกล​ ฯ', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '080', name: '8. สาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม', depth: 0, values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '081', name: '- วิทยาศาสตร์สิ่งแวดล้อม', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '090', name: '9. สาขาวิชาสถิติ', depth: 0, values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '091', name: '- สถิติ', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '092', name: '- สารสนเทศสถิติ', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '093', name: '- สถิติประยุกต์', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '100', name: '10. หลักสูตรนิติวิทยาศาสตร์', depth: 0, values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '101', name: '- นิติวิทยาศาสตร์', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '110', name: '11. หลักสูตรวิทยาศาสตร์ชีวภาพ', depth: 0, values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '111', name: '- วิทยาศาสตร์ชีวภาพ (นานาชาติ)', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, {id: '120', name: '12. สำนักงานคณบดี', depth: 0, values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}]});
        sub.complete();
      }, 3000);
    });
  }

  updateFeeIncome(fee: Fee) {
    console.log(fee);
  }
}
