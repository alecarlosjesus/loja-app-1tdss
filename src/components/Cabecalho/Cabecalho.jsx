import Link from 'next/link';
import "./Cabecalho.scss";


export default function Cabecalho() {
  return (
    <header className='cabecalho'>
        <nav>
          <Link href="/produtos/calca">CALCA</Link>
          <Link href="/produtos/camisa">CAMISA</Link>
          <Link href="/produtos/meia">MEIA</Link>
          <Link href="/produtos/tenis">TÊNIS</Link>
        </nav>
    </header>
  )
}
