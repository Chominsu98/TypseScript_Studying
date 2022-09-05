interface User{
    age: number;
    name: string;
}
//대체로 인터페이스는 api로 호출되서 오는 데이터의 형태를 미리 선언해놓을 수 있어 자주사용함

//변수에 활용한 인터페이스
var seho:User={
    age:33,
    name:'세호'
}
//즉 이와같이 명시를 하면 가져다 쓸수있음

//함수에 활용
function getUser(user:User){
    console.log(user);
}

getUser({
    age:40,
    name:"ㅋㅋ"
})

//함수의 스펙에 인터페이스를 활용-미리 사전적으로 정의해놓을 수 있다.
interface SumFunction{
    (a:number,b:number): number;
}

var sum:SumFunction;
sum=function(a:number,b:number): number{
    return a+b;
}

//인덱싱
interface StringArray{
    [index: number]: string
}

var arr_: StringArray=['a','b','c'];
arr[0]=10

//딕셔너리 패턴
interface StringRegexDictionary{
    [key:string]: RegExp
    //정규표현식 생성자임
}

var obj_: StringRegexDictionary={
    cssFile:/\.js$/,
    //이와 같이 정규표현식을 안 넣어주면 오류뜸 왜냐하면애초에 인터페이스에 구조들을 이미 정의했기에   
}

// obj_["cssFile"]='a'
//이와같은건 에러가 뜰 수밖에,,,

//인터페이스 확장
interface Person{
    name:string;
    age: number;
}

//이와같이 새로운 인터페이스를 쓸때 상속할게 있으면 상속받을 수 있음
interface Developer extends Person{
    language: string;
}

var capt: Developer={
    language:"hi",
    name:"hihhi",
    age:55
}