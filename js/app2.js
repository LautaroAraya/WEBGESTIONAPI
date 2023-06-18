const serie = {

  obtenerTodos: () => {
    //creamos una cosntante que tiene la URL de nuestra Api
    const urlAPI = 'https://pracprof2023-af4f.restdb.io/rest/serie?apikey=6467b09a0b60fc42f4e197fa';
    //
    //creamos una constante que tendra una referencia directa con el DIV contenedor peliculas y nos permitira cargar de contenidos 
    const divContenedorSerie = document.querySelector('#contenedorSerie');
    //creamos una variable vacia que contendra todo el codigo html que vamos a insertar 
    let contenidoHTML = '';
    //obtenemos las peliculas en formato json 
    fetch(urlAPI)
      .then(res => res.json())
      .then((datos) => {
        //enviamos a la consola de javascrip lo obetenido 
        //console.log(datos[0])
        //recorremos la coleccion de peliculas obtenienidas, obteniendo una referencia para cada una de las constantes "peli", por cada iteración 
        for (const serie of datos) {
          contenidoHTML += `
            <div>
                <a href="${serie.trailer_url}" target="_blank">
                  <img src="${serie.portada_url}" alt="${serie.nombre}" class="img-thumbnail">
                </a>
                <details class="title"><summary>${serie.nombre}</summary>
                <p>Sinopsis: ${serie.sinopsis}</p>
                <p>Temporadas: ${serie.temporadas}</p>
                <a href="#" onClick="serie.eliminarSerie('${serie._id}','${serie.nombre}');">Eliminar</a>
                </details>
            </div>`;
        }
        divContenedorSerie.innerHTML = contenidoHTML;
      })
  },
  agregarNuevaSerie:() => {

    const urlAPI = 'https://pracprof2023-af4f.restdb.io/rest/serie?apikey=6467b09a0b60fc42f4e197fa';
    
    const txtNombre=document.getElementById
    ("txtNombre");
    alert(`Agregando la serie: ${txtNombre.value}`);
    const txtGenero=document.getElementById
    ("txtGenero");
    const txtTemporadas=document.getElementById
    ("txtTemporadas");
    const txtTrailer_url=document.getElementById
    ("txtTrailer_url");
    const txtSinopsis=document.getElementById
    ("txtSinopsis");
    const txtPortada_url=document.getElementById
    ("txtPortadaURL");
    const nuevaSerie = {
      "nombre": txtNombre.value,
      "genero":txtGenero.value,
      "trailer_url": txtTrailer_Url.value,
      "sinopsis":txtSinopsis.value,
      "portada_url":txtPortada_Url.value,
      "temporadas":txtTemporadas.value
    };
    fetch(urlAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevaSerie)
    })  
    .then(response => {
      console.log(nuevaSerie);
      window.location.href="serie.html";
      //return movies.obtenerTodos();
    });
  },
  eliminarSerie:(idSerieBorrar,nombreSerieBorrar) =>{
    //alert(`Borrando la pelicula: ${nombrePeliculaBorrar}`);
    Swal.fire({
      title: `Esta seguro que desea eliminar a ${nombreSerieBorrar}?`,
      text: "¡No se podrás revertir esto!",
      icon: 'Advertencia',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si quiero hacerlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        const urlAPI =`https://pracprof2023-af4f.restdb.io/rest/serie/${idSerieBorrar}?apikey=6467b09a0b60fc42f4e197fa`
        fetch(urlAPI, {
          method: 'DELETE'
        })
        .then(response => {
          return serie.obtenerTodos();
        });
        Swal.fire(
          'Borrado!',
          `La Serie: ${nombreSerieBorrar} fue borrada.`,
          'Exito'
        )
      }
    })
  }
};
//movies.obtenerTodos();
