package com.example.Ciclo4.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Clientes")
public class Cliente {

	
	@Id
	  private String id;
	  private String cedula;
	  private String nombreCompleto;
	  private String direccion;
	  private String telefono;
	  private String correoElectronico;
	  
	  public  Cliente() {
			// TODO Auto-generated constructor stub
		}
	  
	  public Cliente(String cedula, String nombreCompleto,String direccion, String telefono, String correoElectronico ) {
		    super();
		    this.cedula=cedula;
		    this.nombreCompleto=nombreCompleto;
		    this.direccion=direccion;
		    this.telefono=telefono;
		    this.correoElectronico=correoElectronico;
		    
		  }

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCedula() {
		return cedula;
	}

	public void setCedula(String cedula) {
		this.cedula = cedula;
	}

	public String getNombreCompleto() {
		return nombreCompleto;
	}

	public void setNombreCompleto(String nombreCompleto) {
		this.nombreCompleto = nombreCompleto;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getCorreoElectronico() {
		return correoElectronico;
	}

	public void setCorreoElectronico(String correoElectronico) {
		this.correoElectronico = correoElectronico;
	}
	  
	  
}
