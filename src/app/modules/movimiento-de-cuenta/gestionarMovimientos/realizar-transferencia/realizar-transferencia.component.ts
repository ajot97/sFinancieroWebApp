import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/Models/moneda';
import { CuentasService } from '../../gestionarCuenta/cuentas.service';
import { MovimientoDeCuentaService } from '../../movimiento-de-cuenta.service';

@Component({
  selector: 'app-realizar-transferencia',
  templateUrl: './realizar-transferencia.component.html',
  styleUrls: ['./realizar-transferencia.component.css']
})
export class RealizarTransferenciaComponent implements OnInit {
  nroCuenta1: number;
  nroCuenta2: number;
  monto: number;
  monedas: Array<Moneda>;
 monedaSeleccionada: number;
 descripcion: string;
 ubicacion: string;
 oficina: string;
  constructor(private cuentasService: CuentasService, private movimientosService: MovimientoDeCuentaService) { }

  ngOnInit() {
    this.cuentasService.getMonedas().subscribe(values => {
      this.monedas = values;
    });
  }
  Transferir() {
    this.movimientosService.Transferir(this.nroCuenta1, this.nroCuenta2, this.monto, this.descripcion, this.oficina, this.ubicacion).then(val => {
      console.log('transferencia con exito');
    }).catch(e => {
      console.log(e.error);
    });
}
}
