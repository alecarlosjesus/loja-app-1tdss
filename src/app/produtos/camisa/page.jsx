import Image from "next/image";
import Link from "next/link";
import styles from "./CamisaModule.css";

export default function Camisa(){
    return(
        <div>
            <h1>CAMISA</h1>
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi minus ullam in ut, excepturi vel. Reprehenderit optio hic rerum nihil doloribus. Quos ipsam expedita veritatis aspernatur quasi, magnam eius odit.</p>
                <p><Link href="/">HOME</Link></p>
                <figure>
                    <Image src="/img/t-shirt-580×640.png" alt="Camisa" width={290} height={320}/>
                </figure>
            </div>
        </div>
    )
}