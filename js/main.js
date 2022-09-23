/* 
let navbar1 = document.getElementById("nav");
window.addEventListener("load", function (e) {
  navbar1.innerHTML = `<nav id="navbar" class="navbar">
  <a href="#">
    <img src="../src/Logo.png" width="80" class= alt="">
  </a>
  <ul>
    <li><a class="nav-link active" href="/Index.html">Inicio</a></li>
    <li><a class="nav-link" href="./pages/Conocenos.html">Quienes Somos</a></li>
    <li><a class="nav-link" href="./pages/Lista_de_items.html">Servicios</a></li>
    <li><a class="nav-link" href="./pages/contacto.html">Contacto</a></li>
    <li><button type="button" class="btn btn-success"> Registarse </button></li>
    <li><button type="button" class="btn btn-success"> Iniciar Sesión </button></li>
  </ul>
  <i class="bi bi-list mobile-nav-toggle"></i>


</nav>  `;
}); */


(function () {
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

})()



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