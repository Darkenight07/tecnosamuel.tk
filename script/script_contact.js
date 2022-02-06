var mensaje = confirm("Este apartado de la pagina web esta en desarrollo y no contiene nada, ¿quieres entrar al apartado?");
//Detectamos si el usuario acepto el mensaje
if (mensaje) {
alert("Gracias por aceptar, te dirigeremos al apartado");
}
//Detectamos si el usuario denegó el mensaje
else {
alert("Te dirigeremos a Google");
    window.location.href = "http://www.google.com";
}