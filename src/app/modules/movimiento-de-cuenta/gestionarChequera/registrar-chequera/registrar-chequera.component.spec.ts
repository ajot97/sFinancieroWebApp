import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarChequeraComponent } from './registrar-chequera.component';

describe('RegistrarChequeraComponent', () => {
  let component: RegistrarChequeraComponent;
  let fixture: ComponentFixture<RegistrarChequeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarChequeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarChequeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
