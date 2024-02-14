// Strings
console.log('Daniel' == 'Daniel');
console.log('Daniel' == 'Hashmi');
console.log('daniel' == 'daniel');
console.log('daniel' == 'Daniel');


// Saparate
console.log('============');

// Numbers
console.log(2 == 2);
console.log(2 < 2);
console.log(2 > 2);
console.log(2 != 2);
console.log(2 >= 2);
console.log(2 <= 2);

console.log('\n');

console.log(2 == 2 && 2 != 1);
console.log(2 > 2 && 2 == 1);
console.log(2 < 2 && 2 >= 1);
console.log(2 != 2 && 2 <= 1);
console.log(2 !== 2 && 2 === 1);
console.log(2 >= 2 && 2 <= 1);
console.log(2 >= 2 && 2 !== 1);

console.log('\n');

console.log(2 == 2 || 2 != 1);
console.log(2 > 2 || 2 == 1);
console.log(2 < 2 || 2 >= 1);
console.log(2 != 2 || 2 <= 1);
console.log(2 !== 2 || 2 === 1);
console.log(2 >= 2 || 2 <= 1);
console.log(2 >= 2 || 2 !== 1);

// Arrays Strings

let arr = ['Daniel','Hashmi'];

console.log(arr.includes('Daniel'));
console.log(arr.includes('Hashmi'));
console.log(arr.includes('Osman'));
console.log(arr.includes('Amir'));
console.log(arr.includes('daniel'));

console.log('\n');

console.log(arr[0]=='Daniel');
console.log(arr[1]=='Hashmi');


console.log('============');
// Arrays Numbers

let arrNum = [1,2,3,4,5,6,7,8,9];

console.log(arrNum.includes(2));
console.log(arrNum.includes(4.5));
console.log(arrNum.includes(10));

console.log('\n');

console.log(arrNum[0] == 4);
console.log(arrNum[4] == 5);
console.log(arrNum[4] > 2);
console.log(arrNum[4] < 2);
console.log(arrNum[4] != 2);
console.log(arrNum[4] === 2);
console.log(arrNum[4] !== 2);
console.log(arrNum[4] >= 2);
console.log(arrNum[4] <= 2);

