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
    // verificar duplicidade
    const res = await fetch(`http://localhost:3000/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`);
    const users = await res.json();

    if (users.length > 0) {
      alert("Nome de usuário ou email já cadastrado!");
      return;
    }

    // cadastrar no json-server
    await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };
    

    return(
        <h2>Cadastro</h2>
    );

}

