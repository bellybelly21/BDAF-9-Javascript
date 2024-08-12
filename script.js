function menu (){
    var intro = prompt("Hola soy Eva, tu asistente virtual del servicio al cliente de Mentel. Estoy aquí para ayudarte en lo que necesites. \n Escribe el número de la opción que buscas: \n 1. Boletas y pagos \n 2. Señal y llamadas \n 3. Oferta comercial \n 4. Otras consultas");
    if (intro == 1) {
        let intro_1 = prompt("Seleccione una opción \n 1. Ver boleta \n 2. Pagar cuenta");
        if (intro_1 == 1) {
            alert("Haga clic aquí para descargar su boleta.");
        } else if (intro_1 == 2) {
            alert("Usted está siendo transferido. Espere por favor...");
        } else {
            alert("Debe ingresar una opción válida!")
        }

    } else if (intro == 2) {
        let intro_2 = prompt("Seleccione una opción \n 1. Problemas con la señal \n 2. Problemas con las llamadas");
        var respuesta_2 = prompt("A continuación escriba su solicitud");
        prompt("Estimado usuario, su solicitud: '" + respuesta_2 + "' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.")

    } else if (intro == 3) {
        let intro_3 = prompt("Seleccione una opción \n 1. ¡Mentel tiene una oferta comercial de acuerdo a tus necesidades! \n  Para conocer más información y ser asesorado personalmente por un ejecutivo, escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'");
        if (intro_3 == "SI" || intro_3 == "si") {
                alert("Un ejecutivo contactará con usted");
        } else if (intro_3 == "NO" || intro_3 == "no") {
                alert("Gracias por preferir nuestros servicios");
        } else {
                alert("Debe ingresar una opción válida!")
        };

    } else if (intro == 4) {
        let intro_4 = prompt("A continuación escriba su consulta");
        alert("Estimado usuario, su consulta: '" + intro_4 + "' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.")
    } else {
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
    }

}


menu();