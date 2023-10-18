
export default function Produto({params}) {
  return (
    <div>
        <h1>Recebendo o parâmetro gerado pelo segmento id:</h1>
        <h2>ID recebido : {params.id}</h2>
    </div>
  )
}
