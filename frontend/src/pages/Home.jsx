import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

export default function Home() {
  return (
    <div>
      <section
        style={{
          minHeight: "80vh",
          padding: "48px 24px",
          backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 800 }}>
          <h1 style={{ fontSize: 72, marginBottom: 16 }}>
            Circuito Terê Verde
          </h1>

          <p style={{ fontSize: 28, marginBottom: 32 }}>
            Explore parques, trilhas, eventos e a biodiversidade de Teresópolis.
          </p>

          <Link to="/parques">
            <button
  style={{
    padding: "16px 32px",
    borderRadius: 999,
    border: "none",
    background: "#2F6B3D",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,.25)",
  }}
>
  Explorar agora
</button>
          </Link>
        </div>
      </section>

      <section
        style={{
          padding: "48px 24px",
          background: "#F6F8F5",
          color: "#1f2933",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 32 }}>
          O que você encontra aqui?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          <Card titulo="🌲 Parques" texto="Conheça as unidades de conservação de Teresópolis." link="/parques" />
          <Card titulo="🥾 Trilhas" texto="Veja trilhas abertas, dificuldade e tempo estimado." link="/trilhas" />
          <Card titulo="📅 Eventos" texto="Acompanhe eventos ambientais e atividades guiadas." link="/eventos" />
          <Card titulo="🦜 Biodiversidade" texto="Descubra espécies da fauna e flora local." link="/biodiversidade" />
        </div>
      </section>
    </div>
  );
}

function Card({ titulo, texto, link }) {
  return (
    <Link
      to={link}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 24,
          borderRadius: 16,
          boxShadow: "0 4px 16px rgba(0,0,0,.08)",
          minHeight: 160,
        }}
      >
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>
    </Link>
  );
}