import { useState } from "react";
import "./App.css";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import Pelicula from "./Pelicula";
import PeliculasJson from "./peliculas.json";

function App() {
  const [paginaActual, setPaginaActual] = useState(1);

  let peliculas = PeliculasJson;
  const TOTAL_POR_PAGINA = 5;

  peliculas = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual + TOTAL_POR_PAGINA
  );
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
        total={4}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      />
    </PageWrapper>
  );
}
export default App;
