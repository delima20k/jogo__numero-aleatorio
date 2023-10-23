//  VAEIAVEIS!
const  verificarChute = document.querySelector('#btChutar');
const reiniciar = document.querySelector('#reiniciar');
let tentativas = 1;
let numeroAleatorio = gerarNumAleatorio();

//função que  exibe os textos na tala!
function criarTexto(teg,texto){
     let campo =  document.querySelector(teg);
     campo.innerHTML = texto
     responsiveVoice.speak(texto,'Brazilian Portuguese Famale',{rate: 1.2});
   
}
function exibirTextoInicial(){
    criarTexto('h1', `Jogo do número Secreto`);
    criarTexto('p',`Entre 1 e 10`);
    
}
exibirTextoInicial();

 verificarChute.addEventListener('click',()=>{
    verificar();
   
 });

 // função do munero aleatorio!
 function gerarNumAleatorio(){
   return parseInt(Math.random()* 10 + 1);
    }  

 //função que verifica a condição do jogo!
 function verificar(){
    let chute = document.querySelector('input').value;
    if(chute == numeroAleatorio){
        let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
        criarTexto('p',`Parabêns vc acertou em ${tentativas} ${palavra}, o numero é ${numeroAleatorio}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else if(chute > numeroAleatorio){
        criarTexto('p',`não foi desta vez o numero é menor que ${chute}`);
    }else{
        criarTexto('p',`não foi desta vez o numero é maior que ${chute}`);
    }
    tentativas++;
    limparCampo()
}
function limparCampo(){ 
     chute = document.querySelector('input');
    chute.value ='';
}

reiniciar.addEventListener('click',()=>{
    numeroAleatorio = gerarNumAleatorio()
  limparCampo();
   tentativas = 1;
   exibirTextoInicial();
   reiniciar.setAttribute('disabled',true);
})

