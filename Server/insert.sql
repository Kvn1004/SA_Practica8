INSERT INTO Usuario (id, nombre, correo) VALUES ('@user1', 'User1', 'user1@gmail.com');
INSERT INTO Usuario (id, nombre, correo) VALUES ('@master23', 'Hugo Perez', 'ms1991205@gmail.com');
INSERT INTO Usuario (id, nombre, correo) VALUES ('@noticias_canal_3', 'Canal 3', 'info.canal3@outlook.com');

INSERT INTO Tweet (id_usuario, contenido) VALUES ('@user1', 'Twit de prueba');
INSERT INTO Tweet (id_usuario, contenido) VALUES ('@noticias_canal_3', 'ULTIMA HORA: Derrumbe en Carretera a El Salvador, km 15. Mas detalles en nuestra edicion nocturna a las 7:00PM');
INSERT INTO Tweet (id_usuario, contenido) VALUES ('@master23', 'Me gustan los videojuegos y la comida italiana');
INSERT INTO Tweet (id_usuario, contenido) VALUES ('@noticias_canal_3', 'Capturan a supuesto integrante de la clica "Locos Centrales" en Quetzaltenango');
INSERT INTO Tweet (id_usuario, contenido) VALUES ('@noticias_canal_3', 'Maduro y Jimmy Morales que cesen ataques a la prensa');
INSERT INTO Tweet (id_usuario, contenido) VALUES ('@noticias_canal_3', 'Ligan a proceso a tres exempleadas del MP por fraude en supuesta anomalía en compra de edificio');

curl --data "id=@elantra201&nombre=Carmen Electra&correo=carmenhot1987@yahoo.com" http://localhost:3000/usuarios
curl --data "id=@elantra201&contenido=I am having a good time in Beverly Hills!" http://localhost:3000/tweets