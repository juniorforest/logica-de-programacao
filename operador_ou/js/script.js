/* ler o toal de uma venda e conceder 20% caso o calor  da compra seja
superior a r$1000 ou se o cupom desconto for desconto20*/

let valorCompora=parseFloat(prompt("valort da compra:"));
let cupom=prompt("cupom desconto");
let valorFinal;
if(valorCompora>1000 || cupom=="desconto20"){
    valorFinal=valorCompora-(valorCompora*0.2);
}
else{
    valorFinal=valorCompora;
}
alert (`valor fianal da compra: R$ ${valorFinal}`)