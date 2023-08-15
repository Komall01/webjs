function callback(){
    console.log("performing task of callback function")
}

function mainfunction(callback){
    console.log("performing main function tasks")
    callback();
}

//mainfunction(callback)


//anonoymous arrow function
mainfunction(() => {
    console.log("performing task of callback function")
    console.log("Second line") })



// let,const is block scope .var is function scope->variable hoisting.


// why to pass reference to function? -> you can change the function on run time .if you don't pass the reference then only one funct will be called again and again


//function callback(){
//   console.warn("from func")  }


//function mainfunction(callbackparam){
 // console.log("Main func")
 // callbackparam()

//}
// mainfunction{()=> {console.warn("Changed")}}
//mainfunction{()=> {console.warn("Changed2 ")}}


//settimeout function
// 1st parameter callback funct, or any fuction to be called
//2nd param is time in milisec
//after 5 sec call this callback func

function callBackTimeOut(){
    console.warn("Callll")
}

setTimeout( callBackTimeOut, 5000);
setTimeout(()=>console.warn("arrow call"),8000);

const timeId=setInterval(()=>console.warn("called"),5000);

setTimeout(()=>{console.warn("clearing");
    clearInterval(timeId)},12000);

// DOM:->Document :HTML structure
//      object :anaysing document with javascript object
//      Model

//getelementbyid,getelementbyclassname
//any selector in query selector

