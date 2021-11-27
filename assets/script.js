//variaveis para contabilizar hora/minuto/segundo
let hr = 0;
let min = 0;
let seg = 0;

//pegando os spans
let horaSpan = document.querySelector(".hora");
let minutosSpan = document.querySelector(".minutos");
let segundosSpan = document.querySelector(".segundos");

//variavel que ira ser usada na funcao setInterval
let cronometro;

//pegando os botoes de controle 
let btnPlay = document.querySelector(".play");
let btnPause = document.querySelector(".pause");
let btnStop = document.querySelector(".stop");

//add funcao que inicia o cronometro
btnPlay.addEventListener("click", function(){
    clearInterval(cronometro);
    cronometro = setInterval(() => {
        timer();
    }, 1000);
});

//add funcao que pausa o cronometro
btnPause.addEventListener("click", function(){
    clearInterval(cronometro);
});

//add funcao que reseta o cronometro
btnStop.addEventListener("click", function(){
    clearInterval(cronometro);
    seg = "00";
    min = "00";
    hr = "00";
    horaSpan.textContent = hr;
    minutosSpan.textContent = min;
    segundosSpan.textContent = seg;
});

//funcao principal que calcula as horas/minutos/segundos do cronometro
function timer(){
    //add segundos e inserindo o valor no spanSegundo
    seg++;
    segundosSpan.textContent = "0" + seg;
    //caso seja maior que 9 minutos adicionar somente o segundo sem o zero
    if(seg > 9){
        segundosSpan.textContent = seg;
    }

    /*caso tenha 60 segundos entao zerar a contagem dos segundos e add 1 minuto e voltar a contar
    os segundo de novo*/
    if(seg == 60){
        seg = 0;
        segundosSpan.textContent = seg;
        min++;
        minutosSpan.textContent = "0" + min;
    }

    //caso o minutos forem maiores que nove mostrar somente os minutos sem o zero
    if(min > 9){
        minutosSpan.textContent = min;
    }

    /*caso tenham passados 60 minutos entao zerar a contagem dos minutos e add 1 hora e voltar a
    contar os minutos de novo */
    if(min == 60){
        min = 0;
        minutosSpan.textContent = min;
        hr++;
        horaSpan.textContent = "0" + hr;
    }
    
    //caso a hora seja maior que nova entao mostrar somente o valor da hora sem o zero
    if(hr > 9){
        horaSpan.textContent = hr;
    }
}

//light mode
let btnLight = document.querySelector(".light");

btnLight.addEventListener("click", function(){
    let body = document.querySelector("body");
    body.classList.toggle("light-mode");
});

//funcao copyright automatico
copyright();
function copyright(){
    const copy = document.querySelector(".ano");
    copy.textContent = new Date().getFullYear();
}