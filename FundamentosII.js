// Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”.
// Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

function bigger(arr){
    let i = 0;
    for(i; i < arr.length; i++){
        if (arr[i] >= 0) {
            arr[i] = "big";    
        }
    }
    return arr
}
console.log (bigger([12,6,-7,23,-76,32,-99,9]));

//**********************************************************************************************************************
//Crea una función que tome un array de números. La función debería imprimir (print)
// el menor valor del array, y devolver (return) el mayor. 

function valors(arr){
    let i = 0;
    let min = [i];
    let max = [i];
    for(i; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];    
        }
        if (arr[i] > max){
            max = arr[i];
        }
    }
    console.log (min);
    return max
}
valors([12,6,-7,23,-76,32,-99,9]);

//**********************************************************************************************************************
//Crea una función para un array de números. La función debería imprimir (print) 
//el penúltimo valor y devolver (return) el primer valor impar.

function penultimo(arr){
    var i = 0;
    var cont = true;
    var impar = 0;
    for(i; i < arr.length; i++){
        if (arr[i] % 2 !== 0 && cont === true) {
            impar =  arr[i];
            cont = false;
        }
        if (i === arr.length - 2){
            console.log(arr[i]);
        }
    }
    return impar
}
penultimo([12,6,7,23,-76,32,-99,9]);

//**********************************************************************************************************************
//Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique.
// Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

function doble(arr){
    let i = 0;
    for(i; i < arr.length; i++){
        arr[i] = arr[i] * 2;
    }
    return arr
}
console.log (doble([12,6,-7,23,-76,32,-99,9]));

//**********************************************************************************************************************
// Dado un array de números, crea una función para reemplazar el último valor con el número de valores 
//positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].

function replace(arr){
    let i = 0;
    let cont = 0;
    for(i; i < arr.length; i++){
        if (arr[i] >= 0) {
            cont = cont + 1;  
        }
        if (i === arr.length-1){
            arr[i]=cont;
        }
    }
    return arr
}
console.log (replace([12,6,-7,23,-76,32,-99,9]));

//**********************************************************************************************************************
//Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos,
// imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

function pares(arr){
    var i = 0;
    var cont_par = 0;
    var cont_impar=0;
    for(i; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            cont_impar = 0;
            cont_par = cont_par + 1;
            if (cont_par == 3){
              console.log ("¡Es para bien!");
              cont_par = 0;
            }
        }
        else{
            cont_impar = cont_impar + 1;
            cont_par = 0;
            if (cont_impar == 3){
                console.log ("¡Qué imparcial!");
                cont_impar = 0;
            }
        }
    }
    return arr
}
pares([12,6,8,23,-77,33,-99,9]);

//**********************************************************************************************************************
//Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos 
//cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 

function segundos(arr){
    let i = 0;
    for(i; i < arr.length; i++){
        if (i % 2 !== 0) {
            arr[i] = arr[i] + 1;
        }
      console.log (arr[i]);
    }
    return arr
}
segundos([12,6,-7,23,-76,32,-99,9]);

//**********************************************************************************************************************
//Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings,
// reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior.
// Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4].
// Pista: ¿For loops solo puede ir hacia adelante?

function caracteres(arr){
    var i = 1;
    temp = arr[0]
    for(i; i < arr.length ; i++){
      temp2=arr[i];
      arr[i] = temp.length;
      temp = temp2
    }
    return arr
}
console.log (caracteres(['hola','carbon','acaricia','barquisimeto','david','juan']));

//**********************************************************************************************************************
//Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original,
// pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver
// [8,9,10] en un nuevo array. 

function siete(arr){
    let i = 0;
    let arr2 = [];
    for(i; i < arr.length; i++){ 
      arr2.push(arr[i]+7);
    }
    return arr2
  }
  console.log (siete([12,6,-7,23,-76,32,-99,9]));

//**********************************************************************************************************************
//Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2))
// devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array 
//temporal vacío. (Pista: necesitarás intercambiar (swap) valores).

function inver(arr){
    let i = 0;
    let a = arr.length / 2;
    let temp=0;
    let x = 0;
    for(i; i < a; i++){ 
      x = x + 1;
      temp = arr[i];
      arr[i]=arr[arr.length-x];
      arr[arr.length-x] = temp;
    }
    return arr
  }
  console.log (inver([12,6,-7,23,-76,32,-99,9,8]));

//**********************************************************************************************************************
//Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original,
// pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

function nega(arr){
    let i = 0;
    let arr2 = [];
    for(i; i < arr.length; i++){
      if(arr[i]<0){
        arr2.push(arr[i]);
      }
      else{
        arr2.push(arr[i]*-1);
      }
    }
    return arr2
}
console.log (nega([12,6,-7,23,-76,32,-99,9]));

//**********************************************************************************************************************
// Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores
// sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 

function hambriento(arr){
    let i = 0;
    let hambre = 0;
      for(i; i < arr.length; i++){
          if (arr[i] === 'comida') {
              console.log("yummy");
              hambre = 1;
          }
        }
          if (hambre === 0){
          console.log("tengo hambre")
      }
    return arr
  }
  hambriento([12,6,-7,'comida',-76,32,-99,9]);

//**********************************************************************************************************************
//  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo:
// cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, true]. 
//cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 

function cambio(arr){
    let i = 0;
    let a = arr.length / 2;
    let temp=0;
    let x = 0;
    for(i; i < a; i++){ 
      x = x + 1;
      if (i === 0 || i % 2===0){
        temp = arr[i];
        arr[i]=arr[arr.length-x];
        arr[arr.length-x] = temp;
      }
    }
    return arr // se que no es necesario el retur pero lo coloque para ver el resultado
  }
  console.log (cambio([12,6,-7,23,-76,32,-99,9,8]));

//**********************************************************************************************************************
//Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num,
// y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].

function mult(arr,num){
    let i = 0;
    for(i; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr
}
console.log (mult([12,6,-7,23,-76,32,-99,9],8));