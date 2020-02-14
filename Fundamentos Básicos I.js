// Escribe una funci�n que devuelve un array con todos los n�mero del 1 al 255.

function arr(){
  var arr=[]
  for(var i=1; i<=255; i++){
    arr[i-1]=i;
  }
  return arr;
}
x=arr();
console.log(x);

//********************************************************************************************************************

//Escribe una funci�n que entregue la suma de todos los n�mero pares del 1 al 1000 - Puedes usar un operador de m�dulo para este ejercicio. 

function suma(num){
  var sum = 0;
  var i = 1;
  for (i ; i <= num ; i++){
    if (i % 2 === 0){
      sum = sum + i;
    }
  }
  return sum
}
console.log(suma(1000));

//*********************************************************************************************************************

//Escribe una funci�n que devuelva la suma de todos los n�meros impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

function suma(num){
  var sum = 0;
  var i = 1;
  for (i ; i <= num ; i++){
    if (i % 2 !== 0){
      sum = sum + i;
    }
  }
  return sum
}
console.log(suma(5000));

//*********************************************************************************************************************

//Escribe una funci�n que devuelva la suma de todos los valores dentro de un array

function suma(num){
  var sum = 0;
  var i = 0;
  for (i ; i < num.length ; i++){
    sum = sum + num[i];
  }
  return sum
}
console.log(suma([2,6,12,8,34,15,8,1]));

//*********************************************************************************************************************

//Dado un array con m�ltiples valores, escribe una funci�n que devuelva el n�mero mayor (ej: para [-3,3,5,7] el n�mero mayor (max) es 7). 

function suma(num){
  var max = num[0];
  var i = 1;
  for (i ; i < num.length ; i++){
    if (num[i] > max){
      max = num[i];
    }
  }
  return max
}
console.log(suma([2,6,12,8,34,15,8,1]));

//*********************************************************************************************************************

//Dado un array con m�ltiples valores, escribe una funci�n que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

function suma(num){
  var sum = 0;
  var i = 0;
  var prom
  for (i ; i < num.length ; i++){
    sum = sum + num[i];
  }
  prom = sum / num.length;
  return prom
}
console.log(suma([2,6,12,8,34,15,8,1]));

//*********************************************************************************************************************

//Escribe una funcion que devuelva un array de todos los n�meros impares entre 1 y 50 (ej: [1,3,5, �, 47,49]). Pista: Usa el m�todo �push�.

function impares(num){
  var arr = [];
  var i = 1;
  for (i ; i <= num ; i++){
    if (i % 2 !== 0){
      arr.push(i)
    }
  }
  return arr
}
console.log (impares(50));

//*********************************************************************************************************************

//Dado un valor Y, escribe una funci�n que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu funci�n devolver� 2 (hay 2 n�meros en el array mayores que 3, esto son 5 y 7). 


function impares(arr,y){
  var i = 0;
  var con = 0;
  for (i ; i <= arr.length ; i++){
    if (arr[i]>y){
      con = con + 1;
    }
  }
  return con
}
console.log (impares([34,62,12,85,23,62,83,],33));

//*********************************************************************************************************************

//Dado un array con m�ltiples valores, escribe una funci�n que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] ser� [1,25,100,4]).

function cuadrado(arr){
  var i = 0;
  for (i ; i < arr.length ; i++){
    arr[i]= arr[i]*arr[i];
  }
  return arr
}
console.log (cuadrado([34,62,12,85,23,62,83,]));

//*********************************************************************************************************************

//Dado un array con m�ltiples valores, escribe una funci�n que reemplace cualquier n�mero negativo dentro del array por 0. Cuando el programa est� listo, el array no debiera contener n�meros negativos (ej: [1,5,10,-2] se convertir� en [1,5,10,0]).

function cuadrado(arr){
  var i = 0;
  for (i ; i < arr.length ; i++){
    if (arr[i] < 0){
       arr[i]= 0;
    }
  }
  return arr
}
console.log (cuadrado([34,62,-12,85,23,-62,83,]));

//*********************************************************************************************************************

//Dado un array con m�ltiples valores, escribe una funci�n que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolver� [10,-2,3.5]).

function cuadrado(arr){
  var res = [];
  var i = 0;
  var max = arr[i];
  var min = arr[i];
  var ave = 0
  var sum = 0
  for (i ; i < arr.length ; i++){
    if (arr[i] > max){
       max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
    sum = sum + arr[i];
  }
  ave = sum/arr.length;
  res.push(max);
  res.push(min);
  res.push(ave);
  return res
}
console.log (cuadrado([34,62,-12,85,23,-62,83,]));

//*********************************************************************************************************************

//-Escribe una funci�n que intercambie el primer y el �ltimo valor de cualquier array. La extensi�n m�nima predeterminada del array es 2 (ej: [1,5,10,-2] ser� [-2,5,10,1]). 

function cuadrado(arr){
  var temp = 0
  temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;   
  return arr
}
console.log (cuadrado([34,62,-12,85,23,-62,83]));

//*********************************************************************************************************************

//Escribe una funci�n que tome un array de n�meros y reemplace cualquier valor negativo por el string �Dojo�. Por ejemplo, dado el array = [-1,-3,2], tu funci�n devolver� [�Dojo�,�Dojo�,2].

function cuadrado(arr){
  var i = 0;
  for (i ; i < arr.length ; i++){
    if (arr[i] < 0){
       arr[i]= "Dojo";
    }
  }
  return arr
}
console.log (cuadrado([34,62,-12,85,23,-62,83]));


















