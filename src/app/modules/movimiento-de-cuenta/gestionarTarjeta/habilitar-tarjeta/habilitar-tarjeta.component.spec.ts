import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitarTarjetaComponent } from './habilitar-tarjeta.component';

describe('HabilitarTarjetaComponent', () => {
  let component: HabilitarTarjetaComponent;
  let fixture: ComponentFixture<HabilitarTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilitarTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
