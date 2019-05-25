import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTipoDeTarjetaComponent } from './registrar-tipo-de-tarjeta.component';

describe('RegistrarTipoDeTarjetaComponent', () => {
  let component: RegistrarTipoDeTarjetaComponent;
  let fixture: ComponentFixture<RegistrarTipoDeTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarTipoDeTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTipoDeTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
