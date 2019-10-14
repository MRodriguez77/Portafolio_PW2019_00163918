function sumador(arreglo){
    var x = 0;
    for(var i=0; i<arreglo.length;i++){
        x+=arreglo[i];
    }

    console.log("la suma total es: " + x);
    console.log("el promedio es: " + x/arreglo.length);
}

var arreglo= [1,2,3,4,5,6,7,8,9];
sumador(arreglo);