package com.example.Ciclo4.model;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ventas")
public class Venta {
	@Id
	private String id;
	private long cedulaCliente;
	
	@Indexed(unique=true)
	private long codigoVenta;
	private ArrayList<DetalleVenta> detalleVenta;
	private double ivaVenta;
	private double totalVenta;
	private double valorVenta;
	private String ciudadVenta;
	
	public Venta() {
		this.detalleVenta= new ArrayList<DetalleVenta>();
	}

	public Venta(long cedulacliente, long codigoventa, ArrayList<DetalleVenta> detalleventa, double ivaventa,
			double totalVenta, double valorVenta, String ciudadVenta) {
		super();
		this.detalleVenta= new ArrayList<DetalleVenta>();
		this.cedulaCliente = cedulacliente;
		this.codigoVenta = codigoventa;
		this.detalleVenta = detalleventa;
		this.ivaVenta = ivaventa;
		this.totalVenta = totalVenta;
		this.valorVenta = valorVenta;
		this.ciudadVenta = ciudadVenta;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public long getCedulacliente() {
		return cedulaCliente;
	}

	public void setCedulacliente(long cedulacliente) {
		this.cedulaCliente = cedulacliente;
	}

	public long getCodigoventa() {
		return codigoVenta;
	}

	public void setCodigoventa(long codigoventa) {
		this.codigoVenta = codigoventa;
	}

	public ArrayList<DetalleVenta> getDetalleventa() {
		return detalleVenta;
	}

	public void setDetalleventa(ArrayList<DetalleVenta> detalleventa) {
		this.detalleVenta = detalleventa;
	}

	public double getIvaventa() {
		return ivaVenta;
	}

	public void setIvaventa(double ivaventa) {
		this.ivaVenta = ivaventa;
	}

	public double getTotalventa() {
		return totalVenta;
	}

	public void setTotalventa(double totalventa) {
		this.totalVenta = totalventa;
	}

	public double getValorventa() {
		return valorVenta;
	}

	public void setValorventa(double valorventa) {
		this.valorVenta = valorventa;
	}

	public String getCiudadVenta() {
		return ciudadVenta;
	}

	public void setCiudadVenta(String ciudadVenta) {
		this.ciudadVenta = ciudadVenta;
	}
	
	
}
