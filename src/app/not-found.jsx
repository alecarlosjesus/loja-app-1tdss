import Image from "next/image";


export default function Notfound() {
  return (
    <div>
        <h1>ERRO 404 OOPS! Página não encontrada!</h1>
        <div>
            <figure className="block m-auto w-52">
            <Image src="https://httpstatusdogs.com/img/404.jpg" alt="Cachorro cavando." width={650} height=
            {500} />
            </figure>
        </div>
    </div>
  )
}
