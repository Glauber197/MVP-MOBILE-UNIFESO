import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        🌿 Terê Verde
      </Link>

      <nav className="navbar-links">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/parques/2">Parques</NavLink>
        <NavLink to="/trilhas">Trilhas</NavLink>
        <NavLink to="/eventos">Eventos</NavLink>
        <NavLink to="/biodiversidade">Biodiversidade</NavLink>
        <NavLink to="/login">Admin</NavLink>
      </nav>
    </header>
  );
}