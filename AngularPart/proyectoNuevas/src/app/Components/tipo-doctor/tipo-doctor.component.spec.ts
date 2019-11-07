import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDoctorComponent } from './tipo-doctor.component';

describe('TipoDoctorComponent', () => {
  let component: TipoDoctorComponent;
  let fixture: ComponentFixture<TipoDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
