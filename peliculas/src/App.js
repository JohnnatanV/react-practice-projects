import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListadoPeliculas from "./views/ListadoPeliculas";
import Blog from "./views/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListadoPeliculas />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
