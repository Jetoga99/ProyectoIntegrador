
let navbar1 = document.getElementById("nav");
let footer1=document.getElementsByTagName("footer")[0];
window.addEventListener("load", function (e) {
  navbar1.innerHTML = `
    <nav id="navbar" class="navbar" style="justify-content: center;">

  <ul>
    <li><a href="#">
        <img src="../src/Logo.png" width="80" class=alt="">
      </a></li>
    <li><a class="nav-link active" href="/Index.html">Inicio</a></li>
    <li><a class="nav-link" href="../pages/Conocenos.html" style="text-align:center;">Acerca de </br>Nosotros</a></li>
    <li><a class="nav-link" href="../pages/Lista_de_items.html">Servicios</a></li>
    <li><a class="nav-link" href="../pages/contacto.html">Contacto</a></li>
    <li><button type="button" class="btn btn-dark" style=" font-family:'Poppins', sans-serif;"> Registarse
            </button></li>
          <li><button type=" button" class="btn btn-dark"
              style="background:#C9C9C9;color: black; font-family:'Poppins', sans-serif;"> Iniciar
              Sesión </button></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>


</nav>`;


  footer1.innerHTML=`<div class="container">
  <div class="row">
    <div class="footer-col">
      <h4>Compañia </h4>
      <ul>
        <li><a href="#">Acerca de nosotros</a></li>
        <li><a href="#">Nuestros Servicios</a></li>
        <li><a href="#">Politicas de Privacidad</a></li>
        <li><a href="#">Subsiscribete</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Ayuda</h4>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Estado de solicitud</a></li>
        <li><a href="#">Feedback</a></li>
        <li><a href="#">Opciones de pago</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4></h4>
      <ul>
        <li><a href=""></a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Siguenos</h4>
      <div class="social-links">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>

      </div>
    </div>
  </div>
</div>`
});

window.onload=function navbarfunction() {
  "use strict";
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })
  on('click', '#navbar .nav-link', function (e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function () {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function () {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

};



/* 

<nav id="navbar" class="navbar">
  <ul>
    <li><a class="nav-link active" href="/index.html">Inicio</a></li>
    <li><a class="nav-link" href="#about">Acerca de Mí</a></li>
    <li><a class="nav-link" href="#blog">Blog</a></li>
    <li><a class="nav-link" href="#portfolio">Portafolio</a></li>
    <li><a class="nav-link" href="#workme">Trabaja Conmigo</a></li>
    <li><a class="nav-link" href="#contact">Contacto</a></li>
  </ul>
  <i class="bi bi-list mobile-nav-toggle"></i>
</nav> */