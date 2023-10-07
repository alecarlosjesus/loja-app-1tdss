import Image from "next/image";
import Link from "next/link";

export default function Post3() {
  return (
    <div>
        <h1>POST - 3</h1>
        <div>
            <figure>
             <Image src="/img/princes-pier_640.jpg" alt="Paisagem" width={350} height={250}/>
             <figcaption>
                <Link  href="/">Voltar</Link>
            </figcaption>  
            </figure>
        </div>
    </div>
  )
}
