// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
function Car(model, prod, year, maxSpeed, engine) {
  this.model = model;
  this.prod = prod;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engine = engine;
  this.drive = () => {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
  };
  //     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
  this.info = () => {
    for (let i = 0; i < Car.length; i++) {
      console.log(Object.keys(this)[i] + "- " + Object.values(this)[i]);
    }
  };
  //     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
  this.increaseMaxSpeed = (newSpeed) => {
    this.maxSpeed += newSpeed;
    console.log("works");
  };
  //     -- changeYear (newValue) - змінює рік випуску на значення newValue
  this.changeYear = (changeYear) => {
    this.year = changeYear;
  };
  //     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
  this.addDriver = (driver) => {
    this.driver = driver;
  };
}

let myNewCar = new Car("Mercedes", "Germany", 2020, 220, 4.0);
// console.log(myNewCar);
// myNewCar.drive();
// myNewCar.info();
// myNewCar.changeYear(2021);
// myNewCar.info();
// myNewCar.addDriver("ProDriver");
// myNewCar.increaseMaxSpeed(50);
// myNewCar.drive();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class MyCar {
  constructor(model, prod, year, maxSpeed, engine) {
    this.model = model;
    this.prod = prod;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
  }
  // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
  drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
  }
  //     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
  info() {
    for (let i = 0; i < Car.length; i++) {
      console.log(Object.keys(this)[i] + "- " + Object.values(this)[i]);
    }
  }
  //     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
  increaseMaxSpeed(newSpeed) {
    this.maxSpeed += newSpeed;
  }
  //     -- changeYear (newValue) - змінює рік випуску на значення newValue
  changeYear(changeYear) {
    this.year = changeYear;
  }
  //     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
  addDriver(driver) {
    this.driver = driver;
  }
}

let newCar = new MyCar("Porshe", "Germany", 2021, 240, 3.0);
// console.log(newCar);
// newCar.drive();
// newCar.info();
// newCar.changeYear(2019);
// newCar.info();
// newCar.addDriver("PorsheDriver");
// console.log(newCar);
// newCar.increaseMaxSpeed(70);
// newCar.drive();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka {
  constructor(name, age, shoe_size) {
    this.name = name;
    this.age = age;
    this.shoe_size = shoe_size;
  }
}
let popelushkaArray = [
  new Popelushka("PopGirl1", 18, 36),
  new Popelushka("PopGirl2", 20, 38),
  new Popelushka("PopGirl3", 21, 39),
  new Popelushka("PopGirl4", 18, 34),
  new Popelushka("PopGirl5", 19, 37),
  new Popelushka("PopGirl6", 18, 35),
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
  constructor(name, age, foundedShoe) {
    this.name = name;
    this.age = age;
    this.foundedShoe = foundedShoe;
  }
}
let prince = new Prince("Prince I", 25, 37);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
popelushkaArray.forEach((element) => {
  if (element.shoe_size === prince.foundedShoe) {
    // console.log(
    //   `Your girl ${element.name} with shoe size "${element.shoe_size}"`
    // );
  }
});

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const findGirl = (girl) => {
  if (girl.shoe_size === prince.foundedShoe) {
    return girl;
  }
};
console.log(popelushkaArray.find(findGirl));
