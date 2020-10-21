
function inicio(){

    var resultado = document.querySelector('div#resultado')

    titulo.innerHTML = "SUPER XANDÃO O ULTIMO HEROI DA TERRA";

    paragrafo.innerHTML = "Super Xandão acorda de seu castelo, São exatamente 3:33 da manhã.<br><br><br>Super Xandão saiu para caçar demônios!!!";

    resultado.innerHTML = '<button onclick = "primeiraFase()">Comece sua aventura!!!</button>';

}

function primeiraFase(){
    
    var resultado = document.querySelector('div#resultado')

    titulo.innerHTML = "Primaria Fase";

    paragrafo.innerHTML = "Super Xandão avistou um poderoso demônio lvl 3";

    resultado.innerHTML = '<button onclick = "derrota()">Não lutar</button><br><br><br><button onclick = "ataquePrimeiraFase()">ENCARAR ESTILO SUPER XANDÃO</button>';

}

function ataquePrimeiraFase(){

    titulo.innerHTML = "ATAQUE DE SUPER XANDÃO";

    paragrafo.innerHTML = "Super Xandão carrega um poderoso ataque ao demônio lvl 3";

    resultado.innerHTML = '<button onclick = "ataque()">SEM PRESSÃO, AQUI É XANDÃO!!!</button>';

}

function ataque(){
            
    var ataqueX = Math.round(Math.random () * 8);

    if (ataqueX == 7 || ataqueX == 8 )
    {
        document.write("Super Xandão estraçalha o demônio!!! todos os outros demônios ficaram com medo, MUNDO SALVO PRA SEMPRE!!! <br><br><br> FECHE O JOGO!!!");

    } else if (ataqueX == 2 || ataqueX == 3 || ataqueX == 4 || ataqueX == 5 || ataqueX == 6)
        {
        onclick = segundaFase("                   VITORIA!!!\n \n \nSuper Xandão lutou bem, como sempre, continue salvando o mundo Super Xandão!!!");
        }else{
        onclick = derrota("Super Xandão teve piedade desse demônio e o deixou ir");
    }
}

function segundaFase(){

    titulo.innerHTML = "ULTIMO DEMONIO CONTRA NOSSO HEROI";

    paragrafo.innerHTML = "Super Xandão vence sua ultima batalha de forma justa, porém ninguém tem chance contra nosso heroi, mas um ultimo inimigo surge, oque vc vai fazer Super Xandão???";

    resultado.innerHTML = '<button onclick = "derrota()">Não lutar dessa vez</button><br><br><br><button onclick = "ataqueSegundaFase()">ENCARAR ESTILO SUPER XANDÃO <strong> SEMPRE!!!<strong></button>';

}

function ataqueSegundaFase(){

    titulo.innerHTML = "ATAQUE DE SUPER XANDÃO";

    paragrafo.innerHTML = "Super Xandão carrega um poderoso ataque contra seu ultimo inimigo";

    resultado.innerHTML = '<button onclick = "ataqueDeVitoria()">SUPER DOUBLE BICEPS!!!</button><br><br><br><button onclick = "derrota2()">Ataque Terra Redonda</button>';

}

function ataqueDeVitoria(){

    titulo.innerHTML = "MUNDO SALVO PRA SEMPRE";

    paragrafo.innerHTML = "Super Xandão tem alma de campeão, nunca perde uma luta, mundo permanecerá salvo enquanto Super Xandão existir";

    resultado.innerHTML = '<button onclick = "inicio()">CONTINUE SALVANDO O MUNDO SUPER XÃNDÃO!!!</button>'
}

function derrota(){

    titulo.innerHTML = "DERROTA";

    paragrafo.innerHTML = "O MUNDO FOI TOMADO!!!";

    resultado.innerHTML = '<button onclick = "inicio()">SALVE O MUNDO SUPER XÃNDÃO!!!</button>'

}

function derrota2(){

    titulo.innerHTML = "DERROTA";

    paragrafo.innerHTML = "A TERRA FICOU PLANA QUANDO SUPER XANDÃO PISOU NELA!!!";

    resultado.innerHTML = '<button onclick = "inicio()">SALVE O MUNDO SUPER XÃNDÃO!!!</button>'

}