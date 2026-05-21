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
    <div style={{ padding: 24 }}>
      <h1>🥾 Trilhas</h1>

      {trilhas.map((trilha) => (
        <div
          key={trilha.id}
          style={{
            background: "white",
            padding: 20,
            marginBottom: 20,
            borderRadius: 12,
            border: "1px solid #ddd",
          }}
        >
          <h2>{trilha.nome}</h2>

          <p>{trilha.descricao}</p>

          <p>
            <strong>Dificuldade:</strong> {trilha.dificuldade_display}
          </p>

          <p>
            <strong>Distância:</strong> {trilha.distancia_km} km
          </p>

          <p>
            <strong>Tempo estimado:</strong> {trilha.tempo_estimado_horas}h
          </p>

          <p>
            <strong>Status:</strong> {trilha.status_aberta_display}
          </p>
        </div>
      ))}
    </div>
  );
}