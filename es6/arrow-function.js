//Es5 함수 선언식
function sum(a,b){
    return a+b;
}

//ES5함수 표현식
var sum=function (a,b){
    return a+b;
}

//es6 함수표현식(화살표함수)
var sum=(a,b)=>{
    return a+b
}

var sum=(a,b)=>a+b;


//화살표함수 타입스크립트 버젼

var sum=(a:number,b:number):number=>{
    return a+b;
}

