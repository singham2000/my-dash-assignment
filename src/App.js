import "./sass/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Datavisual from "./components/datavisual";
import Home from "./components/home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graph" element={<Datavisual />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
