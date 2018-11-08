//Array Iterators
// forEach
// loop through Array
// call a callback function


//forEach
const names = ['john', 'james', 'helena', 'jimmy', 'toni']

// for( let i =0; i<names.length; i++){
//   console.log(names[i])
// }

// names.forEach(function(name){
//   console.log(name);
// })

names.forEach(showName);

function showName(name){
  console.log(name)
}


//filter array
const numbers = [0,1,2,3,4,5,6,7,9];
// // for loop
// let even = [];
// for (let i =0; i<numbers.length; i++){
//   if (numbers[i] %2===0){
//     even.push(numbers[i]);
//   }
// }

// console.log(even);

const even = numbers.filter(function(number){
  return number % 2 ===0;
})

console.log(even);

//map

const numbers = [0,1,2,3,4,5];

let timesTwo=[];
for (let i =0; i<numbers.length; i++){
  let times = numbers[i] * 2;
  timesTwo.push(times);
}

console.log(timesTwo);

const timesTwo= numbers.map(function(number){
  return number *2;
})

console.log(timesTwo);

const names = ['bob', 'susan', 'tony'];

const fullNames = names.map(function(name){
  console.log(name);
  return `${name} anderson`;
})

console.log(fullNames)

//reduce

const numbers = [0, 1, 2, 3, 4, 5];

const total = numbers.reduce(function(acc, curr){
  console.log(curr);
  console.log('this is a total ' + acc);
  acc = acc + curr;

  return acc;
},0);

console.log(total);

const fruits = ['orange', 'pear', 'banana', 'orange', 'pear', 'banana']

const distinct = fruits.reduce(function(acc,curr){
  console.log(curr);
  if(acc.lastIndexOf(curr)===-1){
    acc.push(curr);
  }
  return acc;
},[])

console.log(distinct)
