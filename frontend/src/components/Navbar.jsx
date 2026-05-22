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
        <a
  href="http://127.0.0.1:8000/admin"
  target="_blank"
  rel="noreferrer"
>
  Admin
</a>
      </nav>
    </header>
  );
}