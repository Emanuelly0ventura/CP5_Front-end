import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Providencia";

//rode no sistema para ativar a api: npx json-server --watch db.json --port 3000
//tailwind: npm i tailwindcss @tailwindcss/vite


type LoginData = {
  nomeUsuario: string;
  email: string;
};

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const onSubmit = async (data: LoginData) => {
    const res = await fetch(
      `http://localhost:3000/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`
    );
    const users = await res.json();

    if (users.length > 0) {
      localStorage.setItem("usuarioLogado", JSON.stringify(users[0]));
      setUser(users[0]);
      navigate("/Saida"); 
    } else {
      alert("Usuário ou email inválido!");
    }
  };

  return (
    <main>
      <h1 className="universal-title">Login</h1>
      <div className="universal-card">
        <div className="universal-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="universal-field">
              <label className="universal-label">Nome de usuário</label>
              <input className="universal-input" placeholder="Digite o nome de usuário..."
                type="text"
                {...register("nomeUsuario", {
                  required: "O nome de usuário é obrigatório",
                  minLength: {
                    value: 3,
                    message: "O nome deve ter pelo menos 3 caracteres",
                  },
                })}
              />
              {errors.nomeUsuario && <p className="universal-error">{errors.nomeUsuario.message}</p>}
            </div>

            <div className="universal-field">
              <label  className="universal-label" >Email</label>
              <input className="universal-input" placeholder="Digite o email..."
                type="email"
                {...register("email", {
                  required: "O email é obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Formato de email inválido",
                  },
                })}
              />
              {errors.email && <p className="universal-error">{errors.email.message}</p>}
            </div>
            
            <div className="universal-div-btn">
              <button className="universal-btn" type="submit">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

