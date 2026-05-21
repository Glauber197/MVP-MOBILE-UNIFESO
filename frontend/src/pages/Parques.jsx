import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Parques() {
  const [parques, setParques] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const resposta = await api.get("parques/");

        console.log(resposta.data);

        setParques(resposta.data);

      } catch (erro) {
        console.log(erro);
      }
    }

    carregar();
  }, []);

  return (
    <div style={{ padding: 24 }}>

      <h1>🌿 Parques</h1>

      {parques.length === 0 && (
        <p>Carregando...</p>
      )}

      {parques.map((parque) => (
        <div
          key={parque.id}
          style={{
            border: "1px solid gray",
            padding: 20,
            marginBottom: 20,
          }}
        >
          <h2>
            {parque.nome_display}
          </h2>

          <p>
            {parque.descricao_geral}
          </p>

          <Link to={`/parques/${parque.id}`}>
            <button>
              Explorar
            </button>
          </Link>

        </div>
      ))}

    </div>
  );
}