var new1=0;
var old=0;
var serieFibo =[];

for(i=0;i<10;i++){
    if(new1 == 0){
        new1= new1 + 1;
        serieFibo.push(old);
    }
    if(new1 == 1){
        serieFibo.push(new1);
        serieFibo.push(new1);
        new1 = new1 + new1;
        old = new1-1;
    }
    if(new1 >= 2){
        new1 = new1 + old;
        old = new1 - old;
        serieFibo.push(new1);
    }
}

console.log(serieFibo);

