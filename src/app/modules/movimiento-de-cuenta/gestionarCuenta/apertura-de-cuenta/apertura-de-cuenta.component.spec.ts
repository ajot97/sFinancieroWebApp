import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AperturaDeCuentaComponent } from './apertura-de-cuenta.component';

describe('AperturaDeCuentaComponent', () => {
  let component: AperturaDeCuentaComponent;
  let fixture: ComponentFixture<AperturaDeCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperturaDeCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AperturaDeCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
