"use strict";
//! 1. 타입 추론
//? 타입스크립트에서는 변수를 선언할 떄 명시적으로 타입을 지정하지 않아도, 코드의 문맥을 보고 자동으로 타입을 추론할 수 있음.
//? 이를 타입 추론이라고 함. 기본적으로 자바스크립트처럼 변수를 선언하지만, 타입스크립트는 컴파일러가 타입을 추론해서 그에 맞게 오류를 검출해 줌.
//& 예시
let message = 'Hello world!';
//? 타입스크립트는 message가 문자열 타입임을 추론함.
// message = 42; //? 오류: 'number' 형식은 'string' 형식에 할당할 수 없습니다.
//! 2. 타입 가드
//? 타입 가드는 코드 내에서 특정 변수가 특정 변수가 특정 타입임을 환인하거나 보장하는 역할을 함.
//? 이를 통해 타입스크립트는 해당 변수가 어떤 타입인지 알고 적절하게 오류를 처리할 수 있음.
//? 자바스크립트에서 typeof, instanceof와 같은 연산자를 사용하여 타입을 확인하는 것과 유사하지만, 타입스크립트는 추가적으로 사용자 정의 타입 가드도 제공 함.
//* 1) typeof 연산자
//? typeof 연산자는 기본 타입을 검사할 때 사용함.
//& 예시
const printValue = (value) => {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // 문자열일 때만 실행
    }
    else {
        console.log(value.toFixed(2)); // 숫자일 때만 실행
    }
};
//* 2) instanceof 연산자
//? instanceof 연산자는 객체가 특정 클래스의 인스턴스인지 확인할 때 사용함.
//& 예시
class Dog {
    bark() {
        console.log("woof!");
    }
    ;
}
;
class Cat {
    meow() {
        console.log("meow!");
    }
    ;
}
;
const makeSound = (animal) => {
    if (animal instanceof Dog) {
        animal.bark(); // Dog 타입일 때만 호출
    }
    else {
        animal.meow(); // Cat 타입일 때만 호출
    }
};
function isFish(animal) {
    return animal.swim !== undefined;
}
function move(animal) {
    if (isFish(animal)) {
        animal.swim(); // Fish일 때만 swim 호출
    }
    else {
        animal.fly(); // Bird일 때만 fly 호출
    }
}
