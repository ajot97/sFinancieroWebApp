import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../gestionarCliente/cliente.service';
import { Cliente } from 'src/app/Models/cliente';
import {MatTableDataSource, MatSnackBar, MatSnackBarVerticalPosition} from '@angular/material';
import { Observable, forkJoin } from 'rxjs';
import { Persona } from 'src/app/Models/persona';
import { map } from 'rxjs/internal/operators/map';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

 // clientes:string[]=["cliente 1","cliente 2","cliente 3"];
  constructor(private clienteService: ClienteService, private snackBar: MatSnackBar) {
    this.persona = new Persona();
  }


clientes: Cliente[];
persona: Persona;
personas: Persona[];
ngOnInit() {
  this.fetchData();

}

  eliminarCliente(idCliente: number) {

      this.clienteService.deleteCliente(idCliente).subscribe(val => {
        this.fetchData();
        this.snackBar.open('se elimino al cliente', 'Correctamente', {duration: 3000});

      });

  }

  fetchData() {
    this.clienteService.getClientes().subscribe(data => {
        this.clientes = data;
    });
  }


}



