package mx.uv.practica10;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class Practica10Application {

	public static void main(String[] args) {
		SpringApplication.run(Practica10Application.class, args);
	}

@RequestMapping("/")
String home(){
return "<h1>Bienvenido al API</h1> <p> Opciones de API</p> <ol><li> /altas </li> <li> /bajas </li> <li> /cambios </li> <li> /consultas </li></ol>";
}

@RequestMapping("/altas")
String altas(){
	return "<h1>producto dado de alta</h1>";
	}

@RequestMapping("/bajas")
String bajas(){
		return "<h1>producto dado de baja</h1>";
}


@RequestMapping("/cambios")
String cambios(){
	return "<h1>producto cambiado</h1>";
}

@RequestMapping("/consultas")
String consultas(){
	return "<h1>producto consultado</h1>";
	}

}
