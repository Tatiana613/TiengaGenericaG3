import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  apiURL:string = "http://localhost:8080/api/clientes";

  constructor(private httpobject:HttpClient) { }

  resultados=Array();

  upload(file:any):Promise<any[]>{
    return new Promise<any[]>(
      (resolve,reject)=>{
        var lector = new FileReader();
        lector.onloadend=(e)=>{
          let contenido :string = lector.result as string;
          let lineas_separadas=contenido.split("\n");

          for (let linea_actual of lineas_separadas){
            linea_actual.replace(";",",");
            let columnas = linea_actual.split(",");

            this.httpobject.post(this.apiURL,{
              "codigoProducto":columnas[0],
              "nombreProducto":columnas[1],
              "nitProveedor":columnas[2],
              "precioCompra":columnas[3],
              "ivaCompra":columnas[4],
              "precioVenta":columnas[5]
            },{
              observe:'response'
            }).subscribe(
              (response:any)=>{
                this.resultados.push(response.status);
              }
            );
          }
          resolve(this.resultados);
        }
        lector.readAsText(file);
      }
    );
  }
}

