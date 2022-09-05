//타입 추론기본
interface DropDown<T>{
    value:T;
    title:string;
}

interface DetailedDropdown<K> extends DropDown<K>{
    description:string;
    tag:K

}

var shoppingItem: DropDown<string>={
    value:"abc",
    title:"hello"
}
var detailed_shoppingItem: DetailedDropdown<string>={
    value:"abc",
    title:"abab",
    description:"hihihi",
    tag:"gimorri"
}

//Best common type
var arr=[1,2,true,"a"];
//이와 같은상황이면 arr은 숫자 boolean 문자열에 대해 유니온연산자를 한것으로 배열타입을 추론한다
//구냥 쉽게보면 모든 자료형을 유니온으로 묶어 나가는게 best common type이라고 보면 된다