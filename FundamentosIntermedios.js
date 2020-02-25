//Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos
// (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).

function sigma(n){
    var suma = 0;
    for(var i = 1; i <= n; i++){
      suma = suma + i;
    }
    return suma
  }
  console.log(sigma(6));

// Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación)
// de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).

function fac(n){
    var res = 1;
    for(var i = 1; i <= n; i++){
      res = res * i;
    }
    return res
  }
  console.log(fac(5));

  //Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática,
  // cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento,
  // un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc).
  // Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1),
  // fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3),
  // fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión.
  // Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. 

  function fibonacci1(n){ //No recursivo******
    let res1 = 0;
    let res = 1;
    if (n == 0 || n == 1){
      return n
    }
    else{
      for (var i = 2; i <= n; i++){
        res = res1 + res;
        res1 = res-res1;
      }
    }
    return res
  }
  console.log(fibonacci1(2));

  function fibonacci(n){ // Recursivo ************
    if (n == 1 || n == 0){
        return n;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
x = fibonacci(10);
console.log(x);

//Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7]
// devuelve “Liam”. Si el array es muy pequeño, devuelve null.  

function penultimo(arr){
    for(var i = 0; i < arr.length; i++){
      if (arr.length==1){
        return null
      }
      else{
        if (i == arr.length - 2){
          return arr[i]
        }
      }
    }
  }

  console.log(penultimo(['dia',78]))

//Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], 
//devuelve 4. Si el array es muy pequeño, devuelve null. 

function elemento(arr,n){
    for(var i = 0; i < arr.length; i++){
      if (arr.length < n){
        return null
      }
      else{
        if (i == arr.length - n){
          return arr[i]
        }
      }
    }
  }
  console.log(elemento(['dia',33,10,8,78],5))

//Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7],
// devuelve 7.  Si el array es muy pequeño, devuelve null.

function segundomax(arr){
    var max = arr[0];
    var max2 = 0;
    if (arr.length < 2){
        return null
    }
    for(var i = 1; i < arr.length; i++){
      if (arr[i] > max){
        max2 = max;
        max = arr[i];
      }
      else{
        if (arr[i] > max2){
          max2 = arr[i];
        }
      }    
    }
    return max2
  }
  console.log(segundomax([120,82,75,200]))
 
//Crea una función que cambie un array dado duplicando cada uno de sus elementos en una posición par,
// y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", 42, 42, false].

function duplicado(arr){
  var arr2 = [];
  for (var i = 0; i < arr.length; i++){
    if(i%2==0){
      arr2.push(arr[i]);
      arr2.push(arr[i]);
    }
    else{
      arr2.push(arr[i]);
    }
  }
  return arr2
}
console.log(duplicado([23,4,76,12,98,45,56,23,1]))