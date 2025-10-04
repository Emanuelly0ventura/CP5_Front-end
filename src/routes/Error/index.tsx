import { useEffect } from "react";
import { RiArrowGoBackFill as VoltarHome } from "react-icons/ri";
import { BiError as ErrorIcon} from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Error() {
    useEffect(() => {
        document.title = "404 - Página não encontrada";
    }, []);

    return (
        <main className="error-page">
            <div className="error-container">
                <ErrorIcon className="error-icon" />
                <h1 className="error-title">404</h1>
                 <p className="error-message">
                    Ops! A página que você tentou acessar não foi encontrada.
                </p>
                <Link to="/cadastro" className="error-button">Voltar para a página inicial<VoltarHome className="error-button-icon"/>
                </Link>
            </div>
        </main>
    );
}