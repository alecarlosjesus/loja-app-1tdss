import { promises as fs } from "fs";
import { NextResponse } from "next/server";

const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json","utf-8");
//Este trecho de código acima é responsalver por recuperar o arquivo JSON

export async function GET(request, { params }) {return NextResponse.json(JSON.parse(file));}
const handleLogin = async (email, senha) => {const body = await JSON.parse(file);const userValidado = await body.usuarios.find((user) => user.email == email && user.senha == senha);

//Nesta parte do código acima sera realizado a busca do usuário no banco de dados e também sera responsavel por validar o login e por fim ira retornar o usuário

  if (!userValidado) {
    return false;
  } else {
    return userValidado;
  }
};

const handleCad = async (email, senha, nome) => {const body = await JSON.parse(file);const lastId = await body.usuarios[body.usuarios.length - 1].id;
    //Nessa parte acima será realizado a busca uma busca para identificar qual foi o ultimo id cadastrado
    
    const newUser = {
        "id": (lastId + 1),
        "nome": nome,
        "email": email,
        "senha": senha,
    };

    body.usuarios.push(newUser);
    await fs.writeFile(process.cwd() + "/src/app/api/base/db.json", JSON.stringify(body));
    //No trecho de código acima é onde sera adicionado um novo usuario ao banco de dados

    return newUser;
    //E por fim retornando o usuario
}

export async function POST(request, response) {const {info,nome, email, senha } = await request.json();
  if (info == "login") {const userValidado = await handleLogin(email, senha);
    if (!userValidado) {
      return NextResponse.json({ status: false});
    }else{
      return NextResponse.json({ status: true, user: userValidado });
    }
    //No trecho acima ira chamar a função responsavel pela validação do login

  }else if (info == "cad") {const newUser = await handleCad(email, senha, nome);
    if (!newUser) {
      return NextResponse.json({ status: false });
    }else{
      return NextResponse.json({ status: true, user: newUser });
    }
  }
  //No trecho acima mostra a função do cadastro do usuário sendo chamada
}
