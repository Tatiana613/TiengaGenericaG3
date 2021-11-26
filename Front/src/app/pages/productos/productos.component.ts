import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(private objetohttp: HttpClient, private ProductosService: ProductosService) { }

  res:any;
  contenido: any;
  urlapiget: string = "http://localhost:8080/api/productos";

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido!';
    if (error.error instanceof ErrorEvent) {
      
      errorMessage = `Error: ${error.error.message}\n ${error.status}`;
    } else {
     
      errorMessage = `Codigo de Error: ${error.status} \nMensaje: ${error.message}`;
    }
    
    return throwError(errorMessage);
  }


  ngOnInit(): void {
    this.res = this.objetohttp.get(this.urlapiget).pipe(catchError(this.handleError));

    //suscribe el archivo json y lo convierte   
    this.res = this.objetohttp.get(this.urlapiget).pipe(catchError(this.handleError));
    
    
    this.res.subscribe((datos: any[]) => {
      this.contenido = datos;
      console.log(this.contenido);
    });
    
  }

  resultados:any;
  file!:File;

  onChange(event:any){
    this.file=event.target.files[0];
  }

  async onUpload(){
    console.log(this.file);
    this.resultados = await this.ProductosService.upload(this.file);
    console.log(this.resultados);
  }



}
