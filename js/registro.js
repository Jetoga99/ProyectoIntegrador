var btn = document.getElementById("btn");

var cont = 0;

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let p1 = document.getElementById("inputPassword1").value;
  var p2 = document.getElementById("inputPassword2").value;

  /*while (!espacios && cont < p1.length) {
      if (p1.charAt(cont) == " ") espacios = true;
      cont++;
    }*/

  if (!document.getElementById("inputPassword1").value) {
    alert("La contraseña no puede contener espacios en blanco");
    console.log(p1);
  } else {
    console.log("false");
    console.log(p1.length);
  }

  if (!document.getElementById("inputPassword2").value) {
    alert("Favor de confirmar contraseña");
    console.log(p2.length);
  } else {
    console.log("false");
    console.log(p2.length);
  }

  if (p1 != p2) {
    alert("Las passwords deben de coincidir");
    console.log(p1 + "  " + "vs " + "  " + p2);
  } else {
    alert("Todo esta correcto");
  }
});
