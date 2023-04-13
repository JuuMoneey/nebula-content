// function User(name, email){
//     this.name = name;
//     this.email = email
//     this.introduction = () => `Hi, I'm ${name}!`
// }


// const dayana = new User('Dayana')
// console.log(dayana)

// const juliet = new User('Juliet')
// console.log(juliet.introduction())

// const kelly = new User('Kelly', 'kelly@gmail.com')
// console.log(kelly)



// class User {
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     introduction(){
//         return `Hi, I'm ${this.name}!`
//     } 
// }

//  const juliet = new User('Juliet', 'juliet@na.org')
//  console.log(juliet.introduction())


// class User {
//     constructor(name, age){
//         this.name = name
//         this.height = age
//     }

//     introduction(){
//         return `Hi, I'm ${this.name}!`
//     } 

//     comment(forum, comment){
//         forum.setComment(comment, this.name);
//     }
// }


// class Forum {
//     constructor(subject){
//         this.subject = subject;
//         this.comments = []
//         this.commentCount = 0
//     }

//     setComment(comment, userName){
//         this.comments.push({ comment, userName });
//         this.commentCount++
//     }

//     showComments(){
//         this.comments.forEach(comment => console.log(`${comment.userName}: ${comment.comment}`));
//     }
// }


// const julietv = new User('juju', '23')
// //console.log(julietv)
// const penny = new User('penny', '26')
// //console.log(penny)

// const stack = new Forum('arrow functions forum')
// console.log(stack)

// julietv.comment(stack, 'whats your fave color?')
// penny.comment(stack, 'my fave color is purple')
// console.log(stack)
// stack.showComments()


class Automobile {
    constructor(brand, mileage, price, topSpeed){
        this._brand = brand;
        this._mileage = mileage;
        this._price = price;
        this._topSpeed = topSpeed;
    }

    getBrand(){
        return this._brand;
    }

    getMileage(){
        return this._mileage;
    }

    getPrice(){
        return this._price;
    }

    getTopSpeed(){
        return this._topSpeed;
    }

    setPrice(newPrice){
        this._price = newPrice;
    }

    printSpeed(){
        console.log(`Top speed: ${this.topSpeed} MPH`);
    }

    printMileage(){
        console.log(`Milage: ${this.mileage}`);
    }

    printBrand(){
        console.log(`Brand: ${this.brand}`);
    }
}

const myFirstAutomobile = new Automobile("Pontiac", 5000, 8000, 110);


const tefesCar = new Automobile("Jaguar", 0, 65000, 110);

myFirstAutomobile.printSpeed()


class Coupe extends Automobile {
    constructor(brand, mileage, price, topSpeed, owner){
        super(brand, mileage, price, topSpeed);
        this.owner = owner;
        this.doors = 2;
    }
}

const tefesCoupe = new Coupe("BMW", 0, 65000, 125, "Betty");

console.log(tefesCoupe)
tefesCoupe.printSpeed()
