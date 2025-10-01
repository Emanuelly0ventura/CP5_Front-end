import {Link} from "react-router-dom";
export default function Menu(){

    return(
        
            <nav  >
                <Link to="/cadastro" >Cadastro</Link> |  
                <Link to="/Login">Login</Link>
            </nav>
        
    );
}