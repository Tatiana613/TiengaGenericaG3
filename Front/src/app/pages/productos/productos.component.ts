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

  //funciones para las DatatTables
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

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
      this.dtTrigger.next(this.dtOptions);
    });

    //funcion para configurar la datatable
    this.dtOptions = {
      pagingType: 'full_numbers',
      destroy: true,
      columns: [{
        title: 'Código',
      },{
        title: 'Nombre Producto',
      },{
        title: 'Nit Proveedor',
      },{
        title: 'Precio Compra',
      },{
        title: 'Iva Compra',
      },{
        title: 'Precio Venta'
      }],
      pageLength: 10,
      responsive: true,
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ elementos",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      }
    };
    
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


  // Metodo DataTables
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    
  }



}
