function logText(text: string){
    console.log(text);
    return text;
}

function logNumber(text: number){
    console.log(text);
    return text;
}

logText('a');
logNumber(14);
//제네릭을 사용하지 않으면 위와 같이 인자의 타입이 달라지면 같은 로직이어도 두가지의
//함수를 짜야한다

//그렇다면 유니온 연산자를 통해서 해결 가능하지 않나
function logText_and_number(text: number | string){
    console.log(text);
    return text;
}
const value=logText_and_number(10);
value.split();
//이와같이 유니온 연산자를 쓰면 정확히 string과 number중 어떤 타입이 반환이 될지 몰라서
//바로바로 반환값에 대한 메소드 추천을 받아 쓸수 없음
//위에서 value를 문자열이라고 우리는 알고있지만 코드 상으로는 value가 string|number 타입이라 몰라
logText_and_number("a");


//따라서 제네릭으로 명시적으로 처음부터 알려주면 된다
function logText_Generic<T>(text:T): T{
    console.log(text);
    return text;
}

const value_=logText_Generic<string>("hihih");
//이와 같이 시작부터 명시해주므로써 바로바로 타입에 대한 추론이 가능해졌다


//인터페이스에 제네릭을 선언하는 방법
interface DropDown<T>{
    value: T;
    selected:boolean;
}

const obj: DropDown<string>={
    value:"hihi",
    selected:true
}

//제네릭에 타입을 제한하는 방법
function logTextLength<T>(text:T[]): T[]{
    console.log(text.length);
    //위와 같이 인자에서 그냥 T가아니라 T[]이런식으로 넣어주므로써 배열과 관련된 메소드임을 추론하게 함
    //따라서 length를 쓸수 있다
    text.forEach(function(text){
        console.log(text);
    })
    return text;
}

logTextLength<string>(['hi','zz']);

//제네릭 타입 제한2-정의된 타입 이용하기
interface LengthType{
    length:number;

}

function lotTextLength_2<T extends LengthType>(text:T):T{
    console.log(text.length);
    return text;
    //LengthType을 확장하면서 무조건 length에 대한게 존재하므로 에러가 안뜰것
}
lotTextLength_2<string>('a');
//기본적으로 문자열은 length속성을 갖기에
//LengthType으로 확장을 했을지어도 주어진게 문자열이면 문자열에서 length를 찾을것이다
lotTextLength_2<number>(1);
//이건확실히 안된다 왜냐하면 number타입에서는 없으니
lotTextLength_2({length:10});

//제네릭 타입 제한3-keyof

interface ShoppingItem{
    name:string;
    price:number;
    stock:number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T):T{
    return itemOption;
}

getShoppingItemOption('name');