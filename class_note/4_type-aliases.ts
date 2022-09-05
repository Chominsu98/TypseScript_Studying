interface Person{
    name:string,
    age:number
}

type Person_={
    name:string;
    age:number
}

var seho:Person={
    name: "세호",
    age: 30
}
//타입과 인터페이스의 차이점은 그냥 올려보면 타입은 그대로 정보들을 다보여주지만 인터페이스는 그냥
//인터페이스라고만 뜬다
//타입은 어떤 타입이든 별칭을 달아주는 걸로 바꿔줄수있다
//타입은 확장이 안된다
//하지만 인터페이스는 extends로 확장이 가능하다 되도록이면,,인터페이스로 쓰면 좋다

type MyString=string;
var str_: MyString='hello';

type Todo={id:string;title:string; done:boolean};
function getTodo(todo: Todo){
    //요런식으로 사용가능하당!
}