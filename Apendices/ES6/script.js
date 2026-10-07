// destructuring 
const fruits = ["Maçã", "laranja", "Mamão"]

const [f1, f2, f3] = fruits

console.log(f1)

console.log(f2)


const productDetails = {
    name: "mouse",
    price: 39.99,
    category: "periféricos",
    color: "branco"
}

const { name: productName, price, category: productCategory, color } = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`)

// spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = { name: "Gol" }
const carBrand = { brand: "VW" }
const otherInfos = { km: 100000, price: 49000 }

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 }

console.log(car)

// classes

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    prodctWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("camisa", 20)

console.log(shirt.name)
console.log(shirt.prodctWithDiscount(10))

const tenis = new Product("tenis verde", 120)

console.log(tenis.prodctWithDiscount(15))

// herança

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }
    showColors() {
        console.log("As cores são:")
        this.colors.forEach(color => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["preto", "azul", "verde"])

hat.showColors()