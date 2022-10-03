var btn = document.getElementById("btn_submit");
var Email_Warning = document.getElementById("EmailWarn");
let temp = [];
let cont = 0;
let key = '';

if (localStorage.key(0)) {
  for (let index = 0; index < localStorage.length; index++) {
    if ((localStorage.key(index) != "info") && (localStorage.key(index) != "recent-image")) {
      cont = parseInt(localStorage.length);
      console.log(localStorage.length + " " + cont);
    }

  }
}


class user {
  Name = "";
  Email = "";
  Phone = "";
  User_password = "";
  static total = 0;
  id = 0;
  constructor(Name, Phone, Email, User_password) {
    this.Name = Name.toUpperCase();
    this.Phone = Phone;
    this.Email = Email.toLowerCase();
    this.User_password = User_password;
    this.id = user.total;
    user.total++;
  }//constructor

}


if (localStorage.key(0)) {
  for (let index = 0; index < localStorage.length; index++) {
    if ((localStorage.key(index) != "info") && (localStorage.key(index) != "recent-image")) {
      if (localStorage.length >= 0) {
        let name = '';
        for (let index = 0; index < localStorage.length; index++) {
          temp[index] = JSON.parse(localStorage.getItem(localStorage.key(index)));
          name = console.log(temp[index]);
          console.log(localStorage.key(index));
          name = new user(temp[index].Name, temp[index].Phone, temp[index].Email, temp[index].User_password);

        }

      }
    }

  }
}



btn.addEventListener("click", function (e) {
  e.preventDefault();
  let password1 = document.getElementById("inputPassword1").value;
  let password2 = document.getElementById("inputPassword2").value;
  let FullName = document.getElementById("inputName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let Email = document.getElementById("inputEmail").value;



  // parte de validacion de datos 
  if (!ValidateName(FullName)) {  //if de validacion de nombre
    document.getElementById("nameAlert").style.display = "block";
    document.getElementById("nameAlert").innerHTML = `<div class="alert alert-danger" role="alert">
    ¡Ingrese su nombre completo por favor!
  </div>`;
    console.log(document.getElementById("inputName").style.borderColor);
    document.getElementById("inputName").style.borderColor = "#FF0000";
    setTimeout(() => { }, (10 * 1000)); //me quede aqui mucho ojo
  }//fin de if validación de nombre 

  // Código de valores por default por el evento change 
  document.getElementById("inputName").addEventListener("change", function () {
    document.getElementById("inputName").style.borderColor = "";
    document.getElementById("nameAlert").style.display = "none";
  })




  if (!(ValidateNumber(phoneNumber))) {// if de validacion para numero de telefono 
    document.getElementById("PhoneAlert").style.display = "block";
    document.getElementById("PhoneAlert").innerHTML = `<div class="alert alert-danger" role="alert">
    ¡Ingrese su número de teléfono a 10 dígitos sin espacios!
  </div>`;
    console.log("por favor ingrese su numero de telefono a 10 digitos");
    console.log(document.getElementById("phoneNumber").style.borderColor);
    document.getElementById("phoneNumber").style.borderColor = "#FF0000";
    usr_number = 0;


  }//fin de if validación de número de teléfono.
  //Código de des alerta por mal ingreso de dato de número de teléfono
  document.getElementById("phoneNumber").addEventListener("change", function () {
    document.getElementById("phoneNumber").style.borderColor = "";
    document.getElementById("PhoneAlert").style.display = "none";
  })




  if (!ValidateEmail(Email)) {   //validación del correo electrónico 
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
  })


  //validación de contraseñas 

  if (!ValidatePasswords(password1, password2)) {
    document.getElementById("passwordAlert").style.display = "block";
    document.getElementById("passwordAlert").innerHTML = `<div class="alert alert-danger" role="alert">
    Las contraseñas deben coincidir y debe contener al menos 8 caracteres alfanumérico
  </div>`;
    document.getElementById("inputPassword1").style.borderColor = "#FF0000";
    document.getElementById("inputPassword2").style.borderColor = "#FF0000";

  }
  document.getElementById("inputPassword1").addEventListener("change", function () {
    document.getElementById("inputPassword2").style.borderColor = "";
    document.getElementById("inputPassword1").style.borderColor = "";
    document.getElementById("passwordAlert").style.display = "none";

  })
  document.getElementById("inputPassword2").addEventListener("change", function () {
    document.getElementById("inputPassword2").style.borderColor = "";
    document.getElementById("inputPassword1").style.borderColor = "";
    document.getElementById("passwordAlert").style.display = "none";

  })

  if (((ValidateName(FullName))) && ((ValidateNumber(phoneNumber))) && ((ValidateEmail(Email))) && ((ValidatePasswords(password1, password2)))) {
    console.log("se ha creado una clase con nombre : " + FullName);
    key = FullName.split(' ');

    localStorage.setItem(key[0], JSON.stringify(key[0] = new user(FullName, phoneNumber, Email, password1)));
    cont++;
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Tus datos han sido guardados exitosamente¡',
      showConfirmButton: false,
      timer: 1500
    })
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputName").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("inputPassword2").value = "";
    document.getElementById("inputPassword1").value = "";

  }





});


function ValidateEmail(usr_email) {


  if (localStorage.length >= 0) {
    for (let index = 0; index < localStorage.length; index++) {
      if ((localStorage.key(index) != "info") && (localStorage.key(index) != "recent-image")) {
        temp[index] = JSON.parse(localStorage.getItem(localStorage.key(index)));
        if ((temp[index].Email) === usr_email) {
          console.log("el correo electronico ya esta registrada, desea iniciar sesion?")
          break;
        }

      }
    }
  }
  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)[.]([a-z]+)(.[a-z]+)?$/;
  if (usr_email.match(regx)) {

    console.log("valid email ")

    return true;
  } else {
    console.log("invalid email ")
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

};

function ValidatePasswords(password1, password2) {

  var regx = /^([a-zA-Z0-9]+)([a-zA-Z0-9])?$/;

  if ((password1.match(regx)) && (password1.length >= 8) && (password2 === password1) && (password2.match(regx)) && (password2.length >= 8)) {
    console.log(password1 + " " + password2 + "   COINCIDEN");
    return true;

  } else {

    console.log(password1 + " " + password2 + " no coinciden");
    return false;

  }

};