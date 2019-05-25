import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Persona } from 'src/app/Models/persona';
import { Cliente } from 'src/app/Models/cliente';
import { TipoCliente } from 'src/app/Models/tipo-cliente';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {
  tipoClientesControl = new FormControl('', [Validators.required]);
persona:Persona;
tipoClientes:TipoCliente[]=new Array<TipoCliente>();
id:string;
tipoClienteSeleccionado:string;
  constructor(private router: Router,private clienteService:ClienteService,private activateRouter:ActivatedRoute) { }

  ngOnInit() {

    this.persona=new Persona();
   this.id= this.activateRouter.snapshot.paramMap.get("id");
    if(this.id!=""){
      this.clienteService.getPersona(Number(this.id)).subscribe(val=>this.persona=val);
    }

    this.clienteService.getTipoCliente().subscribe(tipoClientes=>{console.log(tipoClientes);this.tipoClientes=tipoClientes})
  }

  addCliente(){

    let cliente :Cliente= new Cliente();
    
     this.clienteService.addPersona(this.persona).then(persona =>{
       console.log("se añadio correctamente a la persona");
       console.log(persona);
       cliente.idPersona=persona.id;
       cliente.estado="Habilitado";
       cliente.idTipoC= +this.tipoClienteSeleccionado;
       cliente.fechaReg=new Date(Date.now.toString());
      this.clienteService.addCliente(cliente).then(value=>{console.log("se añadio al cliente exitosamente");
    this.router.navigateByUrl('/MovimientoCuenta/AperturaDeCuenta/' + cliente.id);
    });

      })

   }
   actualizarCliente(){
     console.log(this.persona)
     this.clienteService.actualizarCliente(this.persona).subscribe(val=>
      
      console.log("actualizacion exitosa")
      )
   }
}
