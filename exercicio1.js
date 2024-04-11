// 1-FRASE SALUDO ITERATIVO - Dentro de un bucle, ejecutar x veces (x según usuario) una función que te
// pida saludo (“Hola”, “Adiós”, etc) y nombre (“Marga”, “Carol”, etc ) , y al final te muestre los
// resultados en pantalla: Hola Marga, Adiós Carol (líneas separadas)
//

const mi_funcion = (s, n) => {
    console.log(s + ' ' + n);
}

for (let i = 0; i < 2; i++) {
    let saludo = prompt('Escriba un saludo:');
    let nombre = prompt('Escriba un nombre:');

    mi_funcion(saludo, nombre);
}


