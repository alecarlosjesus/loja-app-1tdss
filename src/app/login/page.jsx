
export default async function LoginUsers() {

    let users;

    //Recuperar o usuário que está em nossa base json.
    try{
        const response = await fetch("http://localhost:3000/api/base/base-user-api");
        users = await response.json();
        console.log(users);
    }catch(error){
        console.log(error);
    }

  return (
    <div>
        <h1>IDENTIFICAÇÃO DOS USUÁRIOS</h1>
        
        <div className="form-login">
            <form>
                <fieldset>
                    <legend>LOGIN</legend>
                    <div>
                        <label htmlFor="idUser">Usuário:</label>
                        <input type="text" name="usuario" id="idUser" placeholder="Digite seu nome de usuário."/>
                    </div>
                    <div>
                        <label htmlFor="idPassword">Senha:</label>
                        <input type="password" name="senha" id="idPassword" placeholder="Digite sua senha."/>
                    </div>
                    <div>
                        <button>LOGIN</button>
                    </div>
                </fieldset>
            </form>
        </div>

    </div>
  )
}
