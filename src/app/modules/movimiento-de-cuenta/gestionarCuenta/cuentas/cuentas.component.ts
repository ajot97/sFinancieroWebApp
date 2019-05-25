import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../cuentas.service';
import { Cuenta } from 'src/app/Models/cuenta';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  cuentas:Cuenta[];
  constructor(private cuentasService:CuentasService) {
    this.cuentasService.getCuentas().subscribe(values=>{
      this.cuentas=values;
    })
   }
  ngOnInit() {
  }

}
