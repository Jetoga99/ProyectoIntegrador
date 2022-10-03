let submit_btn = document.getElementById("submit_btn");
let alerta = document.getElementById("alerta");
let producto = document.getElementById("producto");
let descripcion = document.getElementById("descripcion");
let imagen = document.querySelector("#file");
let cont = 1;


submit_btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(imagen.value);
    if (validar(producto)) {//validacion de input producto
        if (validar(descripcion)) {//validacion de input descripcion 
            if (imagen.value != 0) {//validacion de imagen
                //Crea el objeto servicio con id, nombre y descripcion
                let servicio = { "id": 0, "name": producto.value, "description": descripcion.value }
                //comvierte el objeto en json y lo guarda en el localstorage
                localStorage.setItem("info", JSON.stringify(servicio));
                //cambia el texto de la alerta 
                //cambia la clase de la alerta de alert-danger a alert-success
                alerta.innerText = "Servicio agregado";
                alerta.classList.remove("alert-danger");
                alerta.classList.add("alert-success");
            } else {
                alerta.innerText = "Error - No hay imagen"
            }//else imagen
        } else {
            alerta.innerText = "Error en la descripción del producto"
        }//else descripcion 
    } else {
        alerta.innerText = "Error en el nombre del producto."
    }//else prodcuto

    //muestra de alerta por 5 segundos
    alerta.style.display = "block";
    setTimeout(() => {
        alerta.style.display = "none";
    }, 5000);
});


//alidacion de inputs | Verificando que no esten vacios y que tengan al menos 5 letras
function validar(campo) {
    if (campo.value.length == 0 || campo.value.length < 5) {
        //Si el input es erroneo mandando el foco al input
        campo.focus();
        //Agregando clase danger a la alerta
        alerta.classList.add("alert-danger");
        return false;
    } else {
        return true;
    }

};


//Imagen agregada a localStorage
imagen.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        //console.log(reader.result);
        localStorage.setItem("recent-image", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});

//mostrando imagen en pantalla al cargarla
const $form = document.querySelector('#form')

const $image = document.querySelector('#image')
const $file = document.querySelector('#file')
function renderImage(formData) {
    const file = formData.get('image')
    const image = URL.createObjectURL(file)
    $image.setAttribute('src', image)
}


$file.addEventListener('change', (event) => {
    const formData = new FormData($form)
    renderImage(formData)
})