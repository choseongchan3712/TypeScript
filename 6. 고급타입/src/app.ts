//! 1. 유니언 타입
//? 유니언타입은 값이 여러 타입 중 하나를 가질 수 있도록 정의하는 방식입니다. | 연산자를 사용하여 타입을 구분합니다.

//& 예시
let id: number | string; // id는 number 또는 string이 될 수 있다
id = 101;
id = 'ABC';

//? 이렇게 타입을 유연하게 지정하면, 하나의 변수에 여러 종류의 값이 들어갈 수 있습니다.
//& 예시
const printId = (id: number | string): void => {
  console.log(`ID: ${id}`);
}

printId(123); //ID: 123
printId('ABC'); //ID: ABC


//! 2. 인터섹션 타입
//? 인터섹션 타입은 여러 타입을 결합하는 방식입니다. & 연산자를 사용하여 타입을 결합할 수 있으며, 이 경우 두 타입의 속성을 모두 새로운 타입이 만들어 집니다.

//& 예시
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
  name: "Alice",
  employeeId: 123
};


//! 3. 타입 좁히기
//? 유니언 타입을 사용할 때는 값이 여러 타입 중 하나일 수 있기 때문에, 타입을 좁히는 과정이 필요합니다. 타입 좁히기는 런타임에 타입을 추론하여 해당 타입으로 안전하게 사용할 수 있게 하는 방법입니다. 이를 위해 typeof 나 instanceof 같은 타입 가드를 사용할 수 있습니다.
//& typeof 예시
const printLength = (value: string | number): void => {
  if (typeof value === 'string') {
    console.log("string");
  } else {
    console.log("number");
  }
}

//& instanceof 예시
class Dog {
  bark(): void {
    console.log('Woof!');
  }
}

class Cat {
  meow():void {
    console.log('Meow!');
  }
}

const speak = (animal: Dog | Cat): void => {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
};

const dog = new Dog();
speak(dog);


//! 4. 타입 단언
//? 때로는 타입스크립트가 특정 값을 특정 타입으로 추론하지 못할 때, 개발자가 직접 타입을 단언할 수 있습니다.

//& 예시
let someValue: any = 'Hello, TypeScript!';
let stringLength: number = (someValue as string).length;
console.log(stringLength); //18


//! 5. 리터럴 타입
//? 리터럴 타입은 특정 값 자체를 타입으로 사용할 수 있게 합니다. 이는 유니언 타입과 결합하여 사용되기도 하며, 주로 함수 매개변수나 반환 값의 타입을 제한하는 데 유용합니다.

//& 예시
type Direction = "Up" | "Down" | "Left" | "Right";

function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}

move("Up");
move("Down"); 
// move("Forward");  // Error: "Forward"는 Direction 타입에 할당할 수 없음


//! 6. null과 undefined
//? 타입스크립트에서 변수에 null이나 undefined를 허용하려면 명시적으로 타입에 이를 추가해야 합니다.

//& 예시
let nullableString: string | null | undefined;
nullableString = "Hello";
nullableString = null; 
nullableString = undefined; 


//! 7. 옵셔널 체이닝
//? 옵셔널 체이닝은 객체의 깊은 속성에 접근할 때 해당 속성이 존재하지 않으면 undefined를 반환하는 기능입니다. ?.을 사용합니다.

interface User {
  name: string;
  address: {
      city: string;
  };
  phone?: {
      number: string;
  }; // phone 속성은 선택적으로 정의
}

let user: User = { 
  name: "Alice", 
  address: { city: "Seoul" }
};

console.log(user?.address?.city);  // "Seoul"
console.log(user?.phone?.number);   // undefined


//! 8. Nullish 병합 연산자
//? null 또는 undefined인 경우에만 기본값을 사용할 수 있게 하는 연산자입니다. ??을 사용하여 처리합니다.

let input: string | null;
input = null;
let value = input ?? "default value";

console.log(value); //default value

