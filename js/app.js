const movies = {

    obtenerTodos: () => {
      //creamos una cosntante que tiene la URL de nuestra Api
      const urlAPI = 'https://pracprof2023-af4f.restdb.io/rest/peliculas?apikey=6467b09a0b60fc42f4e197fa';
      //creamos una constante que tendra una referencia directa con el DIV contenedor peliculas y nos permitira cargar de contenidos 
      const divContenedorPeliculas = document.querySelector('#contenedorPeliculas');
      //creamos una variable vacia que contendra todo el codigo html que vamos a insertar 
      let contenidoHTML = '';
      //obtenemos las peliculas en formato json 
      fetch(urlAPI)
        .then(res => res.json())
        .then((datos) => {
          //enviamos a la consola de javascrip lo obetenido 
          //console.log(datos[0])
          //recorremos la coleccion de peliculas obtenienidas, obteniendo una referencia para cada una de las constantes "peli", por cada iteración 
          for (const peli of datos) {
            contenidoHTML += `
              <div class="col-md-4">
                  <a href="${peli.trailer_url}" target="_blank">
                    <img src="${peli.portada_url}" alt="${peli.nombre}" class="img-thumbnail">
                  </a>
                  <details class="title"><summary>${peli.nombre}</summary>
                  <p>${peli.sinopsis}</p>
                  <a href="#" onClick="movies.eliminarPelicula('${peli._id}','${peli.nombre}');">Eliminar</a>
                  </details>
              </div>`;
          }
          divContenedorPeliculas.innerHTML = contenidoHTML;
        })
    },
    agregarNuevaPelicula:() => {
      const urlAPI = 'https://pracprof2023-af4f.restdb.io/rest/peliculas?apikey=6467b09a0b60fc42f4e197fa';
      
      const txtNombre=document.getElementById
      ("#txtNombre")
      const txtGenero=document.getElementById
      ("#txtGenero")
      const txtDuracion=document.getElementById
      ("#txtDuracion")
      const txtTrailer_url=document.getElementById
      ("#txtTrailerURL")
      const txtSinopsis=document.getElementById
      ("#txtSinopsis")
      const txtPortada_url=document.getElementById
      ("#txtPortadaURL")
      const nuevaPeli = {"nombre": txtNombre,"genero":txtGenero,"duracion":txtDuracion,"trailer_url": txtTrailer_url,"sinopsis":txtSinopsis,"portada_url":txtPortada_url};
      fetch(urlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevaPeli)
      })  
      .then(response => {
        return movies.obtenerTodos();
      });
    },
    eliminarPelicula:(idPeliculaBorrar,nombrePeliculaBorrar) =>{
      //alert(`Borrando la pelicula: ${nombrePeliculaBorrar}`);
      Swal.fire({
        title: `Esta seguro que desea eliminar a ${nombrePeliculaBorrar}?`,
        text: "¡No se podrás revertir esto!",
        icon: 'Advertencia',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si quiero hacerlo!'
      }).then((result) => {
        if (result.isConfirmed) {
          const urlAPI = `https://pracprof2023-af4f.restdb.io/rest/peliculas/${idPeliculaBorrar}?apikey=6467b09a0b60fc42f4e197fa`
          fetch(urlAPI, {
            method: 'DELETE'
          })
          .then(response => {
            return movies.obtenerTodos();
          });
          Swal.fire(
            'Borrado!',
            `La pelicula: ${nombrePeliculaBorrar} fue borrada.`,
            'Exito'
          )
        }
      })
    }
  };
  movies.obtenerTodos();
