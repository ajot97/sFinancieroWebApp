import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { UsuarioEntidadRoutingModule } from './usuario-entidad-routing.module';
import { RootUsuarioEntidadComponent } from './root-usuario-entidad/root-usuario-entidad.component';
import { ClientesComponent } from './gestionarCliente/clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';
import {SharedModule } from '../../shared/shared.module';

import { CommonModule } from '@angular/common';
import { AddClienteComponent } from './gestionarCliente/add-cliente/add-cliente.component';

import { ClienteDetalleComponent } from './gestionarCliente/cliente-detalle/cliente-detalle.component';
import { TipoDeClientesComponent } from '../usuario-entidad/gestionarTipoDeClientes/tipo-de-clientes/tipo-de-clientes.component';
import { AddTipoClienteComponent } from '../usuario-entidad/gestionarTipoDeClientes/add-tipo-cliente/add-tipo-cliente.component';

@NgModule({
// tslint:disable-next-line: max-line-length
  declarations: [RootUsuarioEntidadComponent, ClientesComponent, AddClienteComponent, ClienteDetalleComponent, TipoDeClientesComponent, AddTipoClienteComponent],
  imports: [
    SharedModule
   , CommonModule
    , UsuarioEntidadRoutingModule,
    FormsModule
  ],
  providers: [],
})
export class UsuarioEntidadModule { }
