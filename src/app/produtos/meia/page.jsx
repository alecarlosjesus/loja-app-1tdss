import Image from "next/image";
import Link from "next/link";

export default function Meia(){
    return(
        <div>
            <h1>MEIA</h1>
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi minus ullam in ut, excepturi vel. Reprehenderit optio hic rerum nihil doloribus. Quos ipsam expedita veritatis aspernatur quasi, magnam eius odit.</p>
                <p><Link href="/">HOME</Link></p>
                <figure>
                    <Image src="/img/socks-496×640.png" alt="Meia" width={246} height={320}/>
                </figure>
            </div>
        </div>
    )
}