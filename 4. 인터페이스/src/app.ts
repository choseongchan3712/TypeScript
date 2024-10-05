//% 인터페이스

//? 타입스크립트의 인터페이스는 객체의 구조를 정의하는 데 사용됩니다. 인터페이스를 통해 객체가 가져야 할 속성과 그 속성들의 타입을 명확하게 지정할 수 있습니다. 자바스크립트에는 없는 타입스크립트에만의 기능으로, 코드의 가독성과 안정성을 높이는 데 큰 역할을 합니다.

//! 1. 기본적인 인터페이스
//? 인터페이스를 사용하여 객체의 구조를 정의할 수 있습니다.

//& 예시
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "John",
  age: 30
}


//! 2. 선택적 속성
//? 이터페이스에서는 선택적 속성도 정의할 수 있습니다. 선택적 속성은 값이 없어도 되는 속성입니다. 선택적 속성은 속성 이름 뒤에 "물음표(?)"를 붙여서 정의합니다.

interface Person1 {
  name: string;
  age?: number; //선택적 속성
}

let person1: Person1 = {
  name: "Alice"
}

let person2: Person1 = {
  name: "Alice",
  age: 25
}


//! 3. 읽기 전용 속성
//? 인터페이스에서 읽기 전용 속성은 한 번 값이 설정되면 더 이상 변경항 수 없는  속성을 의미합니다. 읽기 전용 속성은 readonly 키워드를 사용하여 정의합니다.

interface Car {
  readonly brand: string;
  model: string;
}

let myCar: Car = {
  brand: "Toyota",
  model: "Corolla"
}

//# myCar.brand = "Honda" => Error: brand는 읽기 전용 속성입니다.


//! 4. 인터페이스 확장
//? 인터페이스는 확장을 통해 다른 인터페이스로부터 속성과 메서드를 상속받을 수 있습니다. 이를 통해 인터페이스를 재사용하고, 여러 인터페이스를 결합할 수 있습니다.

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let myDog: Dog = {
  name: "Bubby",
  breed: "Golden Retriever"
};

//? 위 코드에서 Dog 인터페이스는 Animal 인터페이스를 확장하여 name 속성뿐만 아니라 breed 속성도 가져야 합니다.












