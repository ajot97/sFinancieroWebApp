import { Component, OnInit } from '@angular/core';
import { MonedasService } from '../monedas.service';
import { Moneda } from 'src/app/Models/moneda';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent implements OnInit {
monedas:Moneda[];
  constructor(private monedasService:MonedasService) { }

  ngOnInit() {
  this.monedasService.getMonedas().subscribe(values=>this.monedas=values);
  }

}
