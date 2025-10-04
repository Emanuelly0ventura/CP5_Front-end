import { useContext } from "react";
import { UserContext } from "../../Providencia";
import { useNavigate } from "react-router-dom";

export default function Saida() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    if (user === null) {
        return <p>Carregando informações do usuário...</p>;
    }

  return (
    <div>
        {(() => {
            if (user) {
                return <h1>Bem-vindo! {user.nome} | NomeUsuario: {user.nomeUsuario} | Email: {user.email}🐹</h1>;
                        
            } else {
                return <p>Nenhum usuário logado</p>;
            }
        })()}

        <h2>🐾 Bem-vindo ao Dias de Cão PetShop!🐾</h2>
        <h3></h3>
        <p>Escolha uma opção abaixo:</p>

        <div>
            <button onClick={() => navigate("")}>Marcar Consulta🐶</button>
            <button onClick={() => navigate("")}>Ver Receita🐰</button>
            <button onClick={() => navigate("")}>Itens da Loja🐱</button>
            <button onClick={() => navigate("")}>Marcar Exames🐠</button>
            <button onClick={() => navigate("")}>Avaliação🦜</button>
        </div>

    </div>
  );
}

