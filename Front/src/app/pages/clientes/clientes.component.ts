import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ClienteModel } from "src/app/models/cliente.dto";
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clienteForm: FormGroup;
  listaClientes: ClienteModel[] = [];
  clienteNuevo = true;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.clienteForm = this.formBuilder.group({
      id: ['', ],
      cedula: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required]]
    });

    this.consultaClientes();
  }

  controladorErrores(){
    return this.clienteForm.controls;
  }

  consultaClientes(){
    this.listaClientes=[];
    this.httpService.peticionGet("clientes").subscribe((respuesta: any) => {
      respuesta.forEach(cliente => {
        this.listaClientes.push(cliente);
      });
    });
  }

  editarCliente(cliente: ClienteModel){
    this.clienteNuevo = false;
    this.clienteForm.get('id').setValue(cliente.id);
    this.clienteForm.get('cedula').setValue(cliente.cedula);
    this.clienteForm.get('telefono').setValue(cliente.telefono);
    this.clienteForm.get('nombre').setValue(cliente.nombreCompleto);
    this.clienteForm.get('correo').setValue(cliente.correoElectronico);
    this.clienteForm.get('direccion').setValue(cliente.direccion);
  }

  eliminarCliente(cliente: ClienteModel){
    this.httpService.peticionDelete("clientes", cliente.cedula).subscribe( (respuesta)=>{
      if(respuesta.status === 200){
        alert('Se ha borrado el cliente');
        this.clienteForm.reset();
        this.consultaClientes();
      }
      else{
        alert('No se ha podido borrar el cliente');
      }
    } );
  }

  actualizarCliente(){
    if(this.clienteForm.valid){
      let cliente: ClienteModel = {
        cedula: this.clienteForm.get("cedula").value,
        correoElectronico: this.clienteForm.get("correo").value,
        direccion: this.clienteForm.get("direccion").value,
        id: this.clienteForm.get("id").value,
        nombreCompleto: this.clienteForm.get("nombre").value,
        telefono: this.clienteForm.get("telefono").value,
      };

      this.httpService.peticionPut("clientes", cliente.id, cliente).subscribe((respuesta) => {
        if(respuesta.status === 200){
          alert('Se ha actualizado el cliente');
          this.clienteForm.reset();
          this.consultaClientes();
          this.clienteNuevo = true;
        }
        else{
          alert('No se ha podido actualizar el cliente');
        }
      });

    }
    else{
      alert("Valide los datos del cliente");
    }
  }

  crearCliente(){
    this.clienteNuevo = true;
    if(this.clienteForm.valid){
      let cliente: ClienteModel = {
        cedula: this.clienteForm.get("cedula").value,
        correoElectronico: this.clienteForm.get("correo").value,
        direccion: this.clienteForm.get("direccion").value,
        id: this.clienteForm.get("id").value,
        nombreCompleto: this.clienteForm.get("nombre").value,
        telefono: this.clienteForm.get("telefono").value,
      };

      this.httpService.peticionPost("clientes", cliente).subscribe((respuesta) => {
        if(respuesta.status === 201 ){
          alert('Se ha creado el cliente');
          this.clienteForm.reset();
          this.consultaClientes();
        }
        else{
          alert('No se ha podido crear el cliente');
        }
      });

    }
    else{
      alert("Valide los datos del cliente");
    }
  }

}
