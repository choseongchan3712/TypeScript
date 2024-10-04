"use strict";
//? 타입스크립트의 클래스는 자바스크립트와 매우 유사하지만, 추가적으로 타입과 접근 제어자(public, private, protected)를 사용할 수 있어 더 명확하게 객체 지향 프로그래밍을 구현할 수 있습니다.
//! 1. 클래스 기본 구조
//? 클래스는 객체의 설계도입니다. 객체의 속성(프로퍼티)과 행동(메서드)을 정의할 수 있습니다.
//& 예시
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
let person = new Person("Alice", 30);
console.log(person.greet()); //% Hello, my name is Alice and I am 30 years old.
//! 2. 접근 제어자
//? 타입스크립트에서는 클래스 멤버(속성이나 메서드)에 대한 접근을 제한할 수 있습니다.
//? public: 기본적으로 모든 클래스 멤버는 public입니다. 어디서든 접근할 수 있습니다.
//? private: 클래스 내부에서만 접근할 수 있으며, 외부에서는 접근할 수 없습니다.
//? protected: 상속받은 클래스에서는 접근할 수 있지만, 외부에서는 접근할 수 없습니다.
//& 예시
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //? 외부에서 접근 가능한 메서드
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}
let person1 = new Person1('Bob', 25);
console.log(person1.age); //? 25 (public이므로 접근 가능)
console.log(person1.greet()); //? "Hello, my name is Bob."
// console.log(person1.name); //? Error: 'name'은 private이므로 접근 불가
//! 3. 상속
//? 타입스크립트는 클래스 상속을 지원합니다. extends 키워드를 사용하여 부모 클래스의 속성과 메서드를 자식 클래스가 물려받을 수 있습니다.
//& 예시
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}
let dog = new Dog("Buddy");
dog.bark(); //? "Woof! Woof!"
dog.move(10); //? "Buddy moved 10 meters."
//! 4. 추상 클래스
//? 추상 클래스틑 직접 인스턴스를 생성할 수 없는 클래스이며, 다른 클래스들이 상속하여 구현해야 하는 메서드를 정의할 수 있습니다. abstract 키워드를 사용합니다.
//& 예시
class Shape {
    printArea() {
        console.log(`Area: ${this.getArea()}`);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
let circle = new Circle(5);
circle.printArea(); // "Area: 78.53981633974483"
//! 5. 생성자 매개변수에 접근 제어자 사용
//? 타입스크립트에서는 생성자에서 바로 접근 제어자를 사용하여 속성을 정의할 수 있습니다. 이렇게 하면 생성자 내부에서 직접 속성을 선언하지 않아도 됩니다.
//& 예시
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    getCarInfo() {
        return `${this.model} (${this.year})`;
    }
}
let car = new Car("Tesla", 2023);
console.log(car.getCarInfo()); // "Tesla (2023)"
// console.log(car.year);  // Error: 'year'은 private이므로 접근 불가
