import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoConsultorioComponent } from './tipo-consultorio.component';

describe('TipoConsultorioComponent', () => {
  let component: TipoConsultorioComponent;
  let fixture: ComponentFixture<TipoConsultorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoConsultorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
