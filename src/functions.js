function addCart(producName="elma",qauntity){
    console.log("sepete eklendi:ürün:"
    +producName+"adet:"+qauntity)
}

//addToCart()
addtoCart(10)
//addtoCart(15)

let sayHello=()=>{
    console.log("Hello World!") 
}
sayHello()
function addToCart2(producName,qauntity,unitprice){

}

addToCart2("Elma",5,10)
addToCart2("Armut",2,10)
addToCart2("Limon",3,15)


let product1={producName:"elma",unitprice:10,qauntity:5}

function addToCart3(product){
    console.log("ürün:"+product.productName)
    console.log("Adet:"+product.qauntity)
    console.log("Fiyat:"+product.unitprice)
}
addToCart3(product1)
let product2={producName:"Elma", unitprice:10,qauntity:5}
let product3={producName:"Elma", unitprice:10,qauntity:5}
product2= product3
product2.producName="Karpuz"
console.log(product3.producName)

let sayi1=10
let sayi2=20
sayi1= sayi2
sayi2=100
console.log(sayi1)


function addToCart4(products) {
    console.log(products)
}

 let products =[
    {productName:"Elma", unitprice:10,qauntity:5},
    {productName:"Armut", unitprice:10,qauntity:5},
    {productName:"Karpuz", unitprice:10,qauntity:5}
]

addToCart4(products)

 function add(bisey,...numbers){ //rest
    let total=0;

    for (let i=0; i<numbers.length; i++){
        total=total+ numbers[i]
    }
    console.log(total)
    console.log(bisey)
 }

 
 add(20,30)
 //add(20,30,40)
 //add(20,30,40,50)

 let numbers=[30,10,500,600,120]
 //consele.log(...numbers)
 console.log(Math.max(...numbers))
  let[icanadolu,marmara,Karadeniz,[içAnadoluSehirleri]]=[
    {name:"İç anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["sinop","Trabzon"],
    ]
  ]
  //consele.log(icAnadolu.name)
//consele.log(icAnadolu.population)








