function addItem(item) /* {
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="' + item.img + '" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.name + '</h5>\n' +
        '        <p class="card-text">' + item.description + '</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
} */ {
    const itemHTML = '<div class="col-lg-4 col-md-6 d-flex align-items-stretch">\n' +
        '<div class="card">\n' +
        '<img src=' + item.img + ' class="card-img-top" alt="...">\n' +
        '<div class="card-body">\n' +
        ' <h4 class="card-title">' + item.name + '</h4>\n' +
        '<p class="card-text">' + item.description + '</p>\n' +
        '<a href="/index.html" class="stretched-link"></a>\n' +
        '</div>\n' +
        '</div>\n' +
        '</div>';

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}



window.addEventListener("load", function () {
    getData();
});

const getData = () => {
    let promesa = fetch("/js/publicaciones.json", {
        method: "GET"
    });
    promesa.then((response) => {
        response.json().then((data) => {
            console.log(data);
            console.log(typeof (data));
            data.forEach(producto => {
                addItem(producto)
            });
            /* console.log(data.id,data.title);
            div.innerHTML = data.title; */
        }).catch((error) => {
            console.error("Problema con formato de la respuesta" + error);
        });
    }).catch(error => {
        console.log("Error en la solicitud" + error)
    });
}
let navbar = document.getElementById("nav");
window.addEventListener("load", function (e) {
    navbar.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class='container'>
        <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">
            <img src="../src/Logo.png" width="80" class="d-inline-block align-top" alt="">
          </a>
        </nav>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link navBar" href="../Index.html">Inicio <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link navBar" href="./Conocenos.html">Quienes Somos <span
                  class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="./Lista_de_items.html">Servicios <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="./contacto.html">Contacto <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
        <ol class="nav-item active">
          <button type="button" class="btn btn-success">Iniciar Sesión</button>
        </ol>
      </div >
    </nav > `;
});