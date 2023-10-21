
export default async function GitUsers() {

    const response  = await fetch("http://localhost:3000/api/gitusers");
    const usuarios = await response.json();

  return (
    <div>
        <h1>Usuários do GitHub</h1>
        <div>

        { usuarios.map((item, indice)=>(
            <div key={indice}>
            <p>Id: {item.id}</p>
            <p>Nome: {item.login}</p>
            </div>

))}
        </div>
    </div>
  )
}
