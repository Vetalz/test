// Напишите функцию генератор chunkArray, которая возвращает итератор возвращающий части массива указанной длинны.

const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
console.log(iterator.next()); // { value: [1,2,3], done: false }
console.log(iterator.next()); // { value: [4,5,6], done: false }
console.log(iterator.next()); // { value: [7,8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }


function* chunkArray(arr, x) {
    let start = 0;
    let end = x;
    let value = [];
    const steps = Math.ceil(arr.length / x);

    for(let i = 1; i <= steps; i++) {
        value = arr.slice(start, end);
        start += x;
        end += x;
        yield value;
    }
}
