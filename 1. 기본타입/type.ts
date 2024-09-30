//! 불리언(Boolean)

let isDone: boolean = false;

//? 가장 기본적인 데이터 타입은 JavaScript, TypeScript에서 boolean 값이라고 일컫는 참/거짓(true/false) 값입니다.

//! 숫자(Number)

let decimal: number = 6;

//! 문자열(String)

let color: string = "blue";

//? 템플릿 문자열 을 사용하면 여러 줄에 걸쳐 문자열을 작성할 수 있으며, 표현식을 포함시킬 수도 있습니다. 이 문자열은 백틱/백쿼트 (` ) 문자로 감싸지며, ${ expr }과 같은 형태로 표현식을 포함시킬 수 있습니다.

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${age + 1} years old next month.`;

//! 배열

//? TypeScript는 JavaScript처럼 값들을 배열로 다룰 수 있게 해줍니다. 배열 타입은 두 가지 방법으로 쓸 수 있습니다. 첫 번째 방법은, 배열 요소들을 나타내는 타입 뒤에 []를 쓰는 것입니다:

let list: number[] = [1, 2, 3];

//? 두 번째 방법은 제네릭 배열 타입을 쓰는 것입니다. Array<elemType>:

let list2: Array<number> = [1, 2, 3];

//! 튜플
//? 튜플 타입을 사용하면, 요소의 타입과 개수가 고정된 배열을 표현할 수 있습니다. 단 요소들의 타입이 모두 같을 필요는 없습니다. 예를 들어, number, string 이 쌍으로 있는 값을 나타내고 싶을 수 있습니다:

let x: [string, number];

x = ["hello", 10];
