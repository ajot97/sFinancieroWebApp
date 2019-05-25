import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cliente } from 'src/app/Models/cliente';
import { Persona } from 'src/app/Models/persona';
import { TipoCliente } from 'src/app/Models/tipo-cliente';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly httpOptions = {
    headers: new HttpHeaders({
      accept : 'application/json',
      'content-type': 'application/json',
      Authorization : 'Bearer ' + sessionStorage.getItem('accessToken')
    })
  };
  readonly apiUrl = environment.WebApiUrl;
clientesList: Cliente[];
  constructor(private http: HttpClient) {
    this.getClientesHabiles().subscribe(clientes => this.clientesList = clientes);
   }





// api/cliente
getClientesHabiles(): Observable<Cliente[]> {
  return this.http.get<Cliente[]>(this.apiUrl + '/api/clientesHabiles', this.httpOptions);

}
getClientes(): Observable<Cliente[]> {
  return this.http.get<Cliente[]>(this.apiUrl + '/api/clientes' , this.httpOptions);

}
getPersonas(): Observable<Persona[]> {
  return this.http.get<Persona[]>(this.apiUrl + '/api/personas/').pipe(map(
    (data: Persona[]) => data as Persona[]
  ));
}
getPersona(id: number): Observable<Persona> {
  return this.http.get<Persona>(this.apiUrl + '/api/personas/' + id).pipe(map(
    (data: Persona) => data as Persona
  ));
}

getCliente(id: number) {
  return this.http.get<Cliente>(this.apiUrl + '/api/clientes/' + id.toString());
}
getTipoCliente() {
  return this.http.get<TipoCliente[]>(this.apiUrl + '/api/tipoClientes').pipe(map(
    (data: TipoCliente[]) => data as TipoCliente[]
  ));
}


deletePersona(id: number) {
 // this.clientesList.find(s=>s.id==id)
 return this.http.delete(this.apiUrl + '/api/clientes/' + id, this.httpOptions).toPromise().then(
   () => {
     this.clientesList = this.clientesList.filter(cliente => cliente.id !== id);
   });
}


deleteCliente(id: number) {

  return this.http.delete(this.apiUrl + '/api/clientes/' + id, this.httpOptions);
}
addPersona(persona: Persona): Promise<any> {
  return this.getPersonas().pipe(map(() => {
   // persona.id=data[data.length-1].id+1;
  return  this.http.post(this.apiUrl + '/api/personas', JSON.parse(JSON.stringify(persona))).toPromise();
     })).toPromise();
  }



addCliente(cliente: Cliente) {
  return this.getClientes().pipe(map(() => {
   // console.log(data);
 //   cliente.id=data[data.length-1].id+1;
   // console.log(cliente);
  return  this.http.post(this.apiUrl + '/api/clientes', JSON.parse(JSON.stringify(cliente))).toPromise();
    })).toPromise();
  }
actualizarCliente(persona: Persona) {
return this.http.put<Persona>(this.apiUrl + '/api/personas/' + persona.id, persona);
}







}
