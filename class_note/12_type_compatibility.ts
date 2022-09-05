interface Developer{
    name:string;
    skill:string;
}

interface Person___{
    name:string;
}

var developer:Developer;
var person:Person___;

developer=person;
//developer의 속성에서 프로퍼티가 지금 skill까지 갖고있는데 person은 지금 줄 수있는 skill이 없기에 
//구조적으로 호환이 안된다
//하지만 반대로 오른쪽 할당하는게 더 많고 왼쪽이 적다면 어쨌든 줄수있는게 많으니 가능하므로 괜찮다
//ex)person=developer

//구조적 타이핑에서 중요한것은 인터페이스든 클래스인 것은 상관없구
//그안에 가지고 있는 프로퍼티가 중요
//무조건 더 많은 프로퍼티가 오른쪽에서 할당해주는게 포인트!

//함수
// function a(){

// }
// 이런 표현방법은 주로 함수 선언식이라고 함

//이런건 변수에 함수를할당하는 함수표현식 방식
var add=function(a:number){
    console.log(a);
}

var sum=function (a:number,b:number){

}
add=sum;
//이와 같이 함수에서의 구조적타이핑은 인터페이스-객체 쪽이랑 반대로 인자를 받을때
//오른쪽이 더 작아야 가능하게된다 왜냐하면 두개의 인자를 하나의 인자에 할당할려하니 오류가 날수 밖에없다
//하지만 인터페이스-객체에서는 프로퍼티가 작은 인터페이스에서 큰거를 할당해도 남는건 상관이없는의미 처럼되어오류가
//나지 않게되는것이다

//제네릭

interface Empty<T>{

}

var empty1:Empty<string>;
var empty2:Empty<number>;
empty1=empty2;
empty2=empty1;
interface NotEmpty<T>{
    data:T;
}

var notempty1:NotEmpty<string>;
var notempty2:NotEmpty<number>;

notempty1=notempty2;
notempty2=notempty1;
//여기서도 보면 empty시리즈들은 string이나 number를 가져도 애초에 인터페이스에서 프로퍼티들을 정의를 안해줬으니
//앞뒤 할당은 결국 같은거로 노상관

//하지만 notempty시리즈들은 data:T라는것을 통해 프로퍼티가 달라지므로 당연히 서로할당이 안된다
//즉 프로퍼티가 제네릭이던,인터페이스던 클래스던 비교대상이다 