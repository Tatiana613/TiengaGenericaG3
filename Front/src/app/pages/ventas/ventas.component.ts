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

  cliente:any;
  producto1:any;
  producto2:any;
  producto3:any;

  nombreCliente:string;
  consecutivo !: any;
  ciudad: any;  

  codigoProducto1:string;
  nombreProducto:string;
  precioProducto1:any;
  cantProducto1:any;
  precioTotalProducto1:any;
  
  codigoProducto2:string;
  nombreProducto2:string;
  precioProducto2:any;
  cantProducto2:any;
  precioTotalProducto2:any;
  
  codigoProducto3:string;
  nombreProducto3:string;
  precioProducto3:any;
  cantProducto3:any;
  precioTotalProducto3:any;

  constructor(private httpService: HttpService) { }

  ngOnInit():void{   
      this.getConsecutivo();
  }

  getConsecutivo() {
    this.httpService.peticionGet("ventas/consecutivo").subscribe((data) => {
      this.consecutivo = data;
      this.consecutivo++;
      console.log(this.consecutivo);
    }
    )
  }


  consultaCliente(cedCliente: string){    
    console.log(cedCliente);
    this.httpService.peticionGetC("clientes/cedula/", this.cedulaCliente).subscribe((respuesta: any[]) => {
      this.cliente = respuesta;
      console.log(this.cliente)
      this.nombreCliente = this.cliente.nombreCompleto; 

    });
    return this.cedulaCliente;
  }

  consultaProducto(codProducto: string){    
    console.log(codProducto);
    this.httpService.peticionGetC("productos?codigoProducto=", this.codigoProducto1).subscribe((respuesta: any[]) => {
      this.producto1 = respuesta;
      console.log(this.producto1)
      this.nombreProducto = this.producto1[0].nombreProducto;           
    });
  }
  
  consultaProducto2(codProducto2: string){      
    console.log(codProducto2);
    this.httpService.peticionGetC("productos?codigoProducto=", this.codigoProducto2).subscribe((respuesta: any[]) => {
      this.producto2 = respuesta;
      console.log(this.producto2)
      this.nombreProducto2 = this.producto2[0].nombreProducto;     
           
    });
  }
  
  consultaProducto3(codProducto3: string){      
    console.log(codProducto3);
    this.httpService.peticionGetC("productos?codigoProducto=", this.codigoProducto3).subscribe((respuesta: any[]) => {
      this.producto3 = respuesta;
      console.log(this.producto3)
      this.nombreProducto3 = this.producto3[0].nombreProducto;     
          
    });
  }

  
  calcPrecioProd(numproducto: number) {
    switch (numproducto) {
      case 1:
        this.precioProducto1 = this.cantProducto1 * this.producto1[0].precioVenta;
        break;
      case 2:
        this.precioProducto2 = this.cantProducto2 * this.producto2[0].precioVenta;
        break;
      case 3:
        this.precioProducto3 = this.cantProducto3 * this.producto3[0].precioVenta;
        break;

      default:
        break;
    };
    this.calcularTotales();
  }
  totalventa: number = 0.0;
  totalplusiva: number = 0.0;
  totaliva: number = 0.0;
  calcularTotales() {
    this.totalventa = 0.0;
    this.totaliva = 0.0;
    this.totalplusiva = 0.0;
    if (this.precioProducto1 != null && this.precioProducto1 != undefined
      && this.precioProducto1 != "") {
      this.totalventa += this.precioProducto1;
      this.totaliva = (this.totalventa) * 0.19;
      this.totalplusiva = this.totalventa + ((this.totalventa) * 0.19);
    }
    if (this.precioProducto2 != null && this.precioProducto2 != undefined
      && this.precioProducto2 != "") {
      this.totalventa += this.precioProducto2;
      this.totaliva = (this.totalventa) * 0.19;
      this.totalplusiva = this.totalventa + ((this.totalventa) * 0.19);
    }
    if (this.precioProducto3 != null && this.precioProducto3 != undefined
      && this.precioProducto3 != "") {
      this.totalventa += this.precioProducto3;
      this.totaliva = (this.totalventa) * 0.19;
      this.totalplusiva = this.totalventa + ((this.totalventa) * 0.19);
    }

  }

  codigoRespuesta: any;
  listaDetalleVenta = Array();
  ventaG:any;
  crearVenta(){
    console.log("cedula cliente: "+this.cedulaCliente);
    if (this.precioProducto1 != null && this.precioProducto1 != undefined && this.precioProducto1 != "") {
      let aux = {
        "cantidadproducto": this.cantProducto1,
        "codigoproducto": this.codigoProducto1,
        "valoriva": this.precioProducto1 * 0.19,
        "valortotal": this.precioProducto1,
        "valorventa": (this.precioProducto1 * 0.19) + this.precioProducto1
      }
      this.listaDetalleVenta.push(aux);
      console.log("producto 1: "+this.listaDetalleVenta);

    }
    if (this.precioProducto2 != null && this.precioProducto2 != undefined && this.precioProducto2 != "") {
      let aux = {
        "cantidadproducto": this.cantProducto2,
        "codigoproducto": this.codigoProducto2,
        "valoriva": this.precioProducto2 * 0.19,
        "valortotal": this.precioProducto2,
        "valorventa": (this.precioProducto2 * 0.19) + this.precioProducto2
      }
      this.listaDetalleVenta.push(aux);

    }
    if (this.precioProducto3 != null && this.precioProducto3 != undefined && this.precioProducto3 != "") {
      let aux = {
        "cantidadproducto": this.cantProducto3,
        "codigoproducto": this.codigoProducto3,
        "valoriva": this.precioProducto3 * 0.19,
        "valortotal": this.precioProducto3,
        "valorventa": (this.precioProducto3 * 0.19) + this.precioProducto3
      }
      this.listaDetalleVenta.push(aux);

    }

  //llamar al httpService
  console.log("cedula cliente en ventaG: "+this.cedulaCliente);
    this.ventaG = {
      "cedulacliente": this.cedulaCliente,
      "codigoventa": this.consecutivo,
      "detalleventa": this.listaDetalleVenta,
      "ivaventa": this.totaliva,
      "totalventa": this.totalplusiva,
      "valorventa": this.totalventa
    }
    console.log("estas son las ventas"+this.ventaG);
    this.httpService.peticionPost("ventas", this.ventaG).subscribe((respuesta:any)=>{
      this.codigoRespuesta = respuesta.status;
      if(this.codigoRespuesta === 201){
        alert("Venta ingresada exitosamente.");
        this.crearConsolidado();
      } else {
        alert("No se pudo crear la venta.");
      }
    });

  }
  ciudadS:string;
  crearConsolidado(){    
    this.ciudadS = typeof this.ciudad;
    console.log(this.ciudadS);
    this.httpService.peticionPostC("consolidados/agregar/"+this.ciudad).subscribe((respuesta:any)=>{
      console.log(respuesta.status);
    });
  }

  reload() {
    window.location.reload()
  }

  

    
    
}
