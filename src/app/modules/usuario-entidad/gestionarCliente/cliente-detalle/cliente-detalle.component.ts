import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from 'src/app/Models/cliente';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styleUrls: ['./cliente-detalle.component.css']
})
export class ClienteDetalleComponent implements OnInit {

   id:string;
  cliente:Cliente;
  constructor(private clienteService:ClienteService,private route:ActivatedRoute) { }
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  this.fetchData();
console.log(this.cliente)
  }
  fetchData(){
    this.clienteService.getCliente(+this.id).subscribe(value=>{
    this.cliente=value;
      console.log(value);
    })
  }
}
