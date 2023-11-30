import Image from "next/image";
import styles from "./HomeModule.css";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
        <div>
          <h2>Várias Ofertas esperam por você...</h2>
          <figure>
            <Image className="block m-auto" src="/img/black-home_640x360.png" width={640} height={360} alt="Painel" />
            <figcaption>Não percam estas promoções.</figcaption>
          </figure>
        </div>
    </div>
  )
}
