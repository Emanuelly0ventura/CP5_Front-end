import { useNavigate } from "react-router-dom";
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


            </form>

        </div>
    )

}

