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

  function formatarData(data) {
    if (!data) return "Não informado";
    return new Date(data).toLocaleString("pt-BR");
  }

  return (
    <main className="page">
      <h1 className="page-title">📅 Eventos</h1>

      <section className="card-grid">
        {eventos.map((evento) => (
          <article className="card" key={evento.id}>
            <h2>{evento.titulo}</h2>

            <p>{evento.descricao}</p>

            <p>
              <strong>Início:</strong> {formatarData(evento.data_inicio)}
            </p>

            <p>
              <strong>Fim:</strong> {formatarData(evento.data_fim)}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}