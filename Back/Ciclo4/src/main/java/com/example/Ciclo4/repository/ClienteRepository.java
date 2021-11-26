package com.example.Ciclo4.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Ciclo4.model.Cliente;


public interface ClienteRepository extends MongoRepository<Cliente, String>{
	
	List<Cliente> findBycedula(String cedula);
	void deleteBycedula(String cedula);

}
