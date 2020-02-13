import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordIncomeComponent } from './record-income.component';

describe('RecordIncomeComponent', () => {
  let component: RecordIncomeComponent;
  let fixture: ComponentFixture<RecordIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
