// task 1
class CoffeeMake {
    on() {
        return 'on'
    };
    off() {
        return 'off'
    };
}

class DripCoffeeMaker extends CoffeeMake {

    takeCofee() {
        return 'Ви взяли каву'
    };
}

class CarobCoffeeMaker extends DripCoffeeMaker {



}

class CoffeeMachine extends CarobCoffeeMaker {
    constructor(coffee) {
        super(coffee)
        this.coffee = coffee
    }


}
let cofeeCup = new CoffeeMachine('Black Coffe');
console.log(cofeeCup)
console.log(cofeeCup.takeCofee())

// task 2

class Worker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days
    }
}

let worker1 = new Worker('Ivan', 'Ivanov', '500', '20')
let worker2 = new Worker('Roman', 'Romanov', '500', '30')

console.log(worker1.firstName);
console.log(worker1.secondName);
console.log(worker1.rate);
console.log(worker1.days);
console.log(worker1.getSalary());

console.log(worker2.firstName);
console.log(worker2.secondName);
console.log(worker2.rate);
console.log(worker2.days);
console.log(worker2.getSalary());




// task 3

class MyString {
    constructor(string) {
        this.string = string;
    }
    reverse() {
        return this.string.split('').reverse().join('')
    };

    ucFirst() {
        let firstLetter = this.string.substring(0, 1).toUpperCase()
        let otherLetter = this.string.substring(1, )
        return firstLetter + otherLetter
    }
    ucWords() {
        let str = this.string.split(' ');
        let newStr = '';
        for (let i = 0; i < str.length; i++) {
            let firstLetter = str[i].substring(0, 1).toUpperCase()
            let otherLetter = str[i].substring(1, )
            let word = ' ' + firstLetter + otherLetter
            newStr += word
        }
        return newStr
    }
}

let str = new MyString('ivan ivan ivan');


console.log(str)
console.log(str.reverse())
console.log(str.ucFirst())
console.log(str.ucWords())