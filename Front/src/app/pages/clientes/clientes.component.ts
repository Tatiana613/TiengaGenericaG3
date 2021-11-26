import { Component, OnInit } from '@angular/core';
import { ClienteModel } from "src/app/models/cliente.dto";
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  listaClientes: ClienteModel[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.peticionGet("clientes").subscribe((respuesta: any) => {
      respuesta.forEach(cliente => {
        this.listaClientes.push(cliente);
      });
    });
  }

  editarProducto(producto: ClienteModel){
    console.log("Producto a editar:", producto);
  }

  eliminarProducto(producto: ClienteModel){
    console.log("Producto a eliminar:", producto);
  }

}
