class Animal{
    name: string;

    constructor(name: string){
        this.name = name;
    }
    makeSound(){
        console.log("some sound");
        
    }
}

class Dog extends Animal{
    constructor(name: string){
        super(name);
    }
    makeSound(): void {
        console.log("Woof!");
        
    }
    wagTail(){
        console.log("happy dog wags tail!");
        
    }
}

class Cat extends Animal{
    constructor(name: string){
        super(name);
    }
    makeSound(): void {
        console.log("Meow!");
        
    }
    angryCat(){
        console.log("Angry cat scratches master!");
        
    }
}

const dog = new Dog("Oreo");
dog.makeSound();
dog.wagTail();
console.log(dog.name);

const cat = new Cat("Luna");
cat.makeSound();
cat.angryCat();
console.log(cat.name);

