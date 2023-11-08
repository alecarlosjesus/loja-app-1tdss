"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadUsers({ params }) {
  //Mensage de STATUS!
  const [msg, setMsg] = useState("");

  //Redirecionamento:
  const navigate = useRouter();

  const [usuario, setUsuario] = useState({
    info: "cad",
    nome: "",
    email: "",
    senha: "",
  });

  //Preenchimento dos Campos!
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  //Envio das informações
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/base/base-user-api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        }
      );

      if (response.ok) {
        const result = await response.json();
        if (result.status) {

          setMsg("Cadastro efetuado com Sucesso!!");
          setTimeout(() => {
            setMsg("");
            //Redirecionando para a página HOME!
            navigate.push("/");
          }, 5000);

        } else {
          setMsg("Ocorreu um erro ao efetuar o cadastro!");
          setTimeout(() => {
            setMsg("");
          }, 5000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>CADATRO DE USUÁRIOS</h1>

      <h2 className={msg == "Cadastro efetuado com Sucesso!!" ? "msg-success-login" : "msg-error-login" }>{msg}</h2>

      <div className="form-login">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>CADASTRO</legend>
            <div>
              <label htmlFor="idNome">Nome:</label>
              <input
                type="text"
                name="nome"
                id="idNome"
                placeholder="Digite seu Nome completo."
                value={usuario.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idEmail">Email:</label>
              <input
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite seu email."
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idSenha">Senha:</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite sua senha."
                value={usuario.senha}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>CADASTRAR</button>
            </div>
            <div className="p-5 m-auto w-2/4">
              <p>
                Se você ja é cadastrado em nosso sistema,{" "}
                <Link
                  href="/login"
                  className="text-amber-500 hover:text-amber-200"
                >
                  CLIQUE AQUI
                </Link>{" "}
                para acessar nosso sistema.
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
