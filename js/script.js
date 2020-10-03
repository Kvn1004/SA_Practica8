function getUsers() {
    $.ajax({
        type: "GET",
        crossDomain: true,
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Basic",
        },
        url: 'http://localhost:80/usuarios',
        success: function(response) {
            console.log(response);
        }
    })
}