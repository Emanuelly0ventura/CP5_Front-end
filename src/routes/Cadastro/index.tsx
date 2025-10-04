import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { Usuario } from "../../type/tipoUsuario";

//rode no sistema para ativar a api: npx json-server --watch db.json --port 3000

type CadastroData = {
  nome: string;
  nomeUsuario: string;
  email: string;
};

export default function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm<CadastroData>();
  const navigate = useNavigate();

  const onSubmit = async (data: CadastroData) => {
    const res = await fetch(`http://localhost:3000/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`);
    
    const users: Usuario[] = await res.json();
    const usuarioExistente = users.find(
      (u) => u.nomeUsuario === data.nomeUsuario || u.email === data.email
    );

    if (usuarioExistente) {
      alert("Nome de usuário ou email já cadastrado!");
      return;
    }

    await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <main>

      <h1 className="universal-title">Cadastro</h1>
      <div className="universal-card"> 
        <div className="universal-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="universal-field">
              <label className="universal-label">Nome</label>
              <input className="universal-input" placeholder="Digite o seu nome..." {...register("nome", { required: "Nome obrigatório" })} />
              {errors.nome && <p className="universal-error">{errors.nome.message}</p>}
            </div>

            <div className="universal-field">
              <label className="universal-label">Nome de usuário</label>
              <input className="universal-input" placeholder="Digite o nome de usuário..."{...register("nomeUsuario", { required: "Nome de usuário obrigatório" })} />
              {errors.nomeUsuario && <p className="universal-error">{errors.nomeUsuario.message}</p>}
            </div>

            <div className="universal-field">
              <label className="universal-label">Email</label>
              <input className="universal-input" placeholder="Digite o seu email..." type="email" {...register("email", {required: "Email obrigatório",pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" }})}/>
              {errors.email && <p className="universal-error">{errors.email.message}</p>}
            </div>

            <div className="universal-div-btn">
              <button className="universal-btn" type="submit">Cadastrar</button>
            </div>
          </form>

        </div>
      </div>
    </main>
    
  );
}

