export default async function ShowUser({params}) {


        const response = await fetch("http://localhost:3000/dados");
        const usuarios = await response.json();
        const usuario = usuarios.filter((item) => item.id == params.id)[0];

        console.log(usuario);
        
  return (
    <div>
        <h1>Usuário selecionado</h1>
        <div>
            <p>Id: {usuario.id}</p>
            <p>Nome: {usuario.nome}</p>
            <p>Email: {usuario.email}</p>
        </div>
    </div>
  )
}
