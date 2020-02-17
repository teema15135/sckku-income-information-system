import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeIncomeComponent } from './fee-income.component';

describe('FeeIncomeComponent', () => {
  let component: FeeIncomeComponent;
  let fixture: ComponentFixture<FeeIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
