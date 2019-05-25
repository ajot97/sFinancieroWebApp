import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonedaComponent } from './add-moneda.component';

describe('AddMonedaComponent', () => {
  let component: AddMonedaComponent;
  let fixture: ComponentFixture<AddMonedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMonedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
