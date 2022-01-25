export default function Paginacion(props) {
  const getPaginas = () => {
    const resultado = [];
    for (let i = 0; i < props.total; i++) {
      let pagina = i + 1;
      resultado.push(
        <a
          onClick={() => props.onChange(pagina)}
          className={props.pagina === pagina ? "active" : ""}
          href="#"
        >
          {pagina}
        </a>
      );
    }
    return resultado;
  };

  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>
          Pagina {props.pagina} of {props.total}:
        </span>

        {/* {Array.apply(0, Array(props.total)).map(value => {
          <a className="active" href="#">1</a>
        })} */}

        {getPaginas()}

        <a href="#">
          <i className="ion-arrow-right-b"></i>
        </a>
      </div>
    </div>
  );
}
