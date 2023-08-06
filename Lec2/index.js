console.log("Hiiiii")

let typeString = 'adcdb';
//let typeNumber = parseInt(typeString);
//let typeNumber =Number(typeString);
let typeNumber = + typeString;

console.warn(typeNumber, typeof typeNumber)


console.log(3+3)
console.log('3'+'3')
console.warn('3'+3)


console.log(3-3)
console.log('3'-'3')
console.log('3'-3)

console.log('2'*'2')
console.log('2'*2)
console.log('2'/2)

// NAN ->is it anumber or not

let a=[1,2,3,4]
let sum=0;
for(let i=0;i<a.length;i++)
{
    sum+=a[i]
}
console.log(sum)


// for each loop
for(let elem of a)
{
    sum+=elem
}
console.warn(sum)