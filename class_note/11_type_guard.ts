interface Developer{
    name:string;
    skill:string;
}

interface PerSon{
    name:string;
    age:number;
}

function introduce(): Developer|PerSon{
    return {name:"Tony",age:33,skill:"Iron Making"}
}


var tony=introduce();
console.log(tony.skill);
//이와 같이 하면 심지어 리턴하는것에 skill속성이 있는데에도 불구하고
//유니온연산자 특징상 공통적인 프로퍼티만 가능하게 된다

//하지만 이걸 단언으로 나눠주자면
//이렇게 하면 조금 복잡해보이긴 한다,,,
//따라서 타입가드를 그래서 만듦
if((tony as Developer).skill){
    var skill=(tony as Developer).skill;
    console.log(skill);
}else if((tony as PerSon).age){
    var age=(tony as PerSon).age;
    console.log(age)
}

//타입가드에서의 핵심은 반환형에서 is를 써서 맞는지를 확인해주는 것
function isDeveloper(target:Developer|PerSon):target is Developer{
    return (target as Developer).skill!==undefined;
    //Developer로 단언을 했는데 만약 skill 속성이 무엇으로 정의가 되어 있다면 True
    // Developer 타입에 해당하는 skill 속성이 있으면 Developer 타입으로 간주해라 라는 의미입니다 :)
}

if (isDeveloper(tony)){
    console.log(tony.skill);
    // 여기서보면 자동적으로 isDeveloper에 대한 결과로 tony에서 출력해주는 것을 알수있다.
    //자동적으로 Developer에 대한 여부를 판단을 하여 맞으면 그에 따라서 Developer에 대한 속성을자동완성
}else{
    console.log(tony.age)
}