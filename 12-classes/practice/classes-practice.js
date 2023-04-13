/* Question 1
Write a class that creates an animal
The animal class should have the following properties:
  - name
  - noise
  - eats
  - lives
The animal class should have the following methods:
  - makeNoise
  - eatsWhat
  - livesWhere

Initialize 3 animals with your class & log a sentence to the console, ex:
`Dogs live in peoples houses, they bark and are carnivorous.`
*/

class Animal {
    constructor(name, noise, eats, lives){
        this.name = name
        this.noise = noise
        this.eats = eats
        this.lives = lives
    }

    getName(){
        return this.name
    }
    
    getMakesNoise(){
        return this.noise
    }
    
    getEatsWhat(){
        return this.eats
    }
    
    getLivesWhere(){
        return this.lives
    }
    
    printName(){
        console.log(`This is a ${this.name}`)
    }

    printNoise(){
        console.log(`${this.name} makes a ${this.noise}`)
    }

    printEats(){
        console.log(`${this.name} are ${this.eats}`)
    }

    printLives(){
        console.log(`${this.name} live ${this.lives}`)
    }

    printAnimal(){
        console.log(`${this.name} live in ${this.lives}, they ${this.noise} and are ${this.eats}.`)
    }
}

const lion = new Animal('Lions', 'Roar', 'carnivorous', 'Africa')
// console.log(lion)
// lion.printName()
// lion.printNoise()
// lion.printEats()
// lion.printLives()
lion.printAnimal()

const duck = new Animal('Ducks', 'quack', 'omnivorous', 'bodys of waters near tall grass')
// console.log(duck)
// duck.printName()
// duck.printNoise()
// duck.printEats()
// duck.printLives()
duck.printAnimal()

const llama = new Animal('Llamas', 'make a humming noise', 'herbivores', 'the Andes Moutains, Peru, and Bolivia') 
// console.log(llama)
// llama.printName()
// llama.printNoise()
// llama.printEats()
// llama.printLives()
llama.printAnimal()



/* Question 2
Write a class that creates shoes
The shoe should have the following properties:
  - size
  - color
  - type
  - age
Initialize 3 shoes with your class & log a sentence to the console:
  ex: `My flipflops are yellow, size 9, and 6 years old.`
*/
class Shoe {
    constructor(size, color, type, brand){
        this.size = size
        this.color = color
        this.type = type
        this.brand = brand
    }

    getSize(){
        return this.size
    }
    
    getColor(){
        return this.color
    }
    
    getType(){
        return this.type
    }
    
    getBrand(){
        return this.brand
    }

    printSize(){
        console.log(`I need a shoe size ${this.size}.`)
    }

    printColor(){
        console.log(`I want the ${this.color} ${this.brand} ${this.type}.`)
    }

    printType(){
        console.log(`I'm looking for the ${this.brand} ${this.type} section.`)
    }

    printBrand(){
        console.log(`Do you have any ${this.brand} ${this.type} in store today?`)
    }

    printShoe(){
        console.log(`My ${this.type} are ${this.color}, size ${this.size}, and are ${this.brand}.`)
    }
}
const airForces = new Shoe('6', 'All White', 'Air Force Ones', 'Nike')
// airForces.printSize()
// airForces.printColor()
// airForces.printType()
// airForces.printBrand()
airForces.printShoe()

const booties = new Shoe('8.5', 'black', 'Knee High Booties', 'Fendi')
// booties.printSize()
// booties.printColor()
// booties.printType()
// booties.printBrand()
booties.printShoe()

const crocs = new Shoe('8', 'pink', 'Classic Lined Fuzzy clogs', 'Crocs')
// crocs.printSize()
// crocs.printColor()
// crocs.printType()
// crocs.printBrand()
crocs.printShoe()


//Question 3: Use Inheritance to create parent and child classes
// Reference Automobile -> Coupe example in lesson

// ex: Person -> teacher -> math teacher
//  Animal -> mammal -> land/sea
class LV extends Shoe {
    //subclass to class child to parent
    constructor(size, color, type, brand, store){
        super(size, color, type, brand);
        //super: look at the parent class
        this.store = store;
        this.sale = '20%';
    }
    getStore(){
        return this.store
    }

    getSale(){
        return this.sale
    }

    printStore(){
        console.log(`Is ${this.store} open today ?`)
    }

    printSale(){
        console.log(`There's a sale of ${this.sale} off today only on ${this.brand}.`)
    }

    printLV(){
        console.log(`Today im going to ${this.store} for the sale ${this.sale} off. 
        I want those ${this.color} ${this.brand} ${this.type} ive been dying to get.
        Hopefully they have them in a size ${this.size}.`)
    }
}

const loui = new LV('8', 'gold', 'sandals', 'Loui Vuitton', 'Saks');
console.log(loui)
// loui.printSize()
// loui.printColor()
// loui.printType()
// loui.printBrand()
// loui.printShoe()
// loui.printStore()
// loui.printSale()
loui.printLV()