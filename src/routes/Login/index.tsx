import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";

type LoginData = {
  nomeUsuario: string;
  email: string;
};

export default function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>();
    const navigate = useNavigate();
    const onSubmit = async (data: LoginData) => {


        const res = await fetch(`http://localhost:3000/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`);
        const users = await res.json();

        if (users.length > 0) {
            localStorage.setItem("usuarioLogado", JSON.stringify(users[0]));
            navigate("/cadastro");
        } else {
            alert("Usuário ou email inválido!");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Login</h2>
                <div>
                    <label>Nome de usuario</label>
                    <input 
                        type="text" 
                        {...register("nomeUsuario", {
                            required: "O nome de usuário é obrigatorio",
                            minLength: {
                                value: 3,
                                message: "O nome deve ter pelo menos 3 caracteres",
                            },
                        })}
                    />
                    {errors.nomeUsuario && (
                        <p>
                            {errors.nomeUsuario.message} 
                        </p>
                    )}

                </div>

                <div>
                    <label>Email</label>
                    <input type="email"
                        {...register("email", {
                            required: "O email é obrigatório",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Formato de email inválido",
                            },
                        })}
                    />
                    {errors.email && (
                        <p>{errors.email.message}</p>
                    )}
                </div>

                <button type="submit">Entrar</button>

            </form>

        </div>
    )

}

