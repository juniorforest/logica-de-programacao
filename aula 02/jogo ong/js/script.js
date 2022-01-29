// pessoas até 11 anos não podem joga
// pessoas com 12 anos, somente coma permissão dos pais
// acima de 12 anos, pode jogar 
let idade=parseInt(prompt("Digite a sau idade"));
if(idade<12){
    alert ("sua idade não permite que jogue!");
}
else if (idade==12){
    alert ("você pode jogar com a permissão dos pais!");
}
else{
    alert ("você pode jogar")
}