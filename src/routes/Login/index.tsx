import { useForm } from "react-hook-form";

type FormData = {
  nomeUsuario: string;
  email: string;
};

export default function Login(){
    document.title ="Login"
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>(); 

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

