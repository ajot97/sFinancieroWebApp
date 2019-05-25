import { Component, OnInit } from '@angular/core';
import { TipoDeClientesService } from '../tipo-de-clientes.service';
import { TipoCliente } from 'src/app/Models/tipo-cliente';

@Component({
  selector: 'app-tipo-de-clientes',
  templateUrl: './tipo-de-clientes.component.html',
  styleUrls: ['./tipo-de-clientes.component.css']
})
export class TipoDeClientesComponent implements OnInit {

  constructor(private tipoClienteService:TipoDeClientesService) { }

  tiposDeClientes:TipoCliente[];
  ngOnInit() {
this.fetch();
  }
fetch(){
  this.tipoClienteService.getTipoDeClientes().subscribe(data=>{
    this.tiposDeClientes=data;
  })
}

eliminarTipoCliente(id:number){
  
}
}
