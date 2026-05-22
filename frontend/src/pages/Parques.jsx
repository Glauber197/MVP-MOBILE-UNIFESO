import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Parques() {
  const [parques, setParques] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const resposta = await api.get("parques/");
        setParques(resposta.data);
      } catch (erro) {
        console.log(erro);
      }
    }

    carregar();
  }, []);

  return (
    <main className="page">
      <h1 className="page-title">🌿 Parques</h1>

      <section className="card-grid">
        {parques.map((parque) => (
          <article className="card" key={parque.id}>
            {parque.imagem && (
              <img
                src={
                  parque.imagem.startsWith("http")
                    ? parque.imagem
                    : `http://127.0.0.1:8000${parque.imagem}`
                }
                alt={parque.nome_display}
                style={{
                  width: "100%",
                  height: 240,
                  objectFit: "cover",
                  borderRadius: 14,
                  marginBottom: 20,
                }}
              />
            )}

            <h2>{parque.nome_display}</h2>

            <p>{parque.descricao_geral}</p>

            <p>
              <strong>Altitude:</strong> {parque.altitude_media} m
            </p>

            <p>
              <strong>Horário:</strong> {parque.horario_funcionamento}
            </p>

            <Link to={`/parques/${parque.id}`}>
              <button className="primary-button">Explorar</button>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}