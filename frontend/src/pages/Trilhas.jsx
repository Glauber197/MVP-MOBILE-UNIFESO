import { useEffect, useState } from "react";
import api from "../services/api";

export default function Trilhas() {
  const [trilhas, setTrilhas] = useState([]);

  useEffect(() => {
    async function carregarTrilhas() {
      try {
        const resposta = await api.get("trilhas/");
        setTrilhas(resposta.data);
      } catch (erro) {
        console.log(erro);
      }
    }

    carregarTrilhas();
  }, []);

  return (
    <main className="page">
      <h1 className="page-title">🥾 Trilhas</h1>

      <section className="card-grid">
        {trilhas.map((trilha) => (
          <article className="card" key={trilha.id}>
            {trilha.imagem && (
  <img
    src={
      trilha.imagem.startsWith("http")
        ? trilha.imagem
        : `http://127.0.0.1:8000${trilha.imagem}`
    }
    alt={trilha.nome}
    style={{
      width: "100%",
      height: 260,
      objectFit: "cover",
      borderRadius: 14,
      marginBottom: 20,
    }}
  />
)}

            
            <h2>{trilha.nome}</h2>

            <p>{trilha.descricao}</p>

            <p><strong>Dificuldade:</strong> {trilha.dificuldade_display}</p>
            <p><strong>Distância:</strong> {trilha.distancia_km} km</p>
            <p><strong>Tempo estimado:</strong> {trilha.tempo_estimado_horas}h</p>
            <p><strong>Status:</strong> {trilha.status_aberta_display}</p>
          </article>
        ))}
      </section>
    </main>
  );
}