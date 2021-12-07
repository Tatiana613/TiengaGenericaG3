import { Component, OnInit } from '@angular/core';
import { VentasService } from './ventas.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ClienteModel } from "src/app/models/cliente.dto";

import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  listaClientes: ClienteModel[] = [];
  cedulaCliente:string;
  contenido:any;
  contenidoP:any;
  contenidoP2:any;
  nombreCliente:string;
  codigoProducto:string;
  nombreProducto:string;
  codigoProducto2:string;
  nombreProducto2:string;

  constructor(private httpService: HttpService) { }

  ngOnInit():void{   
      
  }


  consultaCliente(cedCliente: string){    
    console.log(cedCliente);
    this.httpService.peticionGetC("clientes/cedula/", this.cedulaCliente).subscribe((respuesta: any[]) => {
      this.contenido = respuesta;
      console.log(this.contenido)
      this.nombreCliente = this.contenido.nombreCompleto;     
    });
  }

  consultaProducto(codProducto: string){    
    console.log(codProducto);
    this.httpService.peticionGetC("productos?codigoProducto=", this.codigoProducto).subscribe((respuesta: any[]) => {
      this.contenidoP = respuesta;
      console.log(this.contenidoP)
      this.nombreProducto = this.contenidoP[0].nombreProducto;     
    });
  }

  consultaProducto2(codProducto2: string){
      
    console.log(codProducto2);
    this.httpService.peticionGetC("productos?codigoProducto=", this.codigoProducto2).subscribe((respuesta: any[]) => {
      this.contenidoP = respuesta;
      console.log(this.contenidoP)
      this.nombreProducto2 = this.contenidoP[0].nombreProducto;     
    });
  }

  

    
    
}
