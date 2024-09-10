class Person {
  constructor (name, age, gender, natonality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.natonality = natonality;
  }

  personDetails() {
    return `${this.name} is a ${this.age} year old ${this.gender} from ${this.natonality}`;
  }
}

const person1 = new Person('Jane', 28, 'Female', 'Nigerian');
console.log(person1.personDetails());


 class Soldier extends Person {
  constructor(name, age, gender, natonality, rank) {
    super(name, age, gender, natonality);
    this.rank = rank;
  }

  soldierDetails() {
    return `${this.rank} ${this.name} is a ${this.age} year old ${this.natonality} soldier`;
  }
}

const soldier = new Soldier('Brad cooper', 36, 'male', 'american', 'Captain' );
console.log(soldier.soldierDetails());


module.exports = {
  soldier,
  person1,
}