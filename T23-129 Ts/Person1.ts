class Person1 {
    constructor(public ssn: string, private firstName: string, protected lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
// compile eror
let person1 = new Person1('153-07-3130', 'John', 'Doe');
 console.log(person1.ssn); 
 console.log(person1.lastName);
// lastName' is protected and only accessible within class 'Person1' and its subclass 


