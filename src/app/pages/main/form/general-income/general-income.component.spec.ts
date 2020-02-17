import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralIncomeComponent } from './general-income.component';

describe('GeneralIncomeComponent', () => {
  let component: GeneralIncomeComponent;
  let fixture: ComponentFixture<GeneralIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
