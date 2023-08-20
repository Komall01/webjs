// const elementBycn=document.getElementsByClassName('demo');
// console.warn('elementBycn');
//const elem=document.querySelector('.demo');
//console.log(elem)

// html collection -live collection elements can be updated dynamically,cannot apply forEach loop
// nodelist- may be live or static ,it's an array like structure not an array,we can create an array from it.

function sum(x,y){
    return x+y;
}
m=sum(2,3)
console.log(m)
//reference array always const
let sum1=0;
const arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    sum1+=arr[i];
}
console.log(sum1)

let sum2=0;
for(let elem of arr){
  sum2+=elem
}
console.log(sum2)


let sum3=0;
arr.forEach((element)=>sum3+=element)
console.log(sum3)

//forEach loop in html collection gives error in this we use normal for loop
const democlass=document.getElementsByTagName('h2')
console.log(democlass)
// democlass.forEach(elem)=>console.log(elem))   error

for(let i=0;i<democlass.length;i++){
   console.warn(democlass[i])
}

//forEach loop in nodelist
const demo1=document.querySelectorAll('h1')
console.log(demo1)
demo1.forEach((elem)=>console.log(elem))


const element=document.querySelector('h2')
console.warn(element)
element.className='red'
setTimeout(()=>{element.innerText='<h1>changed from hello</h1>'
        element.style.backgroundColor='green'
},2000)


setTimeout(()=>element.innerHTML='<h1>changed from hello</h1>',2000)


const element1=document.querySelector('h3')
console.warn(element1)
setInterval(()=>{
    if(element1.textContent === 'Bye'){
        element1.innerText='party'
        element1.style.backgroundColor='pink'
    }
    else{
        element1.innerText='Bye'
        element1.style.backgroundColor='pink'
    }},2000);

    const timeId=setInterval(()=>console.warn("called"),2000);


    setTimeout(()=>{console.warn("clearing");
    clearInterval(timeId)},6000);


//events in javascript 

//Event Listners


const button=document.querySelector('.clickbutton')

button.addEventListener('click',(event)=>
{
    console.warn("Clicked !!")
    console.warn(event.target)
})

const ip=document.querySelector('.ip');
console.log(ip.value)
const inputValue =document.querySelector('.input-value')
ip.addEventListener('input',(event)=>{
    console.log(event.target.value)
    inputValue.innerText=event.target.value
})