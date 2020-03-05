import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kkufmis',
  templateUrl: './kkufmis.component.html',
  styleUrls: ['./kkufmis.component.scss']
})
export class KkufmisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['item', 'cost'];
  dataSource: any[] = [
    {item: 'รายได้', depth: 0, noInput: true},
    {item: 'รายได้จากเงินงบประมาณ', depth: 1, noInput: true},
    {item: 'รายได้ที่เกิดจากการดำเนินงาน', depth: 1, noInput: true},
    {item: '1. รายได้จากการจัดการศึกษา', cost: 0.00, depth: 2},
    {item: '1.1 ค่าธรรมเนียมการศึกษาและค่าหน่วยกิต', cost: 0.00, depth: 3},
    {item: '1.2 ค่าธรรมเนียมการศึกษาอื่น ๆ', cost: 0.00, depth: 3},
    {item: '2. รายได้จากการให้บริการวิชาการ', cost: 0.00, depth: 2},
    {item: '3. รายได้จากการบริหารสินทรัพย์', cost: 0.00, depth: 2},
    {item: '4. รายได้ดอกเบี้ยรับและจากการลงทุน', cost: 0.00, depth: 2},
    {item: '5. รายได้จากการรับบริจาค', cost: 0.00, depth: 2},
    {item: '6. รายได้จากการจำหน่ายผลิตผลการเรียนการสอน', cost: 0.00, depth: 2},
    {item: '7. รายได้จากการวิจัย', cost: 0.00, depth: 2},
    {item: '8. รายได้ค่าขายสิ่งของ', cost: 0.00, depth: 2},
    {item: '9. รายได้ค่าธรรมเนียมสาธารณูปโภค', cost: 0.00, depth: 2},
    {item: '10. รายได้จากการรับโอน', cost: 0.00, depth: 2},
    {item: '10.1 รับโอนจากทุนสำรองสะสม', cost: 0.00, depth: 3},
    {item: '10.2 รับโอนจากเงินสำรองกันเบิกเหลื่อมปี', cost: 0.00, depth: 3},
    {item: '11. รายได้ระหว่างหน่วยงาน', cost: 0.00, depth: 2},
    {item: '12. รายได้อื่น ๆ', cost: 0.00, depth: 2},
  ];

  getTotalCost() {
    return this.dataSource.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

}
