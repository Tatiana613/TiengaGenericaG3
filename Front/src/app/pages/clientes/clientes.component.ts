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

  editarCliente(cliente: ClienteModel){
    console.log("Cliente a editar:", cliente);
    alert("El cliente a editar es:"+ cliente.cedula);
  }

  eliminarCliente(cliente: ClienteModel){
    console.log("Cliente a eliminar:", cliente);
    alert("El cliente a eliminar es:"+ cliente.cedula);
  }

}
