// Написать обратный метод (см. задачу 5) objectToArray, который из объекта создаст массив.

let obj = {
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
}
console.log(objectToArray(obj));    // [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]


function objectToArray(obj) {
    let arr = [];
    for (key in obj) {
        if (typeof(obj[key]) != 'object') {
            arr.push([key, obj[key]]);
        } else {
            arr.push([key, objectToArray(obj[key])]);
        }
    }
    return arr;
}
