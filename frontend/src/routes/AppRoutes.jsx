import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "../pages/Home";
import Parques from "../pages/Parques";
import Trilhas from "../pages/Trilhas";
import Eventos from "../pages/Eventos";
import DetalhesParque from "../pages/DetalhesParque";
import Biodiversidade from "../pages/Biodiversidade";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parques" element={<Parques />} />
        <Route path="/parques/:id" element={<DetalhesParque />} />
        <Route path="/trilhas" element={<Trilhas />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/biodiversidade" element={<Biodiversidade />} />
      </Routes>
    </BrowserRouter>
  );
}