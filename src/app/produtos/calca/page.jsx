import Image from "next/image";
import Link from "next/link";
import styles from "./CalcaModule.css";

export default function Calca(){
    return(
          
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi minus ullam in ut, excepturi vel. Reprehenderit optio hic rerum nihil doloribus. Quos ipsam expedita veritatis aspernatur quasi, magnam eius odit.</p>
                <p><Link href="/">HOME</Link></p>
                <figure>
                    <Image src="/img/clothes-615×640.png" alt="Calça" width={307} height={320}/>
                </figure>
            </div>
    )
}