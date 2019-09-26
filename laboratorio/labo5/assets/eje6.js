function ordenar(arreglo){
    for(var i=0;i<arreglo.length; i++){
        for(var j=0;j<arreglo.length -1;j++){
            if(arreglo[j+1]< arreglo[j]){
                var aux = arreglo[j+1];
                arreglo[j+1] = arreglo[j];
                arreglo[j] = aux;
            }
        }
    }
    return arreglo;
}

console.log(ordenar([3,4,5,6,7]));