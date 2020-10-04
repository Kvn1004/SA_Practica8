function getUsers() {
    $.ajax({
        type: "GET",
        url: 'http://localhost/usuarios',
        crossDomain: true,
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },

        success: function(response) {
            console.log(response);
            var tabla = document.createElement('table'); //creación de tabla para almacenar los contactos
            tabla.setAttribute('text-align', 'center');
            for (var i = 0; i < response.length; i++) { //iteración sobre el array de contactos obtenido del objeto JSON y creacion de cada fila de la tabla
                var tr = document.createElement('tr');
                var td = document.createElement('td');
                var contc = document.createTextNode(response[i].nombre);
                td.appendChild(contc);
                tr.appendChild(td);
                tabla.appendChild(tr);
            }
            document.getElementById("tablaUsuarios").appendChild(tabla); //se incrusta la tabla creada al documento HTML
        },
        error: function(xhr, status, error) {
            console.log(xhr + ", " + status + ", " + error);
            alert('Error en la comunicación con el servidor');
        },
        always: function(response) {
            console.log(response);
        }
    })
}