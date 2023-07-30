console.log('hello')

let a=[1,2,3,4]
let b=a

console.log(a)
console.log(b)

b[1]=5

console.log(a)
console.log(b)

let arr1=[1,2,3,4]
// spread operator
let arr2=[...arr1]   
console.log(arr1)
console.log(arr2)

console.log("after change")

arr2[2]=7
console.log(arr1)
console.log(arr2)
// spread operator for shallow copy of an array


let obj1={"key1":"value1",
        "key2":"value2"
}

console.log(obj1.key2)

// symbol(string without double cots) used for objects

let obj2 ={
    key1:"value"
    // here key1 is symbol
}
console.log(obj1["key1"])

let obj3=obj1
// pass by reference

obj3.key1="check"
console.log(obj1,obj3)

//pass by value

let obj4={...obj1}
console.log(obj1,obj4)
console.log("after change")
obj1.key1="new"
console.log(obj1,obj4)

// === -> strict type checking  checks value and type
console.log(1=='1')
console.log(1 ==='1')

// falsy value(when put inside if condition)
console.log(0 == false)


if(0){
    console.warn("1")
}
else{
    console.warn("inside else")
}

// objects

rs=
[{"fname": "XYZ","lname":"abc","id":2}]
if(rs){
    console.log(rs)
}

if(rs[0]){
    console.log(rs)
}

console.log(rs[0]?.id)





