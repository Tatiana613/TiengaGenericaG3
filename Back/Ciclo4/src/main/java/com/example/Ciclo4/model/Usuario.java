package com.example.Ciclo4.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Usuarios")
public class Usuario {
	
	@Id
	private String id;
	private String username;
	private String password;
	private String nombreCompleto;
	private String email;
	
	public Usuario() {
		// TODO Auto-generated constructor stub
	}
	
	public Usuario(String username, String password, String nombreCompleto, String email) {
		super();
		this.username = username;
		this.password = password;
		this.nombreCompleto = nombreCompleto;
		this.email = email;
	}


	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getnombreCompleto() {
		return nombreCompleto;
	}
	public void setnombreCompleto(String nombreCompleto) {
		this.nombreCompleto = nombreCompleto;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

}
