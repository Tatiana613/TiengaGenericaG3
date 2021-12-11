import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ClienteModel, VentasModel } from "src/app/models/cliente.dto";
import { HttpService } from 'src/app/services/http.service';
import { Subject, throwError } from 'rxjs';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  listaClientes: ClienteModel[] = [];
  listaVentas: VentasModel[] = [];
  listaResultados: Array<string> = [];
  cedulaCliente: string;
  nombreCliente: string;
  valorVenta: number;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.consultaClientes();


  }

  consultaClientes() {
    this.listaClientes = [];
    this.httpService.peticionGet("clientes").subscribe((respuesta: any) => {
      respuesta.forEach(cliente => {
        this.listaClientes.push(cliente);

      });
    });
  }

  consultaVentas() {
    this.listaVentas = [];
    this.httpService.peticionGet("ventas").subscribe((respuesta: any) => {
      respuesta.forEach(venta => {
        this.listaVentas.push(venta);

      });
      for (let venta of this.listaVentas) { 
        for (let cliente of this.listaClientes) {
          if (this.listaVentas.cedulaCliente  

      } }
    });
  }

}








