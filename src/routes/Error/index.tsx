import { useEffect } from "react";
import { RiArrowGoBackFill as VoltarHome } from "react-icons/ri";
import { LuConstruction as Construcao } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Error() {
    useEffect(() => {
        document.title = "Página em construção!";
    }, []);

    return (
        <main className="error-page">
            <div className="error-container">
                <Construcao className="error-icon" />
                <h1 className="error-title">Página em construção</h1>
                 <p className="error-message">
                    Ops! A página que você tentou acessar está em construção.
                </p>
                <Link to="/login" className="error-button">Voltar para a página de login<VoltarHome className="error-button-icon"/>
                </Link>
            </div>
        </main>
    );
}