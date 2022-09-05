interface Product{
    id:number;
    name:string;
    price:number;
    brand:string;
    stock:number;
}

// 상품목록을 받아오기 위한 api함수
// api를 통해 product배열을 받아오는 상황
function fetchProducts():Promise<Product[]>{

}

//하지만 특정상황에 따라서는 저 안에 모든 키값들을 갖는게 아닌 일부만 가지게 되는 상황들이 존재한다
//ex)해당 product가 특정 키에 대한 정보는 없을 수 있기에
//그럼 아래와 같이 해당 키에 대해서 또 타입을 명시하던가 또는 저 새로운 것에 대해서

interface ProductDetails{
    id:number;
    name:string;
    price:number;
}
// 이렇게 명시해줄 수도 있지만..?귀찮
//따라서 유틸리티 타입 중 pick을 사용할 수 있다
function displayProductDetails(shoppingItem:{
    id:number;name:string;price:number
}){

}

// Pick을 통한 원하는 값만 뽑아서 타입을 재활용가능!
// 제네릭에 첫번째 인자:재활용원하는 객체 두번째인자:뽑을 키들
type ShoppingItem=Pick<Product,"id" | "name" | "price">
function displayProductDetails_Pick_version(shoppingItem:ShoppingItem){

}

// Omit은 딱 pick의 반대개념으로 인자로 안쓸것들을 넣어주면 된다
type ShoppingItem2=Omit<Product,"brand"|"stock">;
function displayProductDetails_Omit_version(shoppingItem:ShoppingItem2){

}

//3.Partial은 해당 인터페이스의 모든 인자들에 대하여 Optional하게 해주는 역할이다
//따라서 매번 Pick이렇게 안해주더라도 해당 Product인자들중 일부만 가지고 있어도 상관없다
type UpdateProduct=Partial<Product>;

function UpdateProductItem(shoppingItem:UpdateProduct){

}