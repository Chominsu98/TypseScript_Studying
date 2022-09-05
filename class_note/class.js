function Person(name,age){
    this.name=name;
    this.age=age;
}
var capt=new Person("캡틴",100);

//위와 같이원래 es6문법이 생기기 전까지는 위와같이 생성자함수를 통하여 다 구현을 하였다
//결국에는 이전에도 프로토타입 형식의 상속을 써왔음을 의미함

class Person{
    constructor(name,age){
        console.log("하핳");
        this.name=name;
        this.age=age;
    }
}

var seho_=new Person("세호",25);
console.log(seho_);

