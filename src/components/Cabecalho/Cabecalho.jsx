"use client";
import Link from 'next/link';
import "./Cabecalho.scss";
import { useState } from 'react';

export default function Cabecalho() {

  const user = JSON.parse(sessionStorage.getItem("user-info"));
  const [usuario] = useState(user);

  const handleLogout = () => {
    sessionStorage.removeItem("token-user");
    sessionStorage.removeItem("user-info");
    window.location.href = "/login";
  }

  if(sessionStorage.getItem("token-user")){
    
    return (
        <header className='cabecalho'>
          
        <nav>
          <Link onClick={handleLogout} href="/">LOGOUT</Link>
          <Link href="/produtos/calca">CALCA</Link>
          <Link href="/produtos/camisa">CAMISA</Link>
          <Link href="/produtos/meia">MEIA</Link>
          <Link href="/produtos/tenis">TÊNIS</Link>
          <div>
            <p>{usuario.name} - {usuario.email}</p>
          </div>
        </nav>
    </header>
  )}else{
   return (
    <header className='cabecalho'>
        <nav>
          <Link href="/login">LOGIN</Link>
        </nav>
    </header>
  ) 
  }
}

