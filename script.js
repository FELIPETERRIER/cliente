/*  logica da maioridade:*/



const hoje = new Date();
let nossoAno = hoje.getFullYear();
let nossoMes = hoje.getMonth();
let nossoDia = hoje.getDate();
function nascimento(){
    let dataNascimento = new Date(document.getElementById("data").value);
    
    //console.log(dataNascimento.toLocaleDateString('pt-BR'));
    //dataNascimento = new Date(dataNascimento);
    //console.log(dataNascimento);

    //console.log(dataNascimento.setHours(24));
    
    dataNascimento.setHours(24);
    console.log(dataNascimento.toLocaleDateString('pt-BR')); 
}


/*let dataNascimento1 = new Date(dataNascimento);
console.log(dataNascimento)
/*let mesNascimento = dataNascimento.getMonth();
let diaNascimento = dataNascimento.getDate();
let anoNascimento = dataNascimento.getFullYear();
let anoMaioridade = nossoAno - 18;
let mesMaioridade = 0;
let diaMaioridade = 1
function comparação() {
    if (nossoAno - anoNascimento > nossoAno - anoMaioridade && nossoMes - mesNascimento < nossoMes
         - mesMaioridade && nossoDia - diaNascimento < nossoDia - diaMaioridade) 
         { console.log("Usuario permitido!") }
    else {
        alert('Usuario não autorizado para esta operção!')
    }



}
comparação();*/

//CPF
function validaCpf(){
    const cpf = document.getElementById('cpf').value;

    let acumulador = 0;
    let fatorMultiplicador = 10;

    //cálculo do primeiro dígito
    for(let cont=0; cont < (cpf.length - 2); cont++){
        acumulador += cpf[cont] * fatorMultiplicador--;
    }
    let digito1 = 11 - (acumulador % 11);

    //cálculo do último dígito
    acumulador = 0;
    let fatorMultiplicador2 = 11;
    for (let cont = 0; cont < cpf.length - 1; cont++) {
        acumulador += cpf[cont] * fatorMultiplicador2--;
    }
    let digito2 = 11 - (acumulador % 11);

    //valida os dois de uma vez
    if((cpf[9] == digito1) && cpf[10] == digito2){
        console.log("CPF porreta");
        return true;
    }else{
        console.log("CPF suspeito");
        return false;
    }
}





















