function callback(){
    console.log("callback performing tasks")
}


function mainfunction(callbackparam){
    console.log("main fuction task")
    callbackparam(callback)
}