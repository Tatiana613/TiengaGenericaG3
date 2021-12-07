package com.example.Ciclo4.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import com.example.Ciclo4.model.Producto;
import com.example.Ciclo4.repository.ProductoRepository;


@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class ProductoController {

	@Autowired
	ProductoRepository productoRepository;

	@GetMapping("/productos")
	public ResponseEntity<List<Producto>> getAllProducto(@RequestParam(required = false) String codigoProducto){
		try {
			List<Producto> producto = new ArrayList<Producto>(); 

			if (codigoProducto == null) {
				productoRepository.findAll().forEach(producto::add);
			} else {
				productoRepository.findBycodigoProducto(codigoProducto).forEach(producto::add);
			}
			if (producto.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(producto, HttpStatus.OK);

		}catch (Exception e){
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/productos/{Id}")
	public ResponseEntity<Producto> getProductoById(@PathVariable("Id") String Id) {
		Optional<Producto> productoData = productoRepository.findById(Id);

		if (productoData.isPresent()) {
			return new ResponseEntity<>(productoData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/productos")
	public ResponseEntity<Producto> createProducto(@RequestBody Producto produc) {
		try {
			Producto _producto = productoRepository.save(
					new Producto(produc.getCodigoProducto(),
							produc.getNombreProducto(),
							produc.getNitProveedor(),
							produc.getPrecioCompra(),
							produc.getIvaCompra(),
							produc.getPrecioVenta()));
			return new ResponseEntity<>(_producto, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	@PutMapping("/productos/{id}")
	public ResponseEntity<Producto> updateProducto(@PathVariable("id") String Id, @RequestBody Producto produc) {
		Optional<Producto> productoData = productoRepository.findById(Id);

		if (productoData.isPresent()) {
			Producto _producto = productoData.get();
			
			_producto.setNombreProducto(produc.getNombreProducto());
			_producto.setNitProveedor(produc.getNitProveedor());
			_producto.setPrecioCompra(produc.getPrecioCompra());
			_producto.setIvaCompra(produc.getIvaCompra());
			_producto.setPrecioVenta(produc.getPrecioVenta());
			productoRepository.save(_producto);
			return new ResponseEntity<>(_producto, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/productos/{codigo}")
	public ResponseEntity<HttpStatus> deleteProducto(@PathVariable("codigo") String codigo) {
		try {
			productoRepository.deleteBycodigoProducto(codigo);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/productos")
	public ResponseEntity<HttpStatus> deleteAllProductos() {
		try {
			productoRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/productos/{codigoProducto}")
	public ResponseEntity<List<Producto>> findBycodigoProducto(@PathVariable("codigoProducto") String codigoProducto) {
		try {
			List<Producto> productos = productoRepository.findBycodigoProducto(codigoProducto);

			if (productos.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(productos, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}




}
