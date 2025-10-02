import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type CadastroData = {
  nome: string;
  nomeUsuario: string;
  email: string;
};

export default function Cadastro(){
    const { register, handleSubmit, formState: { errors } } = useForm<CadastroData>();
    const navigate = useNavigate();

    const onSubmit = async (data: CadastroData) => {
    const res = await fetch("http://localhost:5173/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}");
    const users = await res.json();

    if (users.length > 0) {
      alert("Nome de usuário ou email já cadastrado!");
      return;
    }

    await fetch("http://localhost:5173/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };
    

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Cadastro</h2>
            <div>
                <label>Nome</label>
                <input {...register("nome", { required: "Nome obrigatório" })} />
                {errors.nome && <p>{errors.nome.message}</p>}
            </div>

            <div>
                <label>Nome de usuário</label>
                <input {...register("nomeUsuario", { required: "Nome de usuário obrigatório" })} />
                {errors.nomeUsuario && <p>{errors.nomeUsuario.message}</p>}
            </div>

            <div>
                <label>Email</label>
                <input
                    type="email"
                    {...register("email", {
                    required: "Email obrigatório",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" }
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <button type="submit">Cadastrar</button>
        </form>
    );

}

