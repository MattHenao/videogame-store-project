# Tienda de videojuegos

_Proyecto del semillero Devco 2023_


## Explicación 📺

_Este proyecto consiste en un CRUD de gestión de una tienda de videojuegos_

### Pre-requisitos 📄

* Descargar el proyecto en tu maquina.
* Tener instalado *PostgreSQL* (Recomendado tener también pgAdmin 4).
* Tener instalado *NodeJS*.
* Tener instalado Postman para realizar las peticiones **HTTP**.
* Descargar los siguientes paquetes con npm: *TypeORM* con PG y *Swagger*.

### Recursos

 - [NodeJS](https://nodejs.org/es/download)
 - [NestJS](https://docs.nestjs.com/#installation)
 - [PostgreSQL](https://www.postgresql.org/download/)
 - [TypeORM](https://docs.nestjs.com/recipes/sql-typeorm#getting-started)
 - [Swagger](https://docs.nestjs.com/openapi/introduction)

### Conexión con la base de datos 💾

Tienes que realizar la conexión con la base de datos, en este caso es PostgreSQL, para ello, tienes que hacer lo siguiente:

* Crear una base de datos en PosgreSQL llamada *videogames_store_db*

* Entra al proyecto con el editor de texto a tu elección y te situas en el siguiente ruta y poner la información de tu base de datos.

```
/src/database/database.providers.ts
```
* Realizas lo anterior pero en el siguiente archivo:
```
/src/app.module.ts
```
Ya realizado lo anterior, la base de datos quedara conectada con el proyecto.

### Iniciar el programa 💡
Para iniciar el programa, tienes que situarte en la raiz del proyecto en la terminal de tu elección y copiar el siguiente comando:

```
$ nest start
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
