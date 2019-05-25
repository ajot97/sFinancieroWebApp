import { Component, OnInit } from '@angular/core';
import { Movimiento } from 'src/app/Models/movimiento';
import { MovimientoDeCuentaService } from '../../movimiento-de-cuenta.service';
//import { MovimientosService } from '../movimientos.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {


  movimientos: Movimiento[];
  constructor(private movimientoService: MovimientoDeCuentaService) { }

  ngOnInit() {
    this.movimientoService.getMovimientos().subscribe(values => {
      this.movimientos=values;
    })
  }

}
