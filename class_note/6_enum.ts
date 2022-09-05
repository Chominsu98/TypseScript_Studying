// enum Shoes{
//     Nike,
//     Adidas
// }
//기본적으로 초기화를 안하면 0부터 시작되서 초기화됨

enum Shoes{
    Nike="나이키",
    Adidas="아디다스"
}
//이와 같이 문자열 초기화도 가능
var myshoes=Shoes.Nike;
//대체로 기본적으로 값이 number로 할당이 되어서 Nike에는 0이 할당된다

//예제
enum Answer{
    Yes='Y',
    No='N',
}

function askQuestion(answer: string){
    if (answer===Answer.Yes){
        console.log("정답입니다");
    }
    if (answer===Answer.No){
        console.log("오답입니다");
    }
}

askQuestion(Answer.Yes);
//이넘을 사용하면서 다양한케이스에 대한것을 막아줄 수있음
//왜냐면 이넘에 있는 것만 쓰므로