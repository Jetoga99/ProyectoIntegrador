let submit_btn = document.getElementById("submit_btn");
let alerta = document.getElementById("alerta");
let producto = document.getElementById("producto");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagen");
let cont = 1;

submit_btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(imagen.textContent);
    console.log(producto.value, descripcion.value);
    let servicio = { "id": 0, "name": producto.value, "img": "No imagen", "description": descripcion.value }
    localStorage.setItem("info", JSON.stringify(servicio));

    console.log(servicio);
    alerta.classList.remove("alert-danger");
    alerta.classList.add("alert-success")
    alerta.innerText = "Servivio agregado";
    alerta.style.display = "block";
    setTimeout(() => {
        alerta.style.display = "none";
    }, 5000);
});
producto.addEventListener("blur", validar);
descripcion.addEventListener("blur", validar);


function validar(e) {
    let campo = e.target;
    console.log(campo.value);
    if (campo.value.length == 0 || campo.value.length < 5) {
        campo.focus();
        alerta.classList.remove("alert-success");
        alerta.classList.add("alert-danger")
        alerta.innerText = "Dato no valido";
        alerta.style.display = "block";
        setTimeout(() => {
            alerta.style.display = "none";
        }, 3000)
        return false;
    } else {
        return true;
    }

};
document.querySelector("#archivo").addEventListener("change",function () {
    const reader = new archivoReader();

    reader.addEventListener("load", ()=>{
        localStorage.setItem("recebt-image", reader.result);
        });
        reader.readerAsDataUrl(this.files[0]);
    });
document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataUrl = localStorage.getItem("recent-image");
    if (recentImageDataUrl) {
        console.log("yes I'm here")

        document.querySelector("#imagen").setAttribute("src", recentImageDataUrl);
    }
});
