function pergunta() {
    var num = prompt("Digite o número da sua resposta")
    var nTentativas = 100;
    while (nTentativas >= 100) {
        if (num == '1' ) {
            alert("Ufa! Ainda bem que me escolheu. SimBora!")
            location.href = "./LN-GAMEOVER.index.html"; 
            break
        } 
else{
    alert ("Me escolheu, né?! Agora surpreenda-se!")
    location.href = "./LN-GAMEOVER.index.html"; 
    break
}
    }
    
}