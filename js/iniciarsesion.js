

var btn = document.getElementById("btn_submit");
var Email_Warning = document.getElementById("EmailWarn");



let emails = [];
let passwords = [];

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let email = document.getElementById("inputEmail").value;
    let pw = document.getElementById("inputPassword1").value;
    if (!validateEmail(email)) {   //validación del correo electrónico 
        Email_Warning.style.display = "block";
        Email_Warning.innerHTML = `<div class="alert alert-danger" role="alert">
        ¡Ingrese un correo electrónico valido ejemplo (nombre@dominio.com)!
      </div>`;
        console.log(document.getElementById("inputEmail").style.borderColor);
        document.getElementById("inputEmail").style.borderColor = "#FF0000";

    }
    document.getElementById("inputEmail").addEventListener("change", function () {
        document.getElementById("inputEmail").style.borderColor = "";
        Email_Warning.style.display = "none";
    });

    if (!ValidatePassword(pw)) {
        document.getElementById("passwordAlert").style.display = "block";
        document.getElementById("passwordAlert").innerHTML = `<div class="alert alert-danger" role="alert">
        Las contraseñas deben coincidir y debe contener al menos 8 caracteres alfanumérico, sin espacios.
      </div>`;
        document.getElementById("inputPassword1").style.borderColor = "#FF0000";

    }
    document.getElementById("inputPassword1").addEventListener("change", function () {
        document.getElementById("inputPassword1").style.borderColor = "";
        document.getElementById("passwordAlert").style.display = "none";

    });


    if (validateEmail(email) && (ValidatePassword(pw))) {
        for (var i = 0, len = localStorage.length; i < len; ++i) {
            emails.push(JSON.parse(localStorage.getItem(localStorage.key(0)))["Email"]);
            passwords.push(JSON.parse(localStorage.getItem(localStorage.key(0)))["User_password"]);
        }
        console.log((emails.indexOf(email) == passwords.indexOf(pw)) && (emails.includes(email) && passwords.includes(pw)));


        if ((emails.indexOf(email) == passwords.indexOf(pw)) && (emails.includes(email) && passwords.includes(pw))) {
            is = document.getElementById("iniciar");
            reg = document.getElementById("registrate");
            console.log("here")
            is.style.display = "none"
            reg.style.display = "none";
            window.location.href = "../index.html"
        }

    }
});

function validateEmail(valor) {


    // Define our regular expression.
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if (validEmail.test(valor) && (valor.length > 0)) {
        return true;
    } else {
        return false;
    }
}
function ValidatePassword(valor) {

    var regx = /^([a-zA-Z0-9]+)([a-zA-Z0-9])?$/;

    if ((valor.match(regx))) {
        return true;

    } else {

        return false;

    }

};