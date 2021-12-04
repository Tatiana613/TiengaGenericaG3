import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstantes } from '../constants/app.constantes';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private constantes: AppConstantes) {}

  peticionGet(endPoint: string){
    return this.http.get(this.constantes.URL_BASE + endPoint);
  }

  peticionPost(endPoint: string, params: object){
    return this.http.post(this.constantes.URL_BASE + endPoint, params, {observe: 'response'});
  }

  peticionDelete(endPoint: string, identificador:any ){
    return this.http.delete(this.constantes.URL_BASE + endPoint + "/" +identificador,  {observe: 'response'});
  }
  peticionPut(endPoint: string, identificador:any, params: object){
    return this.http.put(this.constantes.URL_BASE+ endPoint + "/" + identificador, params, {observe: 'response'});
  }

}
