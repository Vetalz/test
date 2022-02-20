// Дана матрица (двумерный массив), нужно написать функцию, 
// которая будет находить наименьшее значение, после чего 
// все нечетные значения в матрице будет умножать на это число.

console.log(changeMatrix([[5, 3, 6], [7, 11, 2], [15, 9, 4]]));    //[[10, 6, 6], [14, 22, 2], [30, 18, 4]]


function changeMatrix(matrix){
    let localMin = 0;
    let min = Math.min(...matrix[0]);
    let newMatrix = [];
    let newArr = [];
    for (let i = 1; i < matrix.length; i++) {
        localMin = Math.min(...matrix[i]);
        if (localMin < min) {
            min = localMin;
        }
    }
    for (let i of matrix) {
        for (let n of i) {
            if (Math.abs(n % 2) > 0) {
                newArr.push(n * min);
            } else {
                newArr.push(n);
            }
        }
        newMatrix.push(newArr);
        newArr = [];
    }
    return newMatrix;
}
