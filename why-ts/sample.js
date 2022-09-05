//@ts-check
/**
 * 
 * @param {number} a 첫번째 숫자 
 * @param {number} b 두번째 숫자
 * @returns 
 */
function sum(a,b){
    return a+b
}

sum(10,'20');
//자바스크립트에서 만약 타입스크립트처럼 인자에 대한 타입같은 효과를 줄려면 위와같이 jsDoc사용 해서 가능
//하지만 param만 했을 경우에는 에러는 못 잡아줌
//따라서 에러까지 잡아줄려면 @ts-check를 써주자

// 하지만 매번 이렇게 다 자바스크립트에서 하는 건 넘 많다,,따라서 타입스크립트를 쓰자