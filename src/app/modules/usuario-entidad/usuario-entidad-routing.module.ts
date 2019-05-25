import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootUsuarioEntidadComponent } from './root-usuario-entidad/root-usuario-entidad.component';
import { ClientesComponent } from './gestionarCliente/clientes/clientes.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddClienteComponent } from './gestionarCliente/add-cliente/add-cliente.component';
import { ClienteDetalleComponent } from './gestionarCliente/cliente-detalle/cliente-detalle.component';
import { TipoDeClientesComponent } from './gestionarTipoDeClientes/tipo-de-clientes/tipo-de-clientes.component';
import { AddTipoClienteComponent } from './gestionarTipoDeClientes/add-tipo-cliente/add-tipo-cliente.component';

const routes: Routes = [
  {path: ``, component: ClientesComponent},
  {path: `addCliente`, component: AddClienteComponent},
  {path: `addTipoCliente`, component: AddTipoClienteComponent},
  {path: `TipoClientes`, component: TipoDeClientesComponent},
  {path: `editarCliente/:id`, component: AddClienteComponent},
  {path: `detalleCliente/:id`, component: ClienteDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsuarioEntidadRoutingModule { }
