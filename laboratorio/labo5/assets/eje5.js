function palindroma(palabra){
    var esPalindroma=true;
    var original = palabra.split("");
    var invertida = palabra.split("").reverse("");

    for(var i=0;i<original.length;i++){
        if(invertida[i] != palabra[i]){
            console.log("no es palindroma ");
            esPalindroma = flase;
            break;
        }
        if(esPalindroma == true){
            console.log("simon es palindroma ")
        }
    }
}

palindroma("reconocer");