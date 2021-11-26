package com.example.Ciclo4.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Productos")
public class Producto {

	@Id
	private String id;
	private String codigoProducto;
	private String nombreProducto;
	private double nitProveedor;
	private double precioCompra;
	private double ivaCompra;
	private double precioVenta;
	
	public  Producto() {
		// TODO Auto-generated constructor stub
	}
	
	public Producto(String codigoProducto, String nombreProducto, double nitProveedor, double precioCompra, double ivaCompra, double precioVenta ) {
		super();
		this.codigoProducto=codigoProducto;
		this.nombreProducto=nombreProducto;
		this.nitProveedor=nitProveedor;
		this.precioCompra=precioCompra;
		this.ivaCompra=ivaCompra;
		this.precioVenta=precioVenta;
		
	}

	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCodigoProducto() {
		return codigoProducto;
	}

	public void setCodigoProducto(String codigoProducto) {
		this.codigoProducto = codigoProducto;
	}

	public String getNombreProducto() {
		return nombreProducto;
	}

	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}

	public double getNitProveedor() {
		return nitProveedor;
	}

	public void setNitProveedor(double nitProveedor) {
		this.nitProveedor = nitProveedor;
	}

	public double getPrecioCompra() {
		return precioCompra;
	}

	public void setPrecioCompra(double precioCompra) {
		this.precioCompra = precioCompra;
	}

	public double getIvaCompra() {
		return ivaCompra;
	}

	public void setIvaCompra(double ivaCompra) {
		this.ivaCompra = ivaCompra;
	}

	public double getPrecioVenta() {
		return precioVenta;
	}

	public void setPrecioVenta(double precioVenta) {
		this.precioVenta = precioVenta;
	}
	
}
