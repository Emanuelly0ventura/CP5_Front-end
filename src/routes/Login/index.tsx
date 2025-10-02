import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormData = {
  nomeUsuario: string;
  email: string;
};

export default function Login(){
    document.title ="Login"
    const methods = useForm();
    const register = methods.register;
    const handleSubmit = methods.handleSubmit;
    const errors = methods.formState.errors;

    const onSubmit = (data: FormData) => {
        console.log("Dados invalidos: ", data);
        alert(`Bem-vindo, ${data.nomeUsuario}!`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Login</h2>
                <div>
                    <label>Nome de usuario</label>
                </div>

            </form>

        </div>
    )



}

