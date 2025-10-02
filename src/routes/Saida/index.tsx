import { useContext } from "react";
import { UserContext } from "../../Providencia";


export default function Saida() {
  const { user } = useContext(UserContext);
  return (
    <div>
        {(() => {
            if (user) {
                return <p>Bem-vindo, {user.nomeUsuario} ({user.email})</p>;
            } else {
                return <p>Nenhum usuário logado</p>;
            }   
        })()}
    </div>
  );
}