
//? 타입스크립트에서 함수는 자바스크립트와 비슷하지만, 매개변수와 반환 값에 타입을 지정할 수 있다는 점에서 차별화됩니다. 


//! 1. 함수 매개변수에 타입 지정하기
//? 타입스크립트에서는 함수의 매개변수에도 타입을 지정할 수 있습니다. 자바스크립트와의 주요 차이점은 매개변수마다 타입을 명시함으롯써, 올바른 인자를 받는지를 컴파일 단계에서 체크할 수 있다는 점입니다.

//& 예시
function add(a: number, b: number): number {
  return a + b;
}

//? 위 함수에서 a와 b는 number 타입을 가지며, 함수의 반환 값도 number 타입을 가지는 것을 볼 수 있습니다. 이를 통해 add(1, '2')와 같은 잘못된 호출을 미리 방지할 수 있습니다.


//! 2. 선택적 매개변수
//? 자바스크립트에서는 매개변수가 전달되지 않으면 undefined로 처리되지만, 타입스크립트에서는 선택적 매개변수를 설정할 수 있습니다. 선택적 매개변수는 '물음표(?)'를 사용하여 지정합니다.

//& 예시
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}


//! 3. 기본값을 가진 매개변수
//? 타입스크립트는 매개변수에 기본값을 설정할 수 있습니다. 이 경우, 인자가 전달되지 않으면 기본값이 사용됩니다.

//& 예시
function greet2(name: string, greeting: string = 'Hello'): string {
  return `${greeting}, ${name}!`;
}


//! 4. 반환 타입
//? 함수의 반환 값에도 타입을 명시할 수 있습니다. 함수의 반환 타입을 명시하면, 함수가 그 타입에 맞는 값을 반환해야 하며, 그렇지 않으면 컴파일 에러가 발생합니다.

//& 예시
function multiply(a: number, b: number): number {
  return a * b;
}


//! 화살표 함수

//& 예시
const divide = (a: number, b: number): number => {
  return a / b; 
}