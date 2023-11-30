import { NextResponse } from "next/server";

const usuarios = [
    {id: 1, nome: 'Leo', email: 'email@fiap.com'},

    {id: 2, nome: 'Milton', email: 'email@fiap.com'},

    {id: 3, nome: 'Renata', email: 'email@fiap.com'},

    {id: 4, nome: 'Meg', email: 'email@fiap.com'},

    {id: 5, nome: 'Bibi', email: 'email@fiap.com'}
    ];
     
export async function GET(){
    return NextResponse.json(usuarios);
}