let array = [1, 1, 1, 2, 3, 4, 5, 5, 66, 6, 6, 7, 77, 8, 8, 8888, 9]; // створено масив з цифрами [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9]

for (let i = 0; i < array.length; i++) {  // перебрано масив, додано 5 до кожного числа, виведено в консоль результат
    console.log(array[i] += 5);

}

let arrayInToSet = new Set(array);   //на базі масиву створено Set унікальних значень 
let sum = 0;
arrayInToSet.forEach(value => {    // кожне число збільщено на 2
    sum += (value + 2);

    console.log(sum);   // виведено суму в консоль
})



// створено мапу з літерами алфавіту і знaченнями з Set  
let map = new Map();
for (let i = 97; i <= 108; i++) {
    letter = String.fromCharCode(i);
    map.set(letter);
}
let keys = Array.from((map.keys())).join(''); // зроблена конкатенація ключів з мапи

let recentMap = new Map();
for (let i = 0; i < arrayInToSet.size; i++) {
    let key = keys[i];
    let value = Array.from(arrayInToSet)[i];
    recentMap.set(key, value);
}

console.log(recentMap); // виведено кінцеву мапу в консоль 

