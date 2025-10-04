import { useContext } from "react";
import { UserContext } from "../../Providencia";
import { Link } from "react-router-dom";
import '../../globals.css'
import { RxAvatar as Avatar} from "react-icons/rx";
import { IoMdLogOut as Logout} from "react-icons/io";
import { FaShoppingBasket as Loja} from "react-icons/fa";
import { MdAssignmentAdd as MarcarExame } from "react-icons/md";
import { IoCalendarOutline as MarcarConsulta} from "react-icons/io5";
import { GiMedicines as Receita} from "react-icons/gi";
import { GoSmiley as Avaliacao } from "react-icons/go";
import type { TipoCard } from "../../type/tipoCard";
import { MdOutlineSupportAgent as Ajuda} from "react-icons/md";

export default function Saida() {
    const { user } = useContext(UserContext);

    if (user === null) {
        return <p>Carregando informações do usuário...</p>;
    }

    const cards: TipoCard [] = [
    { title: "Marcar Consulta",   icon: <MarcarConsulta className="portal-icon" />, to: "/error"},
    { title: "Receitas",  icon: <Receita className="portal-icon" />, to: "/error"},
    { title: "Itens da Loja",  icon: <Loja className="portal-icon"/>, to: "/error"},
    { title: "Marcar Exames", icon: <MarcarExame className="portal-icon" />, to: "/error"},
    { title: "Avaliação",   icon: <Avaliacao className="portal-icon"/>, to: "/error"},
    { title: "Quer ajuda?",   icon: <Ajuda className="portal-icon"/>, to: "/error"}
    ];

  return (
    <main className="portal-main">
        <h1 className="universal-title mt-2">Seja bem-vindo(a), {user.nome}!</h1>
        <div className="portal-grid">
                <aside>
                    <div className="portal-profile">
                        <div className="portal-avatar">
                        <Avatar/>
                        </div>
                        <div className="portal-userinfo">
                        <p className="portal-label">Usuário:</p>
                        <p className="portal-value">{user.nomeUsuario}</p>
                        <p className="portal-label">Email:</p>
                        <p className="portal-value"> {user.email}🐹</p>
                        <div className="portal-separator"/>
                            <div className="portal-toplink">
                                <Link to="/login" className="portal-logout" >Logout<Logout/></Link>
                            </div>
                        </div>
                    </div>
                </aside>

            <section>
                <div className="portal-cards">
                    {cards.map((c) => (
                    <Link key={c.title} to={c.to} className="portal-card">
                        <div className="portal-card-icon">{c.icon}</div>
                        <span className="portal-card-title">{c.title}</span>
                    </Link>
                    ))}
                </div>
            </section>
        </div>
    </main>
  );
}

