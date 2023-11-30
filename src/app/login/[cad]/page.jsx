"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadUsers({ params }) {
  const [msg, setMsg] = useState("");
  const navigate = useRouter();
  const [usuario, setUsuario] = useState({info: "cad",nome: "",email: "",senha: "",});
  const handleChange = (e) => {const { name, value } = e.target;setUsuario({ ...usuario, [name]: value });};
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

          setMsg("Seu cadastro foi efetuado com êxito!!");
          setTimeout(() => {setMsg("");navigate.push("/");
        }, 5000);

        } else {
          setMsg("OPS!! Ocorreu um erro ao tentar efetuar seu cadastro");
          setTimeout(() => {setMsg("");
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

      <h2 className={msg == "Seu cadastro foi efetuado com êxito" ? "msg-success-login" : "msg-error-login" }>{msg}</h2>

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
                placeholder="Por favor, insira seu nome completo"
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
                placeholder="Por favor, insira seu email"
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
                placeholder="Por favor, insira sua senha"
                value={usuario.senha}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>CADASTRAR</button>
            </div>
            <div className="p-5 m-auto w-2/4">
              <p>
                Caso você ja possua cadastro em nosso sistema,{" "}
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
