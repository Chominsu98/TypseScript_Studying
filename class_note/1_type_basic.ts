//js 문자열 선언
//let str=""
//ts문자열 선언
let str:string="hello";
let num:number=1;

let arr:Array<number>=[1,2,3];
//위 아래는 똑같다 단지 아래가 더 간단한 표현법
let itmes:number[]=[1,2,3];
let heros:Array<String>=["capt","thor"]
//문자열만 넣을 수 있는 배열

//ts 튜플
let address:[string,number]=["gangnam",1];
//튜플은 한 자료형이 아니라 특정 위치에 여러개의 자료형을 넣은 수 있는 형태

//TS 객체
let obj:object={};
// let person:object={
//     name:"capt",
//     age:25
// }
//이와 같이 간단하게 객체를 표현할 때에는 이와같이 쓸수 있다

let person:{name:string,age:number}={
    name:"capt",
    age:25
}

//ts 진위
let show:boolean=true;
console.log("hihih")