var seho_:string | number | boolean;


function logMessage(value: string | number){
    console.log(value);
    if (typeof value=== 'number'){
        value.toLocaleString();
    }
    else if(typeof value==="string"){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
//이와같이 value에 대하여 union연산자를 통해 여러개를 받고
//타입별로 나눌 수 있는 필터링을 타입가드라고 한다


logMessage("hello");
logMessage(10);
//타입스크립트에서 | 이건 union 연산자라고 불리며 받고 싶은 타입을 여러개 설정 시 사용

interface Developer_{
    name:string;
    skill:string;
}

interface _Person_{
    name: string;
    age: number;
}

function asksomeone(someone: Developer_ | _Person_){
    someone.name
}
//위와 같이 두가지 인터페이스를 인자로 받을 때에 어떤 타입으로 들어올지 몰라-유니온타입 사용시
//공통프로퍼티인 name에 대해서만 오류가 뜨지 않고 나오는 걸 알 수 있다

//대체로 유니온을 인터섹션보다 훨씬 잘 사용한다는 것이 현실
asksomeone({name:"민수",skill:"coding"});
asksomeone({name:"두열",age:25});
//이와 같이 타입에 맞는 거를 쉽게 넣어줄 수 있다


function asksomeone_(someone: Developer_ &_Person_){
    someone.skill
}
//이와같이 인터섹션& 연산자를 사용하면 두 인터페이스에 있는 모든걸 접근할 수 있다

asksomeone_({name:"다빈",skill:"desgin",age:25});
//이와 같이 인터섹션을 사용한 함수에서는 결국에는 Developer_와 _Person_을 둘다 가져야하는 새로운
//자료형이 생기는셈이다