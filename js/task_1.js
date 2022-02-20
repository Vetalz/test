// Напишите функцию deepEqual для проверки двух обьектов на идентичность.

console.log(deepEqual({name: 'test'}, {name: 'test'}));                                                    // true
console.log(deepEqual({name: 'test'}, {name: 'test1'}));                                                   // false
console.log(deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}}));                // false
console.log(deepEqual({name: 'test'}, {name: 'test', age: 10}));                                           // false


function deepEqual(obj_1, obj_2) {
    let a = JSON.stringify(obj_1);
    let b = JSON.stringify(obj_2);

    if (a !== b) {
        return false;
    }
    return true;
}
