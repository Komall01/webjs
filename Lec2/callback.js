function callback1(callback2param){
    console.warn("callback1 called")
    callback2param()
}
function callback2(){
    console.warn("callback2 called")
}

function mainfunction(callback1param,callback2param){
    console.warn("performing main function tasks")
    callback1param(callback2param)  //callback
}

mainfunction(callback1,callback2)


