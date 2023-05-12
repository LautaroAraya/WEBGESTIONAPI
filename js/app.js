const Movies = {
    render: () => {
      const urlAPI = 'https://pracprof2023-af4f.restdb.io/rest/peliculas?apikey=11851071b7e2d5e690135e3dfd83482d68424';
      const container = document.querySelector('#contenedorPeliculas');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const peli of json.data.results) {
            let trailerurl = peli.trailer_url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${trailerurl}" target="_blank">
                    <img src="${peli.portada_url} alt="${peli.nombre}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${peli.nombre}</h3>
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  Movies.render();