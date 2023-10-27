"use client";
import { useState } from "react";

export default function LoginUsers() {

  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const{name,value} = e.target;
    setUsuario({...usuario,[name]:value});
  };

  const handleSubmit = async (e) => {
    //Recuperar o usuário que está em nossa base json.
    try {
      const response = await fetch(
        "http://localhost:3000/api/base/base-user-api",
        {}
      );

      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>IDENTIFICAÇÃO DOS USUÁRIOS</h1>

      <div className="form-login">
        <form>
          <fieldset>
            <legend>LOGIN</legend>
            <div>
              <label htmlFor="idEmail">Email:</label>
              <input
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite seu email."
                value={usuario.email} onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idSenha">Senha:</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite sua senha." 
                value={usuario.senha} onChange={handleChange}
              />
            </div>
            <div>
              <button>LOGIN</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
