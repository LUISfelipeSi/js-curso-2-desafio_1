//exer1

let titulo = document.querySelector('h1');
titulo.innerHTML = "hora do desafio";

//exer2

function verificaCronsole(){
    console.log = ("o botao foi clicado");
}


//exer3

function vericarAlert(){
    alert ("eu amo js");
}

//exer4

function verificarPrompt(){
    let cidade = prompt("diga uma cidade do Brasil");
    alert (`estive em ${cidade}e lembrei de voce`);
}


//exer4

function vericarSoma (){
    let num1 =parseInt (prompt("escolha um numero"));
    let num2 =parseInt (prompt ("escolha outro numero"));
    let num3 = num1 + num2 
    alert (`a soma dos dois numero e ${soma}`)
}