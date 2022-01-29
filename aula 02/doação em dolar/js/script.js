let valord=parseFloat(prompt("digite o valor da doação em dolar"));
let cotacaod=parseFloat(prompt("digite o valor da cotação do dolar"));
let doacaoemreais=valord*cotacaod;

    alert (`valor total da doação em reais é R$:${doacaoemreais.toFixed(2)} , levando em conta o dolar a $:${cotacaod}`);


    //${doacaoemreais.toFixed(2)} isso serve pra travar casa decimal 