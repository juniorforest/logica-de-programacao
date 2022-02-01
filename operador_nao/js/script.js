/* leia um login e se este nao for o administrador exiba a 
mensagem: sem poderes administrativo*/

let usuario=prompt("Usuario");
if (!(usuario=="adiministrador")){
    alert("sem poderes administrativos!");
}
else{
    alert ("olá admistrador");
}
