import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#2F6B3D",
        padding: "16px 32px",
        display: "flex",
        gap: 24,
        alignItems: "center",
      }}
    >
      <Link style={linkStyle} to="/">
        Início
      </Link>

      <Link style={linkStyle} to="/parques">
        Parques
      </Link>

      <Link style={linkStyle} to="/trilhas">
        Trilhas
      </Link>

      <Link style={linkStyle} to="/eventos">
        Eventos
      </Link>

      <Link style={linkStyle} to="/biodiversidade">
        Biodiversidade
      </Link>

      <Link style={linkStyle} to="/login">
        Admin
      </Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};