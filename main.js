/*
EJERCICIOS DE REPASO ES6
1 - Haz una función capaz de revertir el orden de los caracteres de un string dado por un usuario.
2 - Construye una función que sea capaz de comprobar si una variable es un array o no lo es.
3 - Construye una función capaz de clonar un array.
4 - Escribe una función capaz de borrar elementos duplicados del siguiente array.
let array1 = ["Lunes","Martes","Miércoles","Lunes","Jueves","Viernes","Viernes","Sabado","Domingo"];
5 - Escribe una función capaz de concatenar dos arrays.
let array2 = [1,2,3,4,5,6,7,8,9]; let array3 = [10,11,2,3,4,12,13,14,15];
6 - Modifica la función anterior para excluir aquellos elementos que se repitan en el array concatenado.
7 - Diseña una función en Javascript que acepte un número como parámetro y compruebe si este número
es primo o no.
*/

//1 - Haz una función capaz de revertir el orden de los caracteres de un string dado por un usuario.
let inOrder = "vjosahdbvhdasiufjksandfjvbas"

const reverseFunc = x =>{
   let newArr = [];
   newArr = [...x];
   newArr.reverse();
   newArr.join("");
   return newArr;
}
//2 - Construye una función que sea capaz de comprobar si una variable es un array o no lo es.

const isanarr = x =>{
    return Array.isArray(x);

}
//3 - Construye una función capaz de clonar un array.

const clonArr = x =>{
    if(!x.Array.isArray) return console.log('no me has dado un array');
    return JSON.parse(JSON.stringify(x));
}

//4 -Escribe una función capaz de borrar elementos duplicados del siguiente array.
//let array1 = ["Lunes","Martes","Miércoles","Lunes","Jueves","Viernes","Viernes","Sabado","Domingo"];

const cleanArr = x =>{
    if(!x.Array.isArray) return console.log('no me has dado un array');
    return [...new Set(x)];
}
//5 - Escribe una función capaz de concatenar dos arrays.
//let array2 = [1,2,3,4,5,6,7,8,9]; let array3 = [10,11,2,3,4,12,13,14,15];

const concatArr = (x,y) =>{
    if(!x.Array.isArray || !y.Array.isArray) return console.log('no me has dado un array');
    return x.concat(y) 
}
//6 - Modifica la función anterior para excluir aquellos elementos que se repitan en el array concatenado.

const cleanConcatArr = (x,y) =>{
    if(!x.Array.isArray || !y.Array.isArray) return console.log('no me has dado un array');
    let p = x.concat(y)
    return [...new Set(p)]
}
//7 - Diseña una función en Javascript que acepte un número como parámetro y compruebe si este número
//es primo o no.

const esPrimo = x => {
    if(isNaN(x)) return console.log('no has introducido un número')
    if (x == 0 || x == 1 || x == 4) return false;
    for (let i = 2; i < x / 2; i++) {
    if (x % i == 0) return console.log('el numero no es primo');
    }
    return console.log('el numero es primo');
    }