//함수의 파라미터에 타입을 정의하는 방식
function sum(a:number,b:number){
    return a+b;
}

sum(10,20)
//함수의 반환값에 타입을 정의하는 방식
function add():number{
    return 10;
}

//함수에 타입을 정의하는 방식
function add_(a:number,b:number):number{
    return a+b;
}

//add_(10,20,30)
//자바스크립트에서는 사실 인자개수가 오버되어도 이런것에 대해서 오류를 내주지는 않는다 그냥 무시할뿐 
//하지만 타입스크립트에서는 오류를 알림

//함수의 옵셔널 파리미터
function log(a:string,b?:string,c?:string){

}
//물음표를 넣으면 선택적으로 인자를 넣을지 말지를 정해줄 수 있다.
//?를 인자에 붙이면 꼭 인자로 넘겨줄 필요는 없다는 뜻
log("hello");
