let umaString = 'Um texto';

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3));

console.log(umaString.lastIndexOf('m', 3));

console.log(umaString.search(/x/));

console.log(umaString.replace('Um', 'Outra'))

console.log(umaString.length);

console.log(umaString.slice(1, 5));

console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())

