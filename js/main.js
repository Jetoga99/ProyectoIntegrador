let navbar = document.getElementById("nav");
window.addEventListener("load", function (e) {
  navbar.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class='container'>
        <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                    <img src="./src/Logo.png" width="80" class="d-inline-block align-top" alt="">
          </a>
        </nav>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link navBar-brand" href="./Index.html">Inicio <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link navBar" href="./pages/Conocenos.html">Quienes Somos <span
              class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="./pages/Lista_de_items.html">Servicios <span
              class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="./pages/contacto.html">Contacto <span class="sr-only">(current)</span></a>
        </li>
      </ul>
        </div>
        <ol class="nav-item active">
          <button type="button" class="btn btn-success">Iniciar Sesión</button>
        </ol>
      </div >
    </nav > `;
});