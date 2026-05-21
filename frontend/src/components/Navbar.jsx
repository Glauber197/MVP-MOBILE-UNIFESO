import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#2F6B3D",
        padding: "16px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Início
      </Link>

      <Link
        to="/parques"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Parques
      </Link>

      <Link
        to="/trilhas"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Trilhas
      </Link>

      <Link
        to="/eventos"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Eventos
      </Link>

      <Link
        to="/login"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Admin
      </Link>
    </nav>
  );
}