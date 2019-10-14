function areaCirculo(r){
    if(r <= 0){
        console.log(-1)
    }else{
        var i = (3.1416 * Math.pow(r,2));
        console.log("el area es: " + i);
    }
}

areaCirculo(2);