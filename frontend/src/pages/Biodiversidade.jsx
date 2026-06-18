import { useEffect, useState } from "react";
import api from "../services/api";

export default function Biodiversidade() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    async function carregarBiodiversidade() {
      try {
        const resposta = await api.get("biodiversidades/");
        setItens(resposta.data);
      } catch (erro) {
        console.log(erro);
      }
    }

    carregarBiodiversidade();
  }, []);

  return (
    <main className="page biodiversity-page">
      <h1 className="page-title">🦜 Biodiversidade</h1>

      <section className="card-grid biodiversity-grid">
        {itens.map((item) => (
          <article className="card biodiversity-card" key={item.id}>
            {item.imagem && (
              <img
                src={
                  item.imagem.startsWith("http")
                    ? item.imagem
                    : `http://127.0.0.1:8000${item.imagem}`
                }
                alt={item.nome_comum}
              />
            )}

            <h2>{item.nome_comum}</h2>

            <p>
              <strong>Nome científico:</strong> {item.nome_cientifico}
            </p>

            <p>
              <strong>Categoria:</strong>{" "}
              {item.categoria_display || item.categoria}
            </p>

            <p>{item.descricao}</p>

            <p>
              <strong>Status de conservação:</strong>{" "}
              {item.status_conservacao_display || item.status_conservacao}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}