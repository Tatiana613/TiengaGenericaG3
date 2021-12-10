package com.example.Ciclo4.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "consolidado")
public class Consolidado {
	
	@Id
	private String id;
	private String ciudad;
	private Long totalVentas;
	
	public Consolidado() {

	}

	public Consolidado(String ciudad, Long totalventas) {
		super();
		this.ciudad = ciudad;
		this.totalVentas = totalventas;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public Long getTotalventas() {
		return totalVentas;
	}

	public void setTotalventas(Long totalventas) {
		this.totalVentas = totalventas;
	}
	
	
}
