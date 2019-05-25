import { Component, OnInit } from '@angular/core';
import { TipoDeClientesService } from '../tipo-de-clientes.service';
import { TipoCliente } from 'src/app/Models/tipo-cliente';

@Component({
  selector: 'app-add-tipo-cliente',
  templateUrl: './add-tipo-cliente.component.html',
  styleUrls: ['./add-tipo-cliente.component.css']
})
export class AddTipoClienteComponent implements OnInit {

  constructor(private tipoClienteService:TipoDeClientesService) { }
tipoCliente:TipoCliente=new TipoCliente();
  ngOnInit() {
    
  }
addTipoCliente(){
  console.log(this.tipoCliente);
  this.tipoClienteService.addTipoDeCliente(this.tipoCliente).subscribe(val=>{
    console.log("el tipo de cliente se creo correctamente");
  })
}

}
