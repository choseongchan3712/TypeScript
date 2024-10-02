"use strict";
//! 1. 기본 데이터 타입
//? (1) string: 문자열 타입
//? (2) number: 숫자 타입
//? (3) boolean: 불리언 타입
//? (4) null: null 값
//? (5) undefined: 값이 정의되지 않았음을 나타냄
//? (6) void: 반환값이 없는 함수의 반환 타입
//? (7) any: 어떤 타입이든 허용하는 타입
//? (8) never: 절대 발생하지 않는 타입
//& 예시
//# string
let userName = "Alice";
//# number
let age = 30;
//# boolean
let isStudent = true;
//# null과 undefined
let emptyValue = null;
let notAssigend = undefined;
//# void (함수의 반환 타입)
function greet() {
    console.log('Hello!');
}
//# any 
let randomValue = "Hello!";
randomValue = 42; //# any 타입은 어떤 타입도 할당할 수 있음
//# never
function throwError(message) {
    throw new Error(message);
}
//! 2. 배열과 튜플
//? 타입스크립트는 배열과 튜플도 지원합니다.
//? (1) 배열: 동일한 타입의 요소들로 구성된 집합
//? (2) 튜플: 고정된 길이와 서로 다른 타입의 요소를 가지는 배열
//& 예제
//# 베열
let number = [1, 2, 3, 4, 5];
let fruit = ['apple', 'banana', 'cherry'];
//# 튜플
let person = ['Alice', 30];
//! 3. 열거형(Enum)
//? 타입스크립트는 열거형을 사용하여 상수 집합을 정의 할 수 있습니다. 열거형을 사용하면 관련된 상수 값들을 그룹화할 수 있습니다.
//& 예제
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//? 타입스크립트에서 열거형을 사용할 때, 열거형의 각 멤버는 기본적으로 숫자 값을 가지며, 이 숫자 값들은 모두 number 타입으로 취급됩니다. 따라서, 위에서 정의한 Direction 열거형의 멤버인 Up, Down, Left, Right의 값들은 모두 number 타입입니다.
let move = Direction.Up;
console.log(move);
