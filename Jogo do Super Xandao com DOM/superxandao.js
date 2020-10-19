
function inicio(){

    titulo.innerHTML = "SUPER XANDÃO O ULTIMO HEROI DA TERRA";

    paragrafo.innerHTML = "Super Xandão acorda de seu castelo, São exatamente 3:33 da manhã.<br><br><br>Super Xandão saiu para caçar demônios!!!";

    botao.innerHTML = "Comece sua aventura!!!";

    botao.onclick = primeiraFase;

}

function primeiraFase(){

    titulo.innerHTML = "Primaria Fase";

    paragrafo.innerHTML = "Super Xandão avistou um poderoso demônio lvl 3";


    var resultado = document.querySelector('div#resultado')

    resultado.innerHTML = '<button id="b1" onclick = "derrota()">1</button id="b2"><br><br><br><button onclick = "ataquePrimeiraFase()">2</button>'



    // botao.innerText = "Não lutar";
    
    // // botao2.innerHTML = '<button>"ENCARAR ESTILO SUPER XANDÃO!!!"</button>'
    
    // botao.onclick = derrota;
    // // botao2.onclick = ataquePrimeiraFase;

}

function ataquePrimeiraFase(){

    titulo.innerHTML = "ATAQUE DE SUPER XANDÃO";

    paragrafo.innerHTML = "Super Xandão carrega um poderoso ataque ao demônio lvl 3";

    resultado.innerHTML = 'ajhfgvwgf'


//     button1.innerText = "SEM PRESSÃO, AQUI É XANDÃO!!!";

//     var ataqueX = Math.round(Math.random () * 8);

//     function ataque(){

//         if (ataqueX == 6 || ataqueX == 7 || ataqueX == 8 )
//         {
//             document.write("Super Xandão estraçalha o demônio!!! todos os outros demônios ficaram com medo, MUNDO SALVO PRA SEMPRE!!! <br><br><br> FECHE O JOGO!!!");

//         } else if (ataqueX == 3 || ataqueX == 4 || ataqueX == 5 )
//             {
//             alert("                   VITORIA!!!\n \n \nSuper Xandão lutou bem, como sempre, continue salvando o mundo Super Xandão!!!");
//             }else{
//             alert("Super Xandão teve piedade desse demônio e o deixou ir");
//         }
//     }

//     button1.onclick = ataque;

}

function derrota(){

    titulo.innerHTML = "DERROTA";

    paragrafo.innerHTML = "O MUNDO FOI TOMADO!!!";

    // botao.innerHTML = "SALVE O MUNDO SUPER XÃNDÃO!!!";

    var b1 = document.getElementById('b1')

    resultado.innerHTML = 'SCARLET SALVOU'

    b1.innerHTML = 'wfuwfo'
    
    // botao.onclick = inicio;
}
