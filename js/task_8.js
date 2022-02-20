// Напишите функцию nodeChildCount которая получает на вход объект типа Node и возвращает число
//  всех вложенных нодов, аргумент deep указывать глубину подсчета если не указан то бесконечно

const div = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');
// const h1 = document.createElement('h1');
// const p2 = document.createElement('p');

p.appendChild(span);
// p.appendChild(h1);
div.appendChild(p);
// div.appendChild(p2);

console.log(nodeChildCount(div))             // 2
console.log(nodeChildCount(div, 1))          // 1
console.log(nodeChildCount(div, 2))          // 2


function nodeCount(node, deep = Infinity) {
    let n = 0;
    if (deep === 0) {
        return n + 1;
    }
    if (node.childNodes.length > 0) {
        for (let i of node.childNodes) {
            n += nodeCount(i, deep - 1);
        }
    } 
    return n + 1; 
}

function nodeChildCount(node, deep = Infinity) {
    return nodeCount(node, deep) - 1;
}
