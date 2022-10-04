let mainProds = document.getElementById("list-items")

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
        /* console.log(producto.id,producto.title) */
        mainProds.innerHTML += `<div  card" style="width: 18rem;">
        <img class="card-img-top" src="${producto.img}" alt="${producto.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${producto.name}</h5>
          <p class="card-text">${producto.description.slice(0, 30)}...</p>
        
      <button type="button" class="btn btn-dark mt-auto" data-toggle="modal" data-target="#modal_${producto.id}">
      Ver más
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="modal_${producto.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${producto.name}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          ${producto.description}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
    </div>
      </div>`;

      });
    }).catch((error) => {
      console.error("Problema con formato de la respuesta" + error);
    });
  }).catch(error => {
    console.log("Error en la solicitud" + error)
  });
}