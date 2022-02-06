var mensaje = confirm("Esta web esta en desarrollo, ¿te gustaría entrar a mi web?");
//Detectamos si el usuario acepto el mensaje
if (mensaje) {
    alert("Gracias por aceptar, te dirigeremos a mi web");
}
//Detectamos si el usuario denegó el mensaje
else {
alert("Te dirigeremos a Google");
    window.location.href = "https://www.google.com";
}
