import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/Models/moneda';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-moneda',
  templateUrl: './add-moneda.component.html',
  styleUrls: ['./add-moneda.component.css']
})
export class AddMonedaComponent implements OnInit {

  constructor(private activateRouter:ActivatedRoute) { }
moneda:Moneda=new Moneda();
id:string;
  ngOnInit() {
    this.id=this.activateRouter.snapshot.paramMap.get("id");
  }

}
