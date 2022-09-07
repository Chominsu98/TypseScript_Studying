type Heroes="Hulk"|"Capt"|"Thor"
type HeroAges={[K in Heroes]:number}
//맵드 타입으로 각각의 키를 설정해줌 

const ages:HeroAges={
    "Hulk":100,
    "Capt":12,
    "Thor":1000
}

console.log(ages["Hulk"])
console.log("hi")