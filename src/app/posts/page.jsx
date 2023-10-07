import Link from "next/link";

export default function MeuPrimeiroPost(){
    
    return(
        <>
            <div>
                    <h1>Meu primeiro POST</h1>
                    <div>
                        <p><Link href="/">Voltar</Link></p>
                    </div>
            </div>
        </>
    )

}