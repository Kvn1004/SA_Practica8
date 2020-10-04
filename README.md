# SA_Practica8
Esta aplicación contiene las definiciones de un ambiente en Docker, utilizando un servidor web con node.js, y una base de datos PostgreSQL.
Se realiza la consulta a la base de datos por medio de un método GET al path /usuarios y se pueden añadir nuevos registros con el método POST y los parámetros id, nombre y correo.

## Demostración
(https://drive.google.com/file/d/1HEgE-R3nJZ_qSyp38LvDukVGpWQPx_kt/view?usp=sharing)

## Instalación
Primero se debe instalar el software de Docker, el cual se puede obtener de su página oficial.
(https://www.docker.com/get-started)

Los archivos Dockerfile contienen la definicion de cada imagen de Docker dentro de la cual ejecutaremos nuestros servicios (web y base de datos). Al momento de construir nuestra imagen Docker, el programa ejecutará las instrucciones descritas en el archivo para preparar nuestra imagen de acuerdo a nuestras necesidades.

Para el servidor web tomamos como base la imagen oficial de Node disponible en Docker Hub, y para la base de datos tomamos la imagen oficial de PostgreSQL también disponible en Docker Hub.

Para crear nuestra imagen nos dirigimos a la carpeta donde está el Dockerfile y ejecutamos el siguiente comando:
```
docker build --tag "nombre de la imagen:versión" .
```
Así que para el servidor web escribimos
```
docker build --tag api-rest:1.0 .
```
Y para la base de datos 
```
docker build --tab bd:1.0 .
```

Y ya tenemos las imagenes Docker creadas. Docker sólo descargará la imagen oficial desde Docker Hub la primera vez que la constuyamos. Luego la tendrá disponible en nuestro sistema para actualizar cualquier cambio que hagamos sobre ella.

Luego, con el archivo docker-compose.yml en la carpeta raíz, creamos un ambiente unificado para que nuestros dos contenedores puedan comunicarse y trabajar juntos, donde definimos las caracteristicas como puertos de conexión y credenciales para llevar a cabo tal tarea.

Para ejecutar la aplicación se ejecuta el siguiente comando:
```
docker-compose up
```


## Desarrollado con
- Node.js - framework para la arquitectura REST utilizada para crear los microservicios.
- Express - framework de Node.js que permite crear las API REST.
- PostgreSQL - sistema de gestión de base de datos.
- Docker - plataforma de software que posibilita la creación y uso de contenedores para un mejor manejo y despliegue automático de aplicaciones.

## Contribución.
Pull requests para mejorar el codigo o la presentación de la página son bienvenidas.

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
