// !!!не полное решение

// Напишите функцию обертку, которая на вход принимает массив функций и их параметров, 
// а возвращает массив результатов их выполнения. 
// Количество аргументов исполняемой функции не ограничено!


function cb(a) {
    return a;
};


const f1 = (cb) => cb(1)
const f2 = (a, cb) => cb(a)
// const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}
const f3 = (a, b, cb) => cb([a, b])



async function bulkRun(arr) {
    let result = []
    for (let i of arr) {
        result.push(i[0](...i[1], cb))
    }
    return result

}

bulkRun([[f1, []], [f2, [2]], [f3, [3, 4]]]).then(console.log)    //[1, 2, [3, 4]]

