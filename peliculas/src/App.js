import { useState } from "react";

import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import Pelicula from "./Pelicula";
import PeliculasJson from "./peliculas.json";
import "./App.css";

function App() {
  const [paginaActual, setPaginaActual] = useState(1);

  let peliculas = PeliculasJson;
  const TOTAL_POR_PAGINA = 4;

  let buscarPeliculas = async () => {
    let url = `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://lucasmoy.dev/data/react/peliculas.json"
    )}`;

    let result = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "aplication/json",
        "Content-type": "aplication/json",
      },
    }); // .then(response => {})

    let content = await result.json();
    console.log(content.contents);
  };

  buscarPeliculas();

  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  };

  const getTotalPaginas = () => {
    let totalDePeliculas = PeliculasJson.length;
    return Math.ceil(totalDePeliculas / TOTAL_POR_PAGINA);
  };

  cargarPeliculas();

  return (
    <PageWrapper>
      {peliculas.map((pelicula) => (
        <Pelicula
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          img={pelicula.img}
          duracion={pelicula.duracion}
          fecha={pelicula.fecha}
          director={pelicula.director}
          actores={pelicula.actores}
        >
          {pelicula.descripcion}
        </Pelicula>
      ))}
      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      />
    </PageWrapper>
  );
}
export default App;
