/* baseado em um codigo exiba o produto a ela vinculado */
let codigo=parseInt(prompt("digite o codigo:"));
let produto;
switch(codigo){
    case 1:
        produto="coca-cola";
        break;
    case 2:
        produto="sorvete";
        break
    case 3:
        produto="chocolate"
        break
    case 4:
        produto="bolacha";
        break
    default:
        produto="codigo inválido!!"
        break
}









//jeito mais complicado de fazer//
/*let codigo=parseInt(prompt("digite o codigo:"));
let produto;
if(codigo==1){
    produto="coca-cola";
}
else if (codigo==2){
    produto="sorvete";
}
else if(codigo==3){
    produto="chocolate";
}
else (codigo==){
    preoduto="bolacha";
}
*/