import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-kkufmis',
  templateUrl: './kkufmis.component.html',
  styleUrls: ['./kkufmis.component.scss']
})
export class KkufmisComponent implements OnInit {

  firstFormModel: number[] = [];

  firstFormArray: FormArray;

  displayedColumns = ['item', 'cost'];
  dataSource: any[];

  displayedColumnsSecond = ['item', 'cost'];
  dataSourceSecond: any[] = [
    { item: 'รายได้สูง(ต่ำ) กว่าค่าใช้จ่าย สุทธิ', cost: 0.00, depth: 1, noInput: true },
    { item: 'บวก ปรับปรุงจัดสรรงบประมาณรายจ่ายจากกองทุนรวม', cost: 0.00, depth: 2 },
    { item: 'เงินคงเหลือ', cost: 0.00, depth: 1, noInput: true },
    { item: 'บวก ค่าเสื่อมราคาสินทรัพย์ถาวร', cost: 0.00, depth: 2 },
    { item: 'เงินคงเหลือ', cost: 0.00, depth: 1, noInput: true },
    { item: 'หัก ซื้อสินทรัพย์ถาวร (ค่าครุภัณฑ์ ที่ดินและสิ่งก่อสร้าง)', cost: 0.00, depth: 2 },
    { item: 'เงินคงเหลือ ก่อนหักทุนสำรอง 5%', cost: 0.00, depth: 1, noInput: true },
    { item: 'หัก เงินโอนเข้าทุนสำรอง 5%', cost: 0.00, depth: 2 },
    { item: 'เงินคงเหลือ หลังหักทุนสำรอง 5%', cost: 0.00, depth: 1, noInput: true },
    { item: 'หัก เงินโอนเข้ากองทุนอื่นๆ', cost: 0.00, depth: 2 },
    { item: 'เงินเหลือจ่ายโอนเข้าทุนสำรองสะสม', cost: 0.00, depth: 1, noInput: true },
    { item: 'เงินคงเหลือก่อนหักทุนสำรอง 5% ยกยอดมาจากปี 2556', cost: 0.00, depth: 1 },
    { item: 'หัก ทุนสำรองสะสมโอนเข้าเป็นรายได้', cost: 0.00, depth: 2 },
    { item: 'เงินคงเหลือ', cost: 0.00, depth: 1, noInput: true },
    { item: 'บวก  ทุนสำรองสะสม ยอดยกมาจากปี 2555', cost: 0.00, depth: 2 },
    { item: 'ทุนสำรองสะสมยอดยกไป', cost: 0.00, depth: 1, noInput: true },

  ];

  constructor(
  ) { }

  ngOnInit() {
    this.dataSource = [
      { item: 'รายได้', depth: 0, noInput: true },
      { item: 'รายได้จากเงินงบประมาณ', depth: 1, noInput: true },
      { item: 'รายได้ที่เกิดจากการดำเนินงาน', depth: 1, noInput: true },
      { item: '1. รายได้จากการจัดการศึกษา', cost: 0.00, depth: 2, noInput: true },
      { item: '1.1 ค่าธรรมเนียมการศึกษาและค่าหน่วยกิต', cost: 0.00, depth: 3 },
      { item: '1.2 ค่าธรรมเนียมการศึกษาอื่น ๆ', cost: 0.00, depth: 3 },
      { item: '2. รายได้จากการให้บริการวิชาการ', cost: 0.00, depth: 2 },
      { item: '3. รายได้จากการบริหารสินทรัพย์', cost: 0.00, depth: 2 },
      { item: '4. รายได้ดอกเบี้ยรับและจากการลงทุน', cost: 0.00, depth: 2 },
      { item: '5. รายได้จากการรับบริจาค', cost: 0.00, depth: 2 },
      { item: '6. รายได้จากการจำหน่ายผลิตผลการเรียนการสอน', cost: 0.00, depth: 2 },
      { item: '7. รายได้จากการวิจัย', cost: 0.00, depth: 2 },
      { item: '8. รายได้ค่าขายสิ่งของ', cost: 0.00, depth: 2 },
      { item: '9. รายได้ค่าธรรมเนียมสาธารณูปโภค', cost: 0.00, depth: 2 },
      { item: '10. รายได้จากการรับโอน', cost: 0.00, depth: 2, noInput: true },
      { item: '10.1 รับโอนจากทุนสำรองสะสม', cost: 0.00, depth: 3 },
      { item: '10.2 รับโอนจากเงินสำรองกันเบิกเหลื่อมปี', cost: 0.00, depth: 3 },
      { item: '11. รายได้ระหว่างหน่วยงาน', cost: 0.00, depth: 2 },
      { item: '12. รายได้อื่น ๆ', cost: 0.00, depth: 2 },
      { item: 'รวมรายได้ที่เกิดจากการดำเนินงาน', cost: 0.00, depth: 4, noInput: true, isTotal: true, isBorder: true },

      { item: 'ค่าใช้จ่าย', depth: 0, noInput: true },
      { item: 'ค่าใช้จ่ายในการดำเนินงาน', depth: 1, noInput: true },
      { item: '1. ค่าใช้จ่ายบุคลากร', depth: 2 },
      { item: '2. ค่าใช้จ่ายด้านการฝึกอบรม', cost: 0.00, depth: 2 },
      { item: '3. ค่าใช้จ่ายในการเดินทาง', cost: 0.00, depth: 2 },
      { item: '4. ค่าตอบแทน ใช้สอย และวัสดุ ', cost: 0.00, depth: 2 },
      { item: '5. ค่าสาธารณูปโภค', cost: 0.00, depth: 2 },
      { item: '6. ค่าเสื่อมราคา และค่าตัดจำหน่าย', cost: 0.00, depth: 2 },
      { item: '7. ค่าใช้จ่ายเงินอุดหนุน', cost: 0.00, depth: 2 },
      { item: '8. ค่าใช้จ่ายโอนเข้ากองทุน', cost: 0.00, depth: 2 },
      { item: '9. ค่าใช้จ่ายระหว่างหน่วยงาน', cost: 0.00, depth: 2 },
      { item: '10. ค่าใช้จ่ายโอนรายรับจริง 5 % เข้าทุนสำรองสะสม', cost: 0.00, depth: 2 },
      { item: 'รวมรายได้ที่เกิดจากการดำเนินงาน', cost: 0.00, depth: 4, noInput: true, isTotal: true },
      { item: 'รายได้สูง(ต่ำ) กว่าค่าใช้จ่ายในการดำเนินงาน', cost: 0.00, depth: 4, noInput: true, isBorder: true },

      { item: 'รายได้ที่ไม่เกิดจากการดำเนินงาน', depth: 1, noInput: true },
      { item: '1. รายได้ค่าปรับและเงินชดใช้ค่าเสียหาย', depth: 2 },
      { item: '2. เงินเหลือจ่าย', cost: 0.00, depth: 2 },
      { item: 'รวมรายได้ที่ไม่เกิดจากการดำเนินงาน', cost: 0.00, depth: 4, noInput: true, isTotal: true, isBorder: true },

      { item: 'ค่าใช้จ่ายที่ไม่เกิดจากการดำเนินงาน', depth: 1, noInput: true },
      { item: '1. ค่าใช้จ่ายที่ไม่เกิดจากการดำเนินงาน', depth: 2 },
      { item: '2. เงินเหลือจ่าย', cost: 0.00, depth: 2 },
      { item: 'รวมค่าใช้จ่ายที่ไม่เกิดจากการดำเนินงาน', cost: 0.00, depth: 4, noInput: true, isTotal: true },
      { item: 'รายได้สูง(ต่ำ) กว่าค่าใช้จ่ายที่ไม่เกิดจากการดำเนินงาน', cost: 0.00, depth: 4, noInput: true, isBorder: true },

      { item: 'รายการโอน', depth: 1, noInput: true },
      { item: '1. โอนไปเงินสำรองกันเบิกเหลื่อมปี', depth: 2 },
      { item: '2. โอนไปกองทุน', cost: 0.00, depth: 2 },
      { item: 'รวมรายการโอน', cost: 0.00, depth: 4, noInput: true, isTotal: true },
      { item: 'รายได้สูง(ต่ำ) กว่าค่าใช้จ่าย สุทธิ', cost: 0.00, depth: 4, noInput: true, isBorder: true },
    ];
    this.firstFormArray = new FormArray([]);
    for (let i = 0; i < 48; i++) {
      this.firstFormModel.push(0);
      this.firstFormArray.push(new FormControl(0));
    }
    this.setFormControlListener();
    setInterval(() => {
      console.log(this.firstFormModel);
    }, 3000);
  }

  setFormControlListener() {
    for (const i of this.firstFormArray.controls) {
      i.valueChanges.subscribe(() => {
        this.calculate();
      });
    }
  }

  calculate() {
    this.firstFormModel[3] = (this.firstFormModel[4] + this.firstFormModel[5]);
    this.firstFormModel[14] = (this.firstFormModel[15] + this.firstFormModel[16]);
    this.firstFormModel[19] = (this.firstFormModel[3] + this.firstFormModel[6] + this.firstFormModel[7] + this.firstFormModel[8] + this.firstFormModel[9] + this.firstFormModel[10] + this.firstFormModel[11] + this.firstFormModel[12] + this.firstFormModel[13] + this.firstFormModel[14] + this.firstFormModel[17] + this.firstFormModel[18]);
    this.firstFormModel[32] = (this.firstFormModel[21] + this.firstFormModel[22] + this.firstFormModel[23] + this.firstFormModel[24] + this.firstFormModel[25] + this.firstFormModel[26] + this.firstFormModel[27] + this.firstFormModel[28] + this.firstFormModel[29] + this.firstFormModel[30] + this.firstFormModel[31]);
    this.firstFormModel[33] = (this.firstFormModel[19] - this.firstFormModel[32])
    this.firstFormModel[37] = (this.firstFormModel[35] + this.firstFormModel[36])
    this.firstFormModel[41] = (this.firstFormModel[40] + this.firstFormModel[39])
    this.firstFormModel[42] = (this.firstFormModel[33] + this.firstFormModel[37]) - this.firstFormModel[41]
    this.firstFormModel[46] = (this.firstFormModel[44] + this.firstFormModel[45])
    this.firstFormModel[47] = (this.firstFormModel[42] + this.firstFormModel[46])
  }

  getFirstFormControl(index: number) {
    return this.firstFormArray.at(index) as FormControl;
  }

  getTotalCost() {
    return this.dataSource.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

}

// 22-31
