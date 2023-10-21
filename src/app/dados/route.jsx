import { NextResponse } from "next/server";

const usuarios = [
    {id: 1, nome: 'Ana', email: 'email@fiap.com'},
    {id: 2, nome: 'João', email: 'email@fiap.com'},
    {id: 3, nome: 'Maria', email: 'email@fiap.com'},
    {id: 4, nome: 'José', email: 'email@fiap.com'},
    {id: 5, nome: 'Paulo', email: 'email@fiap.com'}
    ];
     
export async function GET(){
    return NextResponse.json(usuarios);
}