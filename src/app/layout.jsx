import "./globals.css"; 
import { Inter } from 'next/font/google'
import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Rodape from '@/components/Rodape/Rodape'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {title: 'Exame web',description: 'Generated by create next app',}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Cabecalho/>
          <h1>PRODUTOS DIVERSOS</h1>
          {children}
        <Rodape/>
        
      </body>
    </html>
  )
}
