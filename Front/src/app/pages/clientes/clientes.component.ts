import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  

  constructor(private objetohttp: HttpClient, private clientesService: ClientesService) { }

  res1:any;
  contenido: any;
  urlapi1: string = "http://localhost:8080/api/clientes";

  ngOnInit():void{   
      this.res1 = this.objetohttp.get(this.urlapi1);
      this.res1.subscribe((datos: any[])=>{
        this.contenido = datos;
        console.log(this.contenido);
      });
    }
    //aqui estuvo william
    codigoRespuesta!:number;
    res2:any
  
    cedulacliente!: string;
    direccioncliente!:string;
    emailcliente!: string;
    nombrecliente: string;
    telefonocliente: string;
    id!: string;
    postData(){
      this.objetohttp.post<any>("http://localhost:8080/api/clientes",{
        cedulacliente: this.cedulacliente,
        direccioncliente: this.direccioncliente,
        emailcliente: this.emailcliente,
        nombrecliente: this.nombrecliente,
        telefonocliente: this.telefonocliente

      },
      {observe: "response"}

      ).subscribe(response=>{this.codigoRespuesta=response.status;
      this.res2=response;
    })
    }

    resultados: any;
    file!: File;

    OnChange (evento:any){
      this.file=evento.target.file[0];
    }

    buscarCliente(){
      this.clientesService.buscar(this.cedulacliente).subscribe((cliente: any[]) =>{
        console.log(cliente);
        this.id =cliente[0].id;
        this.nombrecliente = cliente[0].nombrecliente;
        this.direccioncliente =cliente[0].direccioncliente;
        this.emailcliente = cliente[0].emailcliente;
        this.telefonocliente = cliente[0].telefonocliente;

      })
    }
    
  ceduladelete!: string;
  codedelete!: number;
  eliminarCliente() {
    this.objetohttp.delete(this.urlapi1 + "/cedula/" + this.ceduladelete, {
      observe: 'response'
    }).subscribe(
      (response: any) => {

        this.codedelete = response.status;

        switch (this.codedelete) {
          case 202:
            this.showNotification('top', 'right', 4);
            break;

          case 500:
            this.showNotification('top', 'right', 5);
            break;

        }
        this.ceduladelete = "";
      }
    );
  }
  showNotification(arg0: string, arg1: string, arg2: number) {
    throw new Error('Method not implemented.');
  }
 
  cedulasearch!: string;
  direccionsearch!: string;
  emailsearch!: string;
  nombresearch!: string;
  telefonosearch!: string;
  contenido2: any;
  
  buscar() {
    try {
      this.res2 = this.objetohttp.get(this.urlapi1 + "/cedula/" + this.cedulasearch);
      this.res2.subscribe((datos: any[]) => {
        this.contenido2 = datos;
        console.log(this.contenido2);
        this.direccionsearch = this.contenido2.direccioncliente;
        this.emailsearch = this.contenido2.emailcliente;
        this.nombresearch = this.contenido2.nombrecliente;
        this.telefonosearch = this.contenido2.telefonocliente;

      });
    }
    catch (e) {
      console.error("BK DOWN");
      this.contenido = []
    }
  }

  codeput!: number;
  actualizarCliente() {
    this.objetohttp.put(this.urlapi1 + "/cedula/" + this.cedulasearch,
      {
        "cedulacliente": this.cedulasearch,
        "direccioncliente": this.direccionsearch,
        "emailcliente": this.emailsearch,
        "nombrecliente": this.nombresearch,
        "telefonocliente": this.telefonosearch
      }, {
      observe: 'response'
    }).subscribe(
      (response: any) => {

        this.codeput = response.status;

        switch (this.codeput) {
          case 200:
            this.showNotification('top', 'right', 6);
            break;

          case 224:
            this.showNotification('top', 'right', 7);
            break;

          case 500:
            this.showNotification('top', 'right', 8);
            break;

        }
        this.cedulacliente = "";
        this.direccioncliente = "";
        this.emailcliente = "";
        this.nombrecliente = "";
        this.telefonocliente = "";
      }
    );
  }

}

  
