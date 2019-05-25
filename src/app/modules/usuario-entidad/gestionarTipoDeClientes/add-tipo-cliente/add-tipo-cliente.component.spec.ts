import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoClienteComponent } from './add-tipo-cliente.component';

describe('AddTipoClienteComponent', () => {
  let component: AddTipoClienteComponent;
  let fixture: ComponentFixture<AddTipoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTipoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
