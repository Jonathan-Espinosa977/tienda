# tienda
API REST que gestiona productos de una tienda en linea.
Esta es una aplicación de ejemplo para gestionar productos en una tienda en línea. La API está construida usando **Java**, **Spring Boot**, **Hibernate** y **MySQL** en el backend. El **frontend** está desarrollado con **Angular** y utiliza **Bootstrap** para la interfaz de usuario. Todo el código ha sido comprimido en un archivo ZIP para ser cargado en este repositorio.

## Tecnologías

- **Backend**:
  - **Java** 8
  - **Spring Boot** 3.4.2
  - **Hibernate** para ORM (mapeo objeto-relacional)
  - **MySQL** como base de datos

- **Frontend**:
  - **Angular** 19
  - **Bootstrap** 5 para el diseño de la interfaz de usuario

- **API**:
  - **JSON** para intercambio de datos entre frontend y backend.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes programas:

- **JDK 17+** para ejecutar el backend en Java.
- **MySQL** para la base de datos.
- **Node.js y npm** para instalar dependencias de Angular.
- **Angular CLI** para ejecutar y servir el proyecto frontend.

## Estructura del Proyecto
El repositorio contiene tres carpetas principales:

DB/: El codigo de la base de datos en MySQL.
backend/: El código fuente para el backend en Java utilizando Spring Boot, Hibernate, y MySQL.
frontend/: El código fuente para el frontend desarrollado con Angular y Bootstrap.

## Configuración de la Base de Datos

Asegúrate de tener MySQL luego importa la base de datos llamada tienda o le puedes poner otro nombre pero ajusta el archivo application.properties en tu IDE de preferencia para que coincida con la configuración de tu base de datos.

*Ejemplo de configuración de base de datos en src/main/resources/application.properties:*
*spring.datasource.url=jdbc:mysql://localhost:3306/tienda*
*spring.datasource.username=root*
*spring.datasource.password=tu-contraseña*
*spring.jpa.hibernate.ddl-auto=update*
*spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect*
*spring.jpa.show-sql=true*

## Ejecutar el Backend

Descomprime el archivo ZIP descargado y navega hasta la carpeta backend/.
Para ejecutar el backend, usa Maven o Gradle según la herramienta de construcción que hayas elegido. Aquí se asume que estás utilizando Maven:
*mvn spring-boot:run*
Esto iniciará el servidor de Spring Boot en el puerto 8080.

La API proporciona los siguientes endpoints para gestionar los productos de la tienda:

Obtener todos los productos (GET /api/productos)

Obtener un producto por ID (GET /api/productos/{id})

Crear un nuevo producto (POST /api/productos)

Actualizar un producto (PUT /api/productos/{id})

Eliminar un producto (DELETE /api/productos/{id})

## Ejecutar el Frontend

Descomprime el archivo ZIP descargado y navega a TiendaApp.
Instala las dependencias de Node.js utilizando los siguientes comandos:

*npm install bootstrap jquery @popperjs/core*
*npm install moment --save*
*npm install --save font-awesome*
*npm i sweetalert2*
*npm install @ng-bootstrap/ng-bootstrap --legacy-peer-deps*
*npm install exceljs*

Luego para ejecutar el frontend, usa el siguiente comando:
*ng serve*

Esto iniciará el servidor de Angular en el puerto 4200. Abre tu navegador y accede a http://localhost:4200 para ver la aplicación en funcionamiento.
