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





let product1={producName:"elma",unitprice:10,qauntity:5}

function addToCart3(product){
    console.log("ürün:"+product.productName)
    console.log("Adet:"+product.qauntity)
    console.log("Fiyat:"+product.unitprice)
}
addToCart3(product1)