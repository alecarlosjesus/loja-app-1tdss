import { NextResponse } from "next/server";
    const queijos = [
        {"id":1,"nome":"Queijo Minas","preco":20.0,"peso":1.0,"tipo":"Minas"},  
        {"id":2,"nome":"Queijo Prato","preco":25.0,"peso":1.0,"tipo":"Prato"},
        {"id":3,"nome":"Queijo Mussarela","preco":30.0,"peso":1.0,"tipo":"Mussarela"},
        {"id":4,"nome":"Queijo Provolone","preco":35.0,"peso":1.0,"tipo":"Provolone"},
        {"id":5,"nome":"Queijo Parmesão","preco":40.0,"peso":1.0,"tipo":"Parmesão"},
        {"id":6,"nome":"Queijo Gorgonzola","preco":45.0,"peso":1.0,"tipo":"Gorgonzola"},
        {"id":7,"nome":"Queijo Roquefort","preco":50.0,"peso":1.0,"tipo":"Roquefort"},
        {"id":8,"nome":"Queijo Brie","preco":55.0,"peso":1.0,"tipo":"Brie"},
        {"id":9,"nome":"Queijo Camembert","preco":60.0,"peso":1.0,"tipo":"Camembert"},
        {"id":10,"nome":"Queijo Cheddar","preco":65.0,"peso":1.0,"tipo":"Cheddar"}
    ];  

export async function GET(request,{params}) {
    
    console.log("Valor do parâmetro id: ", params.id);
    
    const id = params.id;
    
    if(id > 0){
        const queijo = queijos.find(queijo => queijo.id == id);
        return  NextResponse.json(queijo);    
    }else{

        return  id == 0 ? NextResponse.json(queijos) : NextResponse.redirect("http://localhost:3000/");
    }
}
