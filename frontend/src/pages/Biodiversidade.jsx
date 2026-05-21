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
    <div style={{ padding: 24 }}>
      <h1>🦜 Biodiversidade</h1>

      {itens.length === 0 ? (
        <p>Nenhum registro cadastrado.</p>
      ) : (
        itens.map((item) => (
          <div
            key={item.id}
            style={{
              background: "white",
              padding: 20,
              marginBottom: 20,
              borderRadius: 12,
              border: "1px solid #ddd",
            }}
          >
            <h2>{item.nome_comum}</h2>

            <p>
              <strong>Nome científico:</strong> {item.nome_cientifico}
            </p>

            <p>
              <strong>Categoria:</strong> {item.categoria_display || item.categoria}
            </p>

            <p>{item.descricao}</p>

            <p>
              <strong>Status de conservação:</strong>{" "}
              {item.status_conservacao_display || item.status_conservacao}
            </p>
          </div>
        ))
      )}
    </div>
  );
}