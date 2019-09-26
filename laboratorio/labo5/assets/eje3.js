function existencias(arreglo,valor){
    var x = 0;
    for(i=0;i<arreglo.length;i++){
        if(valor == arreglo[i]){
            x++;
        }
    }
    console.log("la cantidad de repeticiones del numero son: " + x);
}

var arreglo=[2,2,3,4,4,5,6,7,3];
existencias(arreglo,4);