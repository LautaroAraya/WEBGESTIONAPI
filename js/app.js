const movies = {
    render: () => {
      const urlAPI = 'https://pracprof2023-af4f.restdb.io/rest/peliculas?apikey=6467b09a0b60fc42f4e197fa';
      const container = document.querySelector('#contenedorPeliculas');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((datos) => {
          for (const peli of datos) {
            let trailer_url = peli.trailer_url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${trailer_url}" target="_blank">
                    <img src="${peli.portada_url}" alt="${peli.nombre}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${peli.nombre}</h3>
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    },
    agregarNuevaPelicula:() => {
      const urlAPI = 'https://pracprof2023-af4f.restdb.io/rest/peliculas?apikey=6467b09a0b60fc42f4e197fa';
      const nuevaPeli = {"nombre":"John Wick","genero":"Acción/Aventura/Suspenso","duracion":101,"trailer_url":"https://www.youtube.com/watch?v=C0BMx-qxsP4","sinopsis":"John Wick es una franquicia estadounidense de suspenso y acción neo-noir creada por Derek Kolstad y producidas por Lionsgate a través de Summit Entertainment. La franquicia esta centrada en John Wick, un ex asesino a sueldo que se ve obligado a regresar al inframundo criminal que había abandonado anteriormente","portada_url":"https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/john-wick-pacto-de-sangre/120113874-1-esl-ES/John-Wick-Pacto-de-sangre.png"};
      fetch(urlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevaPeli)
      })  
      .then(response => {
        return movies.render();
      });
    }
  };
  movies.render();