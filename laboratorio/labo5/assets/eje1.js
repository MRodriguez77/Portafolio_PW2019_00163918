function verificador(arreglo){
    var number= [];
    var word = [];
    
    for (i=0; i<arreglo.length;i++){
        if(typeof(arreglo[i])=="string"){
            word++;
        }else {
            number++;
        }
    }
    console.log("el arreglo tiene " + number + " numeros");
    console.log("el arreglo tiene " + word + " palabras");
}

var arreglo=[2,4,"sublime","smash","el dios yoshi"];
verificador(arreglo);
