import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeClientesComponent } from './tipo-de-clientes.component';

describe('TipoDeClientesComponent', () => {
  let component: TipoDeClientesComponent;
  let fixture: ComponentFixture<TipoDeClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDeClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
