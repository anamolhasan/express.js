let Person = class {
    constructor(name, age, Profe){
        this.name = name
        this.age = age
        this.Profe = Profe
    }
}

let NewPerson = new Person("Junior Programmer", 27, 'Programmer')
console.log(NewPerson)