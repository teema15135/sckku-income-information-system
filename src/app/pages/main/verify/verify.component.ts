import { Component, OnInit } from '@angular/core';
import { VerifyService } from 'src/app/services/verify.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  scCodeMap: string[];
  tableSource: Table[];

  constructor(
    private verifyService: VerifyService
  ) { }

  ngOnInit() {
    this.initialScCodeMap();
    this.initialTableStructure();
    this.getVerifyTable();
  }

  initialScCodeMap() {
    this.scCodeMap = [
      '410100000',
      '410102000',
      '410105000',
      '410300000',
      '410400000',
      '410500000',
      '410600000',
      '410800000',
      '411300000',
      '999999912',
      '411000000',
      '999999914',
      '999999915',
      '999999916',
      '999999917',
      '411200000'
    ];
  }

  initialTableStructure() {
    this.tableSource = [
      {
        date: 'Today', type: 'รายได้',
        name: '1. รายได้จากการจัดการศึกษา', indent: 0
      },
      { name: '1.1 ค่าธรรมเนียมการศึกษาและค่าหน่วยกิจ', indent: 1 },
      { name: '1.2 ค่าธรรมเนียมการศึกษาอื่น ๆ', indent: 1 },
      { name: '2. รายได้จากการให้บริการวิชาการ', indent: 0 },
      { name: '3. รายได้จากการบริหารสินทรัพย์', indent: 0 },
      { name: '4. รายได้ดอกเบี้ยรับและจากการลงทุน', indent: 0 },
      { name: '5. รายได้จากการรับบริจาค', indent: 0 },
      { name: '6. รายได้จากการจำหน่ายผลิตผลการเรียนการสอน', indent: 0 },
      { name: '7. รายได้จากการวิจัย', indent: 0 },
      { name: '8. รายได้ค่าขายสิ่งของ', indent: 0 },
      { name: '9. รายได้ค่าธรรมเนียมสาธารณูปโภค', indent: 0 },
      { name: '10. รายได้จากการรับโอน', indent: 0 },
      { name: '10.1 รับโอนจากทุนสำรองสะสม', indent: 1 },
      { name: '10.2 รับโอนจากเงินสำรองกันเบิกเหลื่อมปี', indent: 1 },
      { name: '11. รายได้ระหว่างหน่วยงาน', indent: 0 },
      { name: '12. รายได้อื่น ๆ', indent: 0 },
    ];
  }

  getVerifyTable() {
    this.verifyService.getVerifyTable().subscribe(res => {
      for (const i of res) {
        const index = this.findScIndex(i.sc);
        if (index === -1) {
          continue;
        }
        this.tableSource[index].sc = i.daily;
        this.tableSource[index].kkufmis = i.kkufmis;
        this.tableSource[index].different = i.different;
      }
    }, err => console.error(err));
  }

  findScIndex(code: string): number {
    for (let i = 0; i < this.scCodeMap.length; i++) {
      if (code === this.scCodeMap[i]) {
        return i;
      }
    }
    return -1;
  }

}

class Table {
  date?: string;
  type?: string;
  name: string;
  indent: number;
  kkufmis?: number;
  sc?: number;
  different?: number;
}
