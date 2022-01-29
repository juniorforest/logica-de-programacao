let notaUm=parseFloat(prompt(`Insira a sua primeira nota aqui: `));
let notaDois=parseFloat(prompt(`Insira a sua segunda nota aqui: `));
let notaTres=parseFloat(prompt(`Insira a sua terceira nota aqui: `));

var media= (notaUm + notaDois + notaTres)/3;

if(media>=7){
    alert(`Sua média foi de ${media.toFixed(2)} você está aprovado.`);
    document.getElementById("mensagem").innerHTML=`Você está aprovado, sua média foi de ${media.toFixed(2)}`;
}else if(media>=4){
    alert(`Sua média foi de ${media.toFixed(2)} você está em prova final.`);
    document.getElementById("mensagem").innerHTML=`Você está em prova final, sua média foi de ${media.toFixed(2)}`;
}else{
    alert(`Sua média foi de ${media.toFixed(2)} você está reprovado.`);
    document.getElementById("mensagem").innerHTML=`Você está reprovado, sua média foi de ${media.toFixed(2)}`;
}



    /* let notaUm=parseFloat(prompt(`Insira a sua primeira nota aqui: `));
let notaDois=parseFloat(prompt(`Insira a sua segunda nota aqui: `));
let notaTres=parseFloat(prompt(`Insira a sua terceira nota aqui: `));

var media= (notaUm + notaDois + notaTres)/3;

if(media>=7){
    alert(`Sua média foi de ${media.toFixed(2)} você está aprovado.`);
    document.getElementById("mensagem").innerHTML=`Você está aprovado, sua média foi de ${media.toFixed(2)}`;
}else if(media>=4){
    alert(`Sua média foi de ${media.toFixed(2)} você está em prova final.`);
    document.getElementById("mensagem").innerHTML=`Você está em prova final, sua média foi de ${media.toFixed(2)}`;
}else{
    alert(`Sua média foi de ${media.toFixed(2)} você está reprovado.`);
    document.getElementById("mensagem").innerHTML=`Você está reprovado, sua média foi de ${media.toFixed(2)}`;
} */







