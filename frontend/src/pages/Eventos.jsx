import { useEffect, useState } from "react";
import api from "../services/api";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function carregarEventos() {
      try {
        const resposta = await api.get("eventos/");
        setEventos(resposta.data);
      } catch (erro) {
        console.log(erro);
      }
    }

    carregarEventos();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>📅 Eventos</h1>

      {eventos.length === 0 ? (
        <p>Nenhum evento disponível.</p>
      ) : (
        eventos.map((evento) => (
          <div
            key={evento.id}
            style={{
              background: "white",
              padding: 20,
              marginBottom: 20,
              borderRadius: 12,
              border: "1px solid #ddd",
            }}
          >
            <h2>{evento.titulo}</h2>

            <p>{evento.descricao}</p>

            <p>
              <strong>Início:</strong> {new Date(evento.data_inicio).toLocaleString("pt-BR")}
            </p>

            <p>
              <strong>Fim:</strong> {evento.data_fim
  ? new Date(evento.data_fim).toLocaleString("pt-BR")
  : "Não informado"}
            </p>
          </div>
        ))
      )}
    </div>
  );
}