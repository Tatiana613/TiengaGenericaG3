package com.example.Ciclo4.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Ciclo4.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String>{
	
	List<Usuario> findByUsername(String username);
	
	List<Usuario> findByNombreCompleto(String nombre);
	

}
