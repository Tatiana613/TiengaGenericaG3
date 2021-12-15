package com.example.Ciclo4.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Ciclo4.model.Cliente;
import com.example.Ciclo4.repository.ClienteRepository;

@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ClienteController {
	
	@Autowired
	ClienteRepository clienteRepository;
	
	@GetMapping("/clientes")
	public ResponseEntity<List<Cliente>> getAllClientes(@RequestParam(required = false) String cedula){
		try {
			List<Cliente> cliente = new ArrayList<Cliente>(); 

			if (cedula == null) {
				clienteRepository.findAll().forEach(cliente::add);
			} else {
				clienteRepository.findBycedula(cedula).forEach(cliente::add);
			}
			if (cliente.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(cliente, HttpStatus.OK);

		}catch (Exception e){
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/clientes/{id}")
	public ResponseEntity<Cliente> getClienteById(@PathVariable("id") String Id) {
		Optional<Cliente> productoData = clienteRepository.findById(Id);

		if (productoData.isPresent()) {
			return new ResponseEntity<>(productoData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/clientes/cedula/{cedula}")
	public ResponseEntity<Cliente> getClienteByCedula(@PathVariable("cedula") String cedula) {
		Cliente aux=clienteRepository.findBycedula(cedula).get(0);
		Optional<Cliente> clienteData =  Optional.of(aux);

		if (clienteData.isPresent()) {
			return new ResponseEntity<>(clienteData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	
	
	@PostMapping("/clientes")
	public ResponseEntity<Cliente> createCliente(@RequestBody Cliente client) {
		try {
			Cliente _cliente = clienteRepository.save(new Cliente(client.getCedula(),
					client.getNombreCompleto(),
					client.getDireccion(),
					client.getTelefono(),
					client.getCorreoElectronico()
					));
			return new ResponseEntity<>(_cliente, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/clientes/{id}")
	public ResponseEntity<Cliente> updateCliente(@PathVariable("id") String Id, @RequestBody Cliente client) {
		Optional<Cliente> clienteData = clienteRepository.findById(Id);

		if (clienteData.isPresent()) {
			Cliente _cliente = clienteData.get();
			
			_cliente.setCedula(client.getCedula());
			_cliente.setNombreCompleto(client.getNombreCompleto());
			_cliente.setDireccion(client.getDireccion());
			_cliente.setTelefono(client.getTelefono());
			_cliente.setCorreoElectronico(client.getCorreoElectronico());
			clienteRepository.save(_cliente);
			return new ResponseEntity<>(_cliente, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/clientes/{cedula}")
	public ResponseEntity<HttpStatus> deleteCliente(@PathVariable("cedula") String cedula) {
		try {
			clienteRepository.deleteBycedula(cedula);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/clientes")
	public ResponseEntity<HttpStatus> deleteAllCliente() {
		try {
			clienteRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	

}
