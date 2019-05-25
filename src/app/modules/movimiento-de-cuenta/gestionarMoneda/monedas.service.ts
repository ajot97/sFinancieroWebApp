import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Moneda } from 'src/app/Models/moneda';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MonedasService {
  readonly apiUrl = environment.WebApiUrl;
  constructor(private http: HttpClient) { }


  getMonedas() {
    return this.http.get<Moneda[]>(this.apiUrl + '/api/Monedas');
  }
}
