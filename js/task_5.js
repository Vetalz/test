// Напишите метод arrayToObject, который превращает массив в объект (использовать рекурсию).
var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];
console.log(arrayToObject(arr));            // {name: 'developer', age: 5, skills: {html: 4, css: 5, js: 5}

function arrayToObject(arr) {
    let obj = {};
    for (let i of arr) {
        if (typeof(i[1]) != 'object') {
            obj[i[0]] = i[1];
        } else {
            obj[i[0]] = arrayToObject(i[1]);
        }
    }
    return obj;
}
