import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request,{params}) {

    //Recuperar o arquivo json.
    const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf-8');
    return NextResponse.json(JSON.parse(file));
}