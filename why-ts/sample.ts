function add(a:number,b:number) :number{
    return a+b
}

var result=add(10,20);
result.toLocaleString();
// 이와같이 이미 타입스크립트에서는 반환형에 대하여 number 타입으로 명시함으로써 자동적으로
// number 타입과 관련된 api를 바로 사용할 수 있다

// 하지만 자바스크립트에서는 내가 직접 써주지 않는 이상 인텔리센스에 안잡힘