import { useEffect, useState } from "react";
import api from "../services/api";

export default function Parques() {
  const [parques, setParques] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const resposta = await api.get("parques/");

        console.log("Parques recebidos:");
        console.log(resposta.data);

        setParques(resposta.data);

      } catch (erro) {
        console.log("Erro:");
        console.log(erro);
      }
    }

    carregar();
  }, []);

  return (
    <div
      style={{
        padding: "24px",
      }}
    >
      <h1>🌿 Parques</h1>

      {parques.length === 0 ? (
        <p>Nenhum parque encontrado.</p>
      ) : (
        parques.map((parque) => (
          <div
            key={parque.id}
            style={{
              background: "white",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "12px",
              border: "1px solid #ddd",
            }}
          >
            <h2>{parque.nome_display}</h2>

            <p>
              {parque.descricao_geral}
            </p>

            <p>
              Altitude:
              {" "}
              {parque.altitude_media} m
            </p>

            <p>
              Horário:
              {" "}
              {parque.horario_funcionamento}
            </p>
          </div>
        ))
      )}
    </div>
  );
}