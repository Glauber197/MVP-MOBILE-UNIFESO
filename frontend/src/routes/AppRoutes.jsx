import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "../pages/Home";
import Parques from "../pages/Parques";

function Trilhas() {
  return <h1>Trilhas</h1>;
}

function Eventos() {
  return <h1>Eventos</h1>;
}

function Login() {
  return <h1>Login</h1>;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/parques"
          element={<Parques />}
        />

        <Route
          path="/trilhas"
          element={<Trilhas />}
        />

        <Route
          path="/eventos"
          element={<Eventos />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}