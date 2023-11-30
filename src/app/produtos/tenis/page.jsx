import Image from "next/image";
import Link from "next/link";
import styles from "./TenisModule.css";

export default function Tenis(){
    return(
        <div>
            <h1>TÊNIS</h1>
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi minus ullam in ut, excepturi vel. Reprehenderit optio hic rerum nihil doloribus. Quos ipsam expedita veritatis aspernatur quasi, magnam eius odit.</p>
                <p><Link href="/">HOME</Link></p>
                <figure>
                    <Image src="/img/converse-640×376.png" alt="Tênis" width={320} height={185}/>
                </figure>
            </div>
        </div>
    )
}