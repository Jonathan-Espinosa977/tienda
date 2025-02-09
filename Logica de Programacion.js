
function cercaDeCero(arr) {
    if (arr.length === 0) { // Verificamos si el array está vacío
        throw new Error('El array no puede estar vacío');
    }
    let closest = arr[0]; // Inicializamos la variable para almacenar el número más cercano a cero
    for (let i = 1; i < arr.length; i++) { // Recorremos el array para encontrar el número más cercano a cero
        if (Math.abs(arr[i]) < Math.abs(closest) || // Comparamos la distancia al cero de los números
            (Math.abs(arr[i]) === Math.abs(closest) && arr[i] > closest)) {
            closest = arr[i];
        }
    }
    return closest;
}

// Casos de prueba
const testCases = [
    [0],                // Caso con solo 0, debe devolver 0
    [9, -1, -7, 0, 0],  // Caso con 0 como el número más cercano
    [-8, -3, 3, 8],     // Caso con empate (-3 y 3), debe devolver 1
    [-9, -5, -2],      // Caso con números negativos, debe devolver -2
    [6, 8, 11, 9],       // Caso con solo números positivos, debe devolver 1
    [-10, 10]             // Caso con empate entre -10 y 10, debe devolver 1
];

// Ejecución de los casos de prueba
testCases.forEach((arr, index) => {
    console.log(`Caso ${index + 1}: ${cercaDeCero(arr)}`);
});
