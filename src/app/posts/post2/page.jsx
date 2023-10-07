import Image from "next/image";
import Link from "next/link";

export default function Post2() {
  return (
    <div>
        <h1>POST - 2</h1>
        <div>
            <figure>
             <Image src="/img/post-its_640.png" alt="Post-IT" width={350} height={250}/>
             <figcaption>
                <Link  href="/">Voltar</Link>
            </figcaption>  
            </figure>
        </div>
    </div>
  )
}
