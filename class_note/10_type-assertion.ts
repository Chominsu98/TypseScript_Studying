//타입 단언
var a;
a=20;
a='a';
var b=a;
//이와 같이 하면 b는 a의 마지막 할당으로 인해 문자열이 되는 걸 인지를 아직 못한다
//따라서 개발자가 우선적으로 알고 있다하면
var b_=a as string;
//이런식으로 미리 지정할 수 있다

//주로 DOM API에서 자주 사용함

//타입단언은 개발자인 내가 너 더보다 확실히 아니 걱정마라 이렇게 하면서 오류를 없애는 방식

let div=document.querySelector("div")
div.innerHTML
//만약 이렇게 하면 div 자체가 null일 가능성 있는 거라 오류가 뜰것이다.
//따라서 오류처리를 if문으로 해준던가 이님 여기서 단언을 사용하는 것이다.
`   `
let div_=document.querySelector("div") as HTMLDivElement;
div_.innerHTML
//이와 같이 확신이 있을 때 타입에 대한 오류를 피해줄 수 있다