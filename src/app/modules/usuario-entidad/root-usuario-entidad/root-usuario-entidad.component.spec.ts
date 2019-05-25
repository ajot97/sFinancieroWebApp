import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootUsuarioEntidadComponent } from './root-usuario-entidad.component';

describe('RootUsuarioEntidadComponent', () => {
  let component: RootUsuarioEntidadComponent;
  let fixture: ComponentFixture<RootUsuarioEntidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootUsuarioEntidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootUsuarioEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
