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
                  <h3 class="title">${peli.nombre}
                  <a href="#" onClick="movies.eliminarPelicula();">Eliminar</a>
                  </h3>
              </div>`;
          }
          divContenedorPeliculas.innerHTML = contenidoHTML;
        })
    },
    agregarNuevaPelicula:() => {
      const urlAPI = 'https://pracprof2023-af4f.restdb.io/rest/peliculas?apikey=6467b09a0b60fc42f4e197fa';
      const nuevaPeli = {"nombre":"Guardianes de la Galaxia","genero":"Ciencia Ficción/Cine de SuperHéroes","duracion":122,"trailer_url":"hhttps://www.youtube.com/watch?v=qdIuXCfUKM8&pp=ygUgdHJhaWxlciBndWFyZGlhbmVzIGRlIGxhIGdhbGF4aWE%3D","sinopsis":"Un aventurero espacial se convierte en la presa de unos cazadores de tesoros después de robar el orbe de un villano traicionero. Cuando descubre su poder, debe hallar la forma de unir a unos rivales para salvar al universo.","portada_url":"https://es.web.img3.acsta.net/pictures/14/06/17/14/04/353959.jpg"};
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
    eliminarPelicula:() =>{
      alert("Probando Borrar");
    }
  };
  movies.obtenerTodos();