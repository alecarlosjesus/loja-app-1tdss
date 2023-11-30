"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginUsers() {
  const [msg, setMsg] = useState("");
  const navigate = useRouter();
  const [usuario, setUsuario] = useState({info: "login",email: "",senha: "",});

  //Preenchimento dos Campos!
  const handleChange = (e) => {const { name, value } = e.target;setUsuario({ ...usuario, [name]: value });
  };

  //Envio das informações
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/base/base-user-api",
        {
          method: "POST",headers: {"Content-Type": "application/json",},
          body: JSON.stringify(usuario),
        }
      );

      if (response.ok) {
        const result = await response.json();
          console.log("VALIDADO!!!!");
        if (result.status) {
          const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
          sessionStorage.setItem("token-user", token);
          sessionStorage.setItem("user-info", JSON.stringify(result.user));
            setMsg("Login efetuado com Sucesso!!");
            setTimeout(()=>{setMsg("");window.location.href = "/";
            },5000);

        }else{
            
            setMsg("OPS!! Verifique se seus dados estaão corretos, Login ou Senha incorretos!");
            setTimeout(()=>{setMsg("");
            },5000);

        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>IDENTIFICAÇÃO DOS USUÁRIOS</h1>

        <h2 className={msg == "Seu login foi efetuado com êxito" ? "msg-success-login":"msg-error-login"}>{msg}</h2>

      <div className="form-login">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>LOGIN</legend>
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
              <button>LOGIN</button>
            </div>
            <div className="p-5 m-auto w-2/4">
              <p>Caso você ainda não possua cadastro em nosso sistema, <Link href="/login/cad" className="text-amber-500 hover:text-amber-200">CLIQUE AQUI</Link> para criar seu cadastro agora mesmo.</p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
