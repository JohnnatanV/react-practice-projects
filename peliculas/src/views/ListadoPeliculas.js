import { useEffect, useState } from "react";

import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import Pelicula from "./Pelicula";

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_X_PAGINA = 4;

  useEffect(() => {
    buscarPeliculas();
  }, []);

  let buscarPeliculas = async () => {
    let url =
      "https://thingproxy.freeboard.io/fetch/https://lucasmoy.dev/data/react/peliculas.json";

    let result = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "aplication/json",
        "Content-type": "aplication/json",
      },
    }); //.then((response) => {}

    let content = await result.json();
    setPeliculas(content);
  };

  const getTotalPaginas = () => {
    let totalDePeliculas = peliculas.length;
    return Math.ceil(totalDePeliculas / TOTAL_X_PAGINA);
  };

  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_X_PAGINA,
    paginaActual * TOTAL_X_PAGINA
  );

  return (
    <PageWrapper>
      {peliculasPorPagina.map((pelicula) => (
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
export default ListadoPeliculas;
