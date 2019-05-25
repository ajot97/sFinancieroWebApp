import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoCuenta } from 'src/app/Models/tipo-cuenta';
import { Cuenta } from 'src/app/Models/cuenta';
import { Moneda } from 'src/app/Models/moneda';
import { environment } from 'src/environments/environment';
import { Movimiento } from 'src/app/Models/movimiento';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class MovimientoDeCuentaService {
  readonly apiUrl = environment.WebApiUrl;
  constructor(private http: HttpClient) { }



  getTipoDeCuenta() {
    return this.http.get<TipoCuenta>(this.apiUrl + '/api/tipoCuentas');
  }
  getCuentas() {
    return this.http.get<Cuenta[]>(this.apiUrl + '/api/Cuentas');
  }

  getMovimientos(): Observable<Movimiento[]> {
    return this.http.get<Movimiento[]>(this.apiUrl + '/api/Movimientos');
  }

  

Depositar() {
    // return this.http.post<>();

  }
 
Transferir(nroCuenta1, nroCuenta2, monto, descripcion, oficina, ubicacion) {
 return this.http.post(this.apiUrl + '/api/RealizarTransferencia',
  { nroCuenta1,
    nroCuenta2,
    monto,
    descripcion,
    oficina,
    ubicacion
  }).toPromise();
}




}
