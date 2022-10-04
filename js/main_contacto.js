let btnQuote = document.getElementById("submit_btn");
const form = document.getElementById("subscribe");
const div_base = document.getElementsByClassName("input-group ");


let key = "informacion";
let cont = 1;
let usuarios = [];


if (localStorage.getItem("informacion")) {
    usuarios = JSON.parse(localStorage.getItem(key));
    usuarios.forEach((element) => {
        cont = element.usr_id;

    });
    console.log(cont);
    cont++;
    console.log(usuarios);
}



btnQuote.addEventListener("click", function (e) {  //comando de ejecucion de boton
    e.preventDefault();
    let usr_name = document.getElementById("Nombre").value;
    let usr_number = document.getElementById("Number").value;
    var usr_email = document.getElementById("email").value;
    let mensaje = document.getElementById("message_1").value;

    if (!ValidateName(usr_name)) {  //if de validacion de nombre
        document.getElementById("NameAlert").style.display = "block";
        document.getElementById("NameAlert").innerHTML = `<div class="alert alert-danger" role="alert">
        ¡Ingrese su nombre completo!
      </div>`;
        console.log(document.getElementById("NameAlert").style.borderColor);
        document.getElementById("NameAlert").style.borderColor = "#FF0000";

    }//fin de if validación de nombre 

    // Código de valores por default por el evento change 
    document.getElementById("Nombre").addEventListener("change", function () {
        document.getElementById("Nombre").style.borderColor = "";
        document.getElementById("NameAlert").style.display = "none";
    })

    //validacion de numero telefonico y correo electronico
    if (!(ValidateNumber(usr_number))) {// if de validacion para numero de telefono 
        document.getElementById("NumberAlert").style.display = "block";
        document.getElementById("NumberAlert").innerHTML = `<div class="alert alert-danger" role="alert">
    ¡Ingrese su número de teléfono a 10 dígitos sin espacios!
  </div>`;
        console.log("por favor ingrese su numero de telefono a 10 digitos");
        console.log(document.getElementById("Number").style.borderColor);
        document.getElementById("Number").style.borderColor = "#FF0000";
        usr_number = 0;


    }//fin de if validación de número de teléfono.
    //Código de des alerta por mal ingreso de dato de número de teléfono
    document.getElementById("Number").addEventListener("change", function () {
        document.getElementById("Number").style.borderColor = "";
        document.getElementById("NumberAlert").style.display = "none";
    })




    if (!ValidateEmail(usr_email)) {   //validación del correo electrónico 
        document.getElementById("EmailAlert").style.display = "block";
        document.getElementById("EmailAlert").innerHTML = `<div class="alert alert-danger" role="alert">
    ¡Ingrese un correo electrónico valido ejemplo (nombre@dominio.com)!
  </div>`;
        console.log(document.getElementById("email").style.borderColor);
        document.getElementById("email").style.borderColor = "#FF0000";

    }
    document.getElementById("email").addEventListener("change", function () {
        document.getElementById("email").style.borderColor = "";
        document.getElementById("EmailAlert").style.display = "none";
    })




    if (!(ValidateMessage(mensaje))) {
        document.getElementById("MessageAlert").style.display = "block";
        document.getElementById("MessageAlert").innerHTML = `<div class="alert alert-danger" role="alert">
    ¡comente sus dudas !
  </div>`;
        console.log(document.getElementById("message_1").style.borderColor);
        document.getElementById("message_1").style.borderColor = "#FF0000";
    }

    document.getElementById("message_1").addEventListener("change", function () {
        document.getElementById("message_1").style.borderColor = "";
        document.getElementById("MessageAlert").style.display = "none";
    })

    if (((ValidateMessage(mensaje))) && (ValidateEmail(usr_email)) && ((ValidateNumber(usr_number))) && (ValidateName(usr_name))) {

        let new_user = { "usr_id": cont, "usr_fullName": usr_name, "usr_email": usr_email, "usr_phone": usr_number, "usr_message": mensaje };
        cont++;
        usuarios.push(new_user);
        console.log(usuarios);
        form.submit();
        localStorage.setItem(key, JSON.stringify(usuarios));
        usr_email = "";
        document.getElementById("email").value = usr_email;
        usr_name = "";
        document.getElementById("Nombre").value = usr_name;
        usr_number = "";
        document.getElementById("Number").value = usr_number;
        mensaje = "";
        document.getElementById("message_1").value = mensaje;

    }



});




function ValidateMessage(Message) {
    var regx = /^([a-zA-Z0-9-.-_-+--]+)([ a-zA-Z0-9-.-_-+--]+)([ a-zA-Z0-9-.-_-+--]+)?$/;
    if (Message.match(regx)) {
        // alert("Valid email address!");
        console.log("message  ")

        return true;
    } else {
        console.log("invalid Message ")
        // alert("Invalid email address!");
        return false;

    }

}



function ValidateEmail(usr_email) {
    var regx = /^([a-zA-Z0-9-.-_]+)@([a-zA-Z0-9]+)[.]([a-z]+)(.[a-z]+)?$/;
    if (usr_email.match(regx)) {
        // alert("Valid email address!");
        console.log("valid email ")

        return true;
    } else {
        console.log("invalid email ")
        // alert("Invalid email address!");
        return false;

    }

}

function ValidateName(name) {
    let regx = /^([a-zA-Z]+)([a-zA-Z ]+)([a-zA-Z])?$/;
    if ((name.match(regx)) && (name.length >= 3)) {
        console.log("valid name")
        return true;

    } else {

        console.log("invalid name ")
        return false;

    }

}


function ValidateNumber(number) {

    let regx = /^([1-9-0]+)([1-9])?$/;


    if ((number.match(regx)) && (number.length == 10)) {
        console.log("valid number")

        return true;

    } else {

        console.log("ivalid number")
        return false;

    }

};