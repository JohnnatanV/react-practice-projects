import { useState } from "react";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const title = "Meme Generator en ReactJS";
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("aliens");

  const changeLinea1 = (e) => setLinea1(e.target.value);
  const changeLinea2 = (e) => setLinea2(e.target.value);
  const changeImagen = (e) => setImagen(e.target.value);
  const onClickBtnExport = (e) => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      let img = canvas.toDataURL("image/png");

      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      {/* Select picker de memes */}
      <select onChange={changeImagen}>
        <option value="aliens">Giorgio</option>
        <option value="cry">First World Problems</option>
        <option value="doggie">Doggie</option>
        <option value="fire">Niña en llamas</option>
        <option value="fry">Fry - Futurama</option>
        <option value="grandma">Grandma</option>
        <option value="if">Just if...</option>
        <option value="leo-1">Leonardo meme 1</option>
        <option value="leo-2">Leonardo meme 2</option>
        <option value="simple">Is simple...</option>
        <option value="smart-guy">Think about it</option>
        <option value="success-kid">Succes Kid</option>
        <option value="toys">Toys Everywhere</option>
        <option value="you-guys">You guys...</option>
      </select>
      <br />
      {/* Input text - primer linea*/}
      <input onChange={changeLinea1} type="text" placeholder="Linea 1" /> <br />
      {/* Input text - segunda linea*/}
      <input onChange={changeLinea2} type="text" placeholder="Linea 2" /> <br />
      {/* Render */}
      <div className="meme" id="meme">
        <span className="meme-1">{linea1}</span>
        <span className="meme-2">{linea2}</span>
        <img src={`/img/${imagen}.png`} alt="" />
      </div>
      {/* Boton exportar */}
      <button onClick={onClickBtnExport}>Exportar</button>
    </div>
  );
}

export default App;
