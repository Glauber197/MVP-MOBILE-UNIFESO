import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function imagemUrl(imagem) {
  if (!imagem) return null;
  return imagem.startsWith("http")
    ? imagem
    : `http://127.0.0.1:8000${imagem}`;
}

function formatarData(data) {
  if (!data) return "Não informado";
  return new Date(data).toLocaleString("pt-BR");
}

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
    return (
      <main className="page">
        <p>Carregando parque...</p>
      </main>
    );
  }

  const imagem = imagemUrl(parque.imagem);

  return (
    <main>
      <section
        className="detail-hero"
        style={{
          backgroundImage: imagem
            ? `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${imagem})`
            : "linear-gradient(135deg, #2f6b3d, #1f3d2a)",
        }}
      >
        <div className="detail-hero-content">
          <h1>🌿 {parque.nome_display}</h1>

          <p>{parque.descricao_geral}</p>

          <div className="info-chips">
            <span>🏔️ {parque.altitude_media} m</span>
            <span>🕒 {parque.horario_funcionamento}</span>
          </div>
        </div>
      </section>

      <section className="page">
        <h2 className="section-title">🥾 Trilhas disponíveis</h2>

        <div className="card-grid two-columns">
          {parque.trilhas.length === 0 ? (
            <article className="card">
              <p>Nenhuma trilha cadastrada.</p>
            </article>
          ) : (
            parque.trilhas.map((trilha) => (
              <article className="card" key={trilha.id}>
                <h2>{trilha.nome}</h2>

                {trilha.descricao && <p>{trilha.descricao}</p>}

                {trilha.dificuldade_display && (
                  <p>
                    <strong>Dificuldade:</strong> {trilha.dificuldade_display}
                  </p>
                )}

                {trilha.distancia_km && (
                  <p>
                    <strong>Distância:</strong> {trilha.distancia_km} km
                  </p>
                )}

                {trilha.tempo_estimado_horas && (
                  <p>
                    <strong>Tempo estimado:</strong>{" "}
                    {trilha.tempo_estimado_horas}h
                  </p>
                )}

                {trilha.status_aberta_display && (
                  <span className="badge">
                    {trilha.status_aberta_display}
                  </span>
                )}
              </article>
            ))
          )}
        </div>

        <h2 className="section-title">📅 Eventos no parque</h2>

        <div className="card-grid two-columns">
          {parque.eventos.length === 0 ? (
            <article className="card">
              <p>Nenhum evento cadastrado.</p>
            </article>
          ) : (
            parque.eventos.map((evento) => (
              <article className="card" key={evento.id}>
                <h2>{evento.titulo}</h2>

                {evento.descricao && <p>{evento.descricao}</p>}

                <p>
                  <strong>Início:</strong> {formatarData(evento.data_inicio)}
                </p>

                <p>
                  <strong>Fim:</strong> {formatarData(evento.data_fim)}
                </p>

                {evento.disponibilidade && (
                  <span className="badge">{evento.disponibilidade}</span>
                )}
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}