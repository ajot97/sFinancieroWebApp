import { Injectable } from '@angular/core';
import { TipoCliente } from 'src/app/Models/tipo-cliente';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoDeClientesService {
  readonly apiUrl = environment.WebApiUrl;

  constructor(private http: HttpClient) { }


  getTipoDeClientes() {
    return this.http.get<TipoCliente[]>(this.apiUrl + '/api/tipoClientes').pipe(map(
      (data: TipoCliente[]) =>  data as TipoCliente[]
    ));
  }
  addTipoDeCliente(tipoCliente: TipoCliente) {
return this.http.post(this.apiUrl + '/api/tipoClientes', tipoCliente);

  }
}
