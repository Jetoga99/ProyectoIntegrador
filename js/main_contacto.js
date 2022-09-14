let btnQuote = document.getElementById("submit_btn");
let key = "informacion";
let cont = 1;
let usuarios = [];

let flag = true;


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
    let mensaje = document.getElementById("message").value;

    // cardText.innerHTML = quote(hour, rate, iva, extras.selectedIndex).toFixed(2);//
    if (!ValidateName(usr_name)) {
        console.log("por favor ingrese un nombre valido");
        console.log(document.getElementById("Nombre").style.borderColor);
        document.getElementById("Nombre").style.borderColor = "#FF0000";
        usr_name = "";
        document.getElementById("Nombre").value = usr_name;
        flag = false;
    } else {

        document.getElementById("Nombre").style.borderColor = "";
        flag = true;
    }


    if (!ValidateNumber(usr_number)) {
        console.log("por favor ingrese su numero de telefono a 10 digitos");
        console.log(document.getElementById("Number").style.borderColor);
        document.getElementById("Number").style.borderColor = "#FF0000";
        usr_number = 0;
        flag = false;

    } else {
        document.getElementById("Number").value = usr_number;
        document.getElementById("Number").style.borderColor = "";
        flag = true
    }

    if (!ValidateEmail(usr_email)) {
        console.log(document.getElementById("email").style.borderColor);
        document.getElementById("email").style.borderColor = "#FF0000";
        flag = false
    } else {
        document.getElementById("email").style.borderColor = "";
        flag = true
    }



    if (!(document.getElementById("message").value)) {
        console.log("por favor ingrese un mensaje!");
        console.log(document.getElementById("message").style.borderColor);
        document.getElementById("message").style.borderColor = "#FF0000";
        flag = false;
    } else {
        document.getElementById("message").style.borderColor = "";
        flag = true
    }
    console.log(flag);

    if (flag) {

        let new_user = { "usr_id": cont, "usr_fullName": usr_name, "usr_email": usr_email, "usr_phone": usr_number, "usr_message": mensaje };
        cont++;
        usuarios.push(new_user);
        console.log(usuarios);
        localStorage.setItem(key, JSON.stringify(usuarios));


        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "itehuamarcial97@gmail.com",
            Password: "BDF47B18E9F867EA9AEE31F950591EB846AE",
            To: 'itehuamarcial97@gmail.com',
            From: usr_email,
            Subject: usr_name,
            Body: mensaje
        }).then(
            message => alert("¡Tu información se ha enviado con éxito, espero pronto nuestra respuesta!")
        );
        usr_email = "";
        document.getElementById("email").value = usr_email;
        usr_name = "";
        document.getElementById("Nombre").value = usr_name;
        usr_number = "";
        document.getElementById("Number").value = usr_number;
        mensaje = "";
        document.getElementById("message").value = mensaje;
    }



});



function ValidateEmail(usr_email) {
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)[.]([a-z]+)(.[a-z]+)?$/;
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
    let regx = /^([a-zA-Z ]+)([a-zA-Z ])?$/;
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

}
