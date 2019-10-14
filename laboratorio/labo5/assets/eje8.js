/*
function binario(valor){
    if(valor >=8){
        binario (valor/8);
        console.log(valor%8)
    }else{
        console.log(valor%8);
    }
}
*/
function binario2(valor){
    var x=0;
    x = alert(valor.toString(2))
    console.log(x);
}

binario2(7);