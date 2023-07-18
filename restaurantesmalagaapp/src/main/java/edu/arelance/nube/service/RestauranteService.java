package edu.arelance.nube.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import edu.arelance.nube.dto.FraseChuckNorris;
import edu.arelance.nube.repository.entity.Restaurante;

public interface RestauranteService {
	
	//consultar todos
	Iterable<Restaurante> consultarTodos();
	//Consulta por rango precio
	Iterable<Restaurante> consultaPorRangoPrecio(int preciomin, int preciomax);
	Iterable<Restaurante> consultaPorRangoPrecio(int preciomin, int preciomax, Pageable pageable);

	//Buscar por nombre, barrio o especialidad en función del parametro de busqueda
	Iterable<Restaurante> buscarPorBarrioNombreOEspecialidad (String clave);
	Iterable<String> obtenerTodosLosBarrios();
	//Consultar restaurante 
	//Optional: es una clase que ayuda a controlar, minimizar la excepción por null pointer
	Optional<Restaurante> consultarUno (Long id);
	
	//Crear
	 Restaurante altaRestaurante(Restaurante restaurante);
	 	
	 //Borrar
	 void borrarRestaurante (Long id);
	 
	 //Modificación
	 Optional<Restaurante> modificarRestaurante(Long id, Restaurante restaurante);
	 
	 Optional<FraseChuckNorris> obtenerFraseAleatorioChuckNorris ();
	 
	 //Paginación
	 Page<Restaurante> consultarPorPagina(Pageable pageable);
	 }
