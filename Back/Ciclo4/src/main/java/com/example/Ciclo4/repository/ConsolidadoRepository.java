package com.example.Ciclo4.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Ciclo4.model.Consolidado;



public interface ConsolidadoRepository  extends MongoRepository<Consolidado, String>{
	
	List<Consolidado> findByCiudad(String ciudad);
}
