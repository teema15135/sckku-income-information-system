import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkufmisComponent } from './kkufmis.component';

describe('KkufmisComponent', () => {
  let component: KkufmisComponent;
  let fixture: ComponentFixture<KkufmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkufmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkufmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
