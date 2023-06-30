package edu.arelance.nube.repository.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "restaurantes")
public class Restaurante {
	
	@Id //indico a spring que el id es la PK
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Autoincremento MySQL.
	private Long id;
	@NotEmpty
	private String nombre;
	@NotEmpty
	private String direccion;
	@NotEmpty
	private String barrio;
	private String web;
	private String fichaGoogle;
	private Float latitud;
	private Float longitud;
	@Min(2)
	@Max(500)
	private Integer precio;
	private String especialidad1;
	private String especialidad2;
	private String especialidad3;
	
	@Column(name = "creado_en")
	private LocalDateTime creadoEn;
	
	@PrePersist //beforInsert. Se ejecuta antes de insertar
	private void generarFechaCreacion() {
		this.creadoEn = LocalDateTime.now(); //la fecha y hora del sistema.		
	}

	//Método por defecto
	public Restaurante() {
		
	}
	
	//Metodo con parametros
	
	public Restaurante(Long id, String nombre, String direccion, String barrio, String web, String fichaGoogle,
			Float latitud, Float longitud, Integer precio, String especialidad1, String especialidad2,
			String especialidad3, LocalDateTime creadoEn) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.direccion = direccion;
		this.barrio = barrio;
		this.web = web;
		this.fichaGoogle = fichaGoogle;
		this.latitud = latitud;
		this.longitud = longitud;
		this.precio = precio;
		this.especialidad1 = especialidad1;
		this.especialidad2 = especialidad2;
		this.especialidad3 = especialidad3;
		this.creadoEn = creadoEn;
	}
	
	//Getter & Setter

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getBarrio() {
		return barrio;
	}

	public void setBarrio(String barrio) {
		this.barrio = barrio;
	}

	public String getWeb() {
		return web;
	}

	public void setWeb(String web) {
		this.web = web;
	}

	public String getFichaGoogle() {
		return fichaGoogle;
	}

	public void setFichaGoogle(String fichaGoogle) {
		this.fichaGoogle = fichaGoogle;
	}

	public Float getLatitud() {
		return latitud;
	}

	public void setLatitud(Float latitud) {
		this.latitud = latitud;
	}

	public Float getLongitud() {
		return longitud;
	}

	public void setLongitud(Float longitud) {
		this.longitud = longitud;
	}

	public Integer getPrecio() {
		return precio;
	}

	public void setPrecio(Integer precio) {
		this.precio = precio;
	}

	public String getEspecialidad1() {
		return especialidad1;
	}

	public void setEspecialidad1(String especialidad1) {
		this.especialidad1 = especialidad1;
	}

	public String getEspecialidad2() {
		return especialidad2;
	}

	public void setEspecialidad2(String especialidad2) {
		this.especialidad2 = especialidad2;
	}

	public String getEspecialidad3() {
		return especialidad3;
	}

	public void setEspecialidad3(String especialidad3) {
		this.especialidad3 = especialidad3;
	}

	public LocalDateTime getCreadoEn() {
		return creadoEn;
	}

	public void setCreadoEn(LocalDateTime creadoEn) {
		this.creadoEn = creadoEn;
	}

	@Override
	public String toString() {
		return "Restaurante [id=" + id + ", nombre=" + nombre + ", direccion=" + direccion + ", barrio=" + barrio
				+ ", web=" + web + ", fichaGoogle=" + fichaGoogle + ", latitud=" + latitud + ", longitud=" + longitud
				+ ", precio=" + precio + ", especialidad1=" + especialidad1 + ", especialidad2=" + especialidad2
				+ ", especialidad3=" + especialidad3 + ", creadoEn=" + creadoEn + ", getId()=" + getId()
				+ ", getNombre()=" + getNombre() + ", getDireccion()=" + getDireccion() + ", getBarrio()=" + getBarrio()
				+ ", getWeb()=" + getWeb() + ", getFichaGoogle()=" + getFichaGoogle() + ", getLatitud()=" + getLatitud()
				+ ", getLongitud()=" + getLongitud() + ", getPrecio()=" + getPrecio() + ", getEspecialidad1()="
				+ getEspecialidad1() + ", getEspecialidad2()=" + getEspecialidad2() + ", getEspecialidad3()="
				+ getEspecialidad3() + ", getCreadoEn()=" + getCreadoEn() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	
	
}
