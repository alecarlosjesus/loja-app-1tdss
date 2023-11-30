import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch("https://api.github.com/users");
    const usuarios = await response.json();
    return NextResponse.json(usuarios);
}
