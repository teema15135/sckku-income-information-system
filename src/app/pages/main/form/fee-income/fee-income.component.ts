import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { RecordService } from 'src/app/services/record.service';
import { Fee, Item } from 'src/app/models/fee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fee-income',
  templateUrl: './fee-income.component.html',
  styleUrls: ['./fee-income.component.scss']
})
export class FeeIncomeComponent implements OnInit {

  formModel: Item[];

  formArray: FormArray[];

  saving = false;

  constructor(
    private recordService: RecordService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.initialFormModelValue();
    this.initialFormArray();
    this.setFormChangeListener();
    this.recordService.getFeeIncome().subscribe(
      (res: Fee) => {
        for (let i = 0; i < 36; i++) {
          for (let j = 0; j < 12; j++) {
            this.formArray[i].at(j).setValue(res.fees[i].values[j]);
          }
        }
      }, err => console.error(err)
    );
    // setInterval(() => {
    //   console.log(this.formModel[0].values);
    // }, 1000);
  }

  initialFormArray(): void {
    this.formArray = [];
    for (let i = 0; i < 36; i++) {
      const controls = new FormArray([]);
      for (let j = 0; j < 12; j++) {
        controls.push(new FormControl(this.formModel[i].values[j]));
      }
      this.formArray.push(controls);
    }
  }

  initialFormModelValue(): void {
    this.formModel = [
      {
        id: '010',
        name: '1. สาขาวิชาคณิตศาสตร์',
        depth: 0,
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '011',
        name: 'คณิตศาสตร์',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '012',
        name: 'คณิตศาสตร์ประยุกต์',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '020',
        name: '2. สาขาวิชาเคมี',
        depth: 0,
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '021',
        name: 'เคมี',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '022',
        name: 'เคมีอินทรีย์',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '023',
        name: 'วิทยาศาสตร์โพลิเมอร์',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '024',
        name: 'เคมีสำหรับครู',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '030',
        name: '3. สาขาวิชาจุลชีววิทยา',
        depth: 0,
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '031',
        name: 'จุลชีววิทยา',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '040',
        name: '4. สาขาวิชาชีวเคมี',
        depth: 0,
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '041',
        name: 'ชีวะเคมี',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '050',
        name: '5. สาขาวิชาชีววิทยา',
        depth: 0,
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '051',
        name: 'ชีวะวิทยา',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '052',
        name: 'ชีวะวิทยาสำหรับครู',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '060',
        name: '6. สาขาวิชาฟิสิกส์',
        depth: 0,
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '061',
        name: 'ฟิสิกส์',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '062',
        name: 'วัสดุศาสตร์และนาโนเทคโนโลยี',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '070',
        name: '7. สาขาวิทยาการคอมพิวเตอร์',
        depth: 0,
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '071',
        name: 'วิทยาการคอมพิวเตอร์',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '072',
        name: 'วิทยาการคอมพิวเตอร์ (ภาษาอังกฤษ)',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '073',
        name: 'เทคโนโลยีสารสนเทศและการสื่อสาร',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '074',
        name: 'เทคโนโลยีสารสนเทศ',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '075',
        name: 'ภูมิสารสนเทศศาสตร์',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '076',
        name: 'การรับรู้จากระยะไกล​ ฯ',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '080',
        name: '8. สาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม',
        depth: 0,
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '081',
        name: 'วิทยาศาสตร์สิ่งแวดล้อม',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '090',
        name: '9. สาขาวิชาสถิติ',
        depth: 0,
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '091',
        name: 'สถิติ',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '092',
        name: 'สารสนเทศสถิติ',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '093',
        name: 'สถิติประยุกต์',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '100',
        name: '10. หลักสูตรนิติวิทยาศาสตร์',
        depth: 0,
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '101',
        name: 'นิติวิทยาศาสตร์',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '110',
        name: '11. หลักสูตรวิทยาศาสตร์ชีวภาพ',
        depth: 0,
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '111',
        name: 'วิทยาศาสตร์ชีวภาพ (นานาชาติ)',
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: '120',
        name: '12. กองบริหารงานคณะ',
        depth: 0,
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ];
  }

  async setFormChangeListener() {
    for (let i = 0; i < 36; i++) {
      for (let j = 0; j < 12; j++) {
        if (!this.isTitle(this.formModel[i].id)) {
          this.getFormControl(i, j).valueChanges.subscribe(() => {
            const r = i;
            const c = j;
            this.calculateTitle(r, c);
          });
        } else {
          this.getFormControl(i, j).valueChanges.subscribe(() => {
            this.calculateRightTotal(i, j);
          });
        }
      }
    }
  }

  calculateRightTotal(row: number, col: number) {
    this.formModel[row].values[12] = 0;
    for (let j = 0; j < 12; j++) {
      this.formModel[row].values[12] += this.formModel[row].values[j];
    }
  }

  calculateTitle(row: number, col: number) {
    let titleRow = row;
    while (true) {
      titleRow--;
      if (this.isTitle(this.formModel[titleRow].id)) {
        break;
      }
    }
    let i = titleRow;
    this.formModel[titleRow].values[col] = 0;
    while (true) {
      i++;
      if (this.isTitle(this.formModel[i].id)) {
        break;
      }
      this.formModel[titleRow].values[col] += this.formModel[i].values[col];
    }
  }

  isTitle = (id: string): boolean => id.charAt(2) === '0';

  getFormControl(row: number, col: number): FormControl {
    return this.formArray[row].at(col) as FormControl;
  }

  save() {
    if (this.saving) {
      this.toastr.info('กำลังบันทึก กรุณารอสักครู่');
      return;
    }
    this.saving = true;
    this.recordService.updateFeeIncome({ fees: this.formModel }).subscribe(
      res => {
        this.toastr.success('บันทึกสำเร็จ');
      }, err => {
        console.error(err);
      }, () => {
        this.saving = false;
      }
    );
  }

}
