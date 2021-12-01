import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiurl: string = "http://localhost:8080/api/clientes";


constructor(private httpObject: HttpClient) { }
resultado= Array();

buscar(cedulasearch: string): Observable<any[]>{

  return this.httpObject.get<any[]>(
    this.apiurl + 'getcedulaclientes/' + cedulasearch
  );
}


actualizar(cedulacliente: string, cliente: any) {
  return this.httpObject.put(this.apiurl + '/' +cedulacliente,cliente);
}

eliminar(ceduladelete:string){
  return this.httpObject.delete(this.apiurl + '/' +ceduladelete);
}

}
