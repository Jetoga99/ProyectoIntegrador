let btnCot = document.getElementById("btnCotiza");//aqui insertamos el id del boton cotizar
btnCot.addEventListener("click", function (e) {//aqui creamos unn evento para el boton indicandolo dentro de la funcion con la letra e
    e.preventDefault();//aqui se cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá. 
    let iva = document.getElementById("checkIVA").checked;
    let textCard = document.getElementById("textCard");//aqui declaramos el cuadro del texto 
    let servicio = document.getElementById("inputServ");//aqui declaramos las selecciones del servcio
    console.log(iva);//este log lo usamos para verificar si el checkbox del iva esta seleccionado(true) o no(false)
    console.log(servicio.selectedIndex);//el selectedIndex es para ver que opcion del select fue escogida.
    console.log(servicio.options[servicio.selectedIndex].value);//muestra el valor que contiene cada uno de nuestros option */
    textCard.innerHTML = "$" + cotizar(iva, servicio.selectedIndex).toFixed(2) + " Pesos";//aqui Mandamos a imprimir en el textCard el valor de y el tofixed designa el numero maximo de decimales 
});

function cotizar(iva, serv) {//aqui creamos la funcion para cotizar
    let result = 0;
    if (serv == 1) {//Pagina Web
        result += 15000;//aqui se agrega el valor de la selection 1
    } else if (serv == 2) {//app movil
        result += 18000;//aqui se agrega el valor de la selection 2
    } else if (serv == 3) {//base de datos
        result += 8500;//aqui se agrega el valor de la selection 3
    } else if (serv == 4) {//servicio tecnico pagina web
        result += 9000;//aqui se agrega el valor de la selection 4
    } else if (serv == 5) {//servicio tecnico app movil
        result += 12000;//aqui se agrega el valor de la selection 5
    } else if (serv == 6) {//servicio tecnico base de datos
        result += 5000;//aqui se agrega el valor de la selection 6
    }//else if
    if (iva) {//checkIVA
        result *= 1.16;//aqui se suma el IVA
    }//if iva
    return result;
}//cotizar