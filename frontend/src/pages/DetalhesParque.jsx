import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function DetalhesParque() {
  const { id } = useParams();
  const [parque, setParque] = useState(null);

  useEffect(() => {
    async function carregarParque() {
      try {
        const resposta = await api.get(`parques/${id}/`);
        setParque(resposta.data);
      } catch (erro) {
        console.log(erro);
      }
    }

    carregarParque();
  }, [id]);

  if (!parque) {
    return <p style={{ padding: 24 }}>Carregando...</p>;
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>🌿 {parque.nome_display}</h1>

      <p>{parque.descricao_geral}</p>

      <p>
        <strong>Altitude:</strong> {parque.altitude_media} m
      </p>

      <p>
        <strong>Horário:</strong> {parque.horario_funcionamento}
      </p>

      <h2>Trilhas</h2>

      {parque.trilhas.length === 0 ? (
        <p>Nenhuma trilha cadastrada.</p>
      ) : (
        parque.trilhas.map((trilha) => (
          <div key={trilha.id}>
            <h3>{trilha.nome}</h3>
          </div>
        ))
      )}

      <h2>Eventos</h2>

      {parque.eventos.length === 0 ? (
        <p>Nenhum evento cadastrado.</p>
      ) : (
        parque.eventos.map((evento) => (
          <div key={evento.id}>
            <h3>{evento.titulo}</h3>
          </div>
        ))
      )}
    </div>
  );
}