let sd=parseFloat(prompt("Digite seu saldo médio"));

if (sd <= 200){
    alert(`Seu saldo médio é de ${sd.toFixed(2)}, você não possui crédito`)
} else if (sd > 201, sd <= 400){
    alert(`Seu saldo médio é de ${sd.toFixed(2)}, você possui ${sd / 10 * 2} de crédito`)
} else if (sd > 401, sd <= 600){
    alert(`Seu saldo médio é de ${sd.toFixed(2)}, você possui ${sd / 10 * 3} de crédito`)
} else {
    alert(`Seu saldo médio é de ${sd.toFixed(2)}, você possui ${sd / 10 * 4} de crédito`)
}



