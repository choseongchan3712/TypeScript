//! 1. 객체 리터럴 타입

//& 예시
let person: { name: string; age: number };

person = {
  name: 'Alice',
  age: 30
}


//! 2. 인터페이스

//? (1) 정의
//& 예시
interface Person {
  name: string;
  age: number;
}

let alice: Person = {
  name: "Alice",
  age: 30
};

//? (2) 확장
//& 예시
interface Employee extends Person {
  employeeId: number;
}

let bob: Employee = {
  name: 'Bob',
  age: 40,
  employeeId: 1234
};

//? (3) 선택적 속성
//& 예시
interface Person1 {
  name: string;
  age?: number; // age속성은 선택적이다
}

let dave: Person1 = {
  name: "Dave"
} // age는 없어도 됨

let eve: Person1 = {
  name: "Eve",
  age: 29
} // age 있어도 됨

//? (4) 읽기 전용 속성
//& 예시
interface Car {
  readonly brand: string;
  model: string;
}

let car: Car = {
  brand: 'Toyota',
  model: 'Corolla'
};

car.model = "Camry";
// car.brand = 'Honda';  Error: brand는 읽기 전용 속성이라 수정 불가

//? (5) 인덱스 시그니처
//? 객체가 동적으로 속성을 가질 수 있게 하려면 인덱스 시그니처를 사용할 수 있음.
//& 예시
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Hello", "World"];
console.log(myArray[0]); // Hello


//! 타입 엘리어스
//? 타입 엘리어스는 특정 타입에 대해 별칭을 지정하는 

type Person2 = {
  name: string;
  age: number;
};

let charlie: Person2 = {
  name: "Charlie",
  age: 25
}