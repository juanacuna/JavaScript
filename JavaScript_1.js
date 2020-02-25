function a(){
    return 35;
}
console.log(a())

Salida: 35
*******************************************************************

function a(){
    return 4;
}
console.log(a()+a());

Salida: 8
*******************************************************************

function a(b){
    return b;
}
console.log(a(2)+a(4));

Salida: 6
*******************************************************************

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

Salida: 3, 9
*******************************************************************

function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));

Salida: 40
*******************************************************************

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

Salida: 4
******************************************************************

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

Salida: 10,3,30
******************************************************************

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

Salida: 3,4
******************************************************************

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

Salida: 2, 5, 8, 11
******************************************************************

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

Salida: 0,1,2,3,4,5,6,7,8,9, 0,1,2,3,4,5,6,7,8,9,0
******************************************************************

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

Salida: no se llama a la funcion
******************************************************************

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

Salida: no se llama a la funcion
*****************************************************************

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

Salida: 10
*****************************************************************

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

Salida: 15, 10
****************************************************************

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

Salida: 15, 15
****************************************************************