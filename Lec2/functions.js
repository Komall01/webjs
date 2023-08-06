// declaration function/function keyword

function addNumbers(x,y){
    return x+y
}

console.log(addNumbers(4,5))

function addMultiple(...args){
    console.log(args)
}

addMultiple(1,2,3,4,5)

// expression function-> store a anonymous funct/funct inside an expression,used in callbacks

let subtractNumbers=function(x,y){
    return x-y;
}

console.warn(subtractNumbers(5,2))

// expression arrow function

let multiplyNumbers = (x,y)=>x*y
console.warn(multiplyNumbers(4,2))

let exponent=(x,y)=>x**y
console.warn(exponent(2,5))

let arr=[1,2,1,2]
let sumArr =(arr)=>{
    let sum=0
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i]
    }
    return sum
}

console.warn(sumArr(arr))

// block scope  ->let,const
let b=[1,2,3,0]
let max=0
function maxNum (arr){
    for(let i=0;i<b.length;i++)
    {
        if(b[i]>max)
        {
            max=b[i]
        }
        
    }
    return max
}
console.log(max)
// console.log(i)
console.log(maxNum(b))


var ind
console.log(ind)
ind = 5
// var promotes variable hoisting 
console.log(test)
var test=7


// callback function