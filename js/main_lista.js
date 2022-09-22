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