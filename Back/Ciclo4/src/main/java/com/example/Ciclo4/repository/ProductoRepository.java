package com.example.Ciclo4.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Ciclo4.model.Producto;

public interface ProductoRepository extends MongoRepository<Producto, String>{
	
	
	List<Producto> findBycodigoProducto(String codigoProducto);
	List<Producto> findBynombreProducto(String nombreProducto);
	void deleteBycodigoProducto(String codigoProducto);
	

}
