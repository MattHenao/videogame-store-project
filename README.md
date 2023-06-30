# Tienda de videojuegos

_Proyecto del semillero Devco 2023_


## Explicación 📺

_Este proyecto consiste en un CRUD de gestión de una tienda de videojuegos_

### Pre-requisitos 📄

* Descargar el proyecto en tu maquina.
* Tener instalado *Docker* (Se recomienda tener Docke Desktop).
* Tener instalado *NodeJS*.
* Tener instalado Postman para realizar las peticiones **HTTP**.
* Descargar los paquetes de npm: *npm install*.

### Recursos

 - [NodeJS](https://nodejs.org/es/download)
 - [NestJS](https://docs.nestjs.com/#installation)
 - [Swagger](https://docs.nestjs.com/openapi/introduction)

### Instalacion de proyecto 💾

Para poder correr el proyecto, tienes que instalarlo antes, para ello, tienes que hacer lo siguiente:

* Crear una imagen de docker con el archivo *docker-compose.yml* corriendo el siguiente comando en la consola:

```
$ docker-compose build
```

* Inicia el contenedor de Docker con el siguiente comando:

```
$ docker compose up
```

### Conectar base de datos PostgreSQL en PGAdmin 💡
Tenemos que tener corriendo el contenedor y obtener el IPAddress

* Obtener el id del contenedor

```
$ docker ps -a
```

* Buscar el **IPAddress** del contenedor:

```
$ docker inspect <id>
```

* Ingresar en *http://localhost:5555/*

* Inicia sesion en PGAdmin:

```
Email: admin@admin.com
Pass: admin
```

* Agregar un nuevo servidor e ingresar los datos:

```
- **IPAddress**
- User: devco
- Pass: devco
```

### Ejecución del programa ⚙️

Ya con el programa corriendo, podemos ir al Postman y realizar las diferentes peticiones HTTP de el controller con la siguiente URL:

```
http://localhost:3000/game
```

Podemos visualizar las pruebas unitarias del proyecto corriendo en la terminal:

```
$ npm run test
```

Y para mostrar el Swagger generado por el proyecto, tienes que ingresar la siguiente URL en tu navegador:

```
http://localhost:3000/api
```
