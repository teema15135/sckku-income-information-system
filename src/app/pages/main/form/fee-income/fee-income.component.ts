import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { range } from 'rxjs';

@Component({
  selector: 'app-fee-income',
  templateUrl: './fee-income.component.html',
  styleUrls: ['./fee-income.component.scss']
})
export class FeeIncomeComponent implements OnInit {

  formModel: any[];

  formArray: FormArray[];

  constructor() { }

  ngOnInit() {
    this.initialFormModelValue();
    this.formArray = [];
    for (let i = 0; i < 36; i++) {
      const controls = new FormArray([]);
      for (let j = 0; j < 12; j++) {
        controls.push(new FormControl(this.formModel[i].values[j]));
      }
      this.formArray.push(controls);
    }
    console.log(this.formArray);
    this.setFormChangeListener();
    // setInterval(() => {
    //   console.log(this.formModel[0].values);
    // }, 1000);
  }

  initialFormModelValue(): void {
    this.formModel = [
      {
        id: '010',
        name: '1. สาขาวิชาคณิตศาสตร์',
        depth: 0,
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '011',
        name: '- คณิตศาสตร์',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '012',
        name: '- คณิตศาสตร์ประยุกต์',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '020',
        name: '2. สาขาวิชาเคมี',
        depth: 0,
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '021',
        name: '- เคมี',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '022',
        name: '- เคมีอินทรีย์',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '023',
        name: '- วิทยาศาสตร์โพลิเมอร์',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '024',
        name: '- เคมีสำหรับครู',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '030',
        name: '3. สาขาวิชาจุลชีววิทยา',
        depth: 0,
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '031',
        name: '- จุลชีววิทยา',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '040',
        name: '4. สาขาวิชาชีวเคมี',
        depth: 0,
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '041',
        name: '- ชีวะเคมี',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '050',
        name: '5. สาขาวิชาชีววิทยา',
        depth: 0,
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '051',
        name: '- ชีวะวิทยา',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '052',
        name: '- ชีวะวิทยาสำหรับครู',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '060',
        name: '6. สาขาวิชาฟิสิกส์',
        depth: 0,
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '061',
        name: '- ฟิสิกส์',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '062',
        name: '- วัสดุศาสตร์และนาโนเทคโนโลยี',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '070',
        name: '7. สาขาวิทยาการคอมพิวเตอร์',
        depth: 0,
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '071',
        name: '- วิทยาการคอมพิวเตอร์',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '072',
        name: '- วิทยาการคอมพิวเตอร์ (ภาษาอังกฤษ)',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '073',
        name: '- เทคโนโลยีสารสนเทศและการสื่อสาร',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '074',
        name: '- เทคโนโลยีสารสนเทศ',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '075',
        name: '- ภูมิสารสนเทศศาสตร์',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '076',
        name: '- การรับรู้จากระยะไกล​ ฯ',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '080',
        name: '8. สาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม',
        depth: 0,
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '081',
        name: '- วิทยาศาสตร์สิ่งแวดล้อม',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '090',
        name: '9. สาขาวิชาสถิติ',
        depth: 0,
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '091',
        name: '- สถิติ',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '092',
        name: '- สารสนเทศสถิติ',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '093',
        name: '- สถิติประยุกต์',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '100',
        name: '10. หลักสูตรนิติวิทยาศาสตร์',
        depth: 0,
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '101',
        name: '- นิติวิทยาศาสตร์',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '110',
        name: '11. หลักสูตรวิทยาศาสตร์ชีวภาพ',
        depth: 0,
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '111',
        name: '- วิทยาศาสตร์ชีวภาพ (นานาชาติ)',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
      }, {
        id: '120',
        name: '12. สำนักงานคณบดี',
        depth: 0,
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null]
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
        }
      }
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

}
