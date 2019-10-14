function aleatoria(numero){
    valores=[];
    validacion=false;
    var numeroAleatorio;

    for(var i=0;i<20;i++){
        numeroAleatorio=(Math.floor(Math.random()*100)+1);
        valores.push(numeroAleatorio);
    }
    for(var j=0;j<20;j++){
        if(numero===valores[j]){
            console.log("won :D");
            validacion=true;
            break;
        }
    }
    if(validacion==false){
        console.log("you lost D:");
    }
    return valores;
}