"use strict";
//? 타입스크립트는 자바스크립트의 확장판이기 때문에, 많은 자바스크립트 라이브러리들과 함께 사용할 수 있음. 
//? 하지만 자바스크립트 라이브러리는 타입스크립트를 염두에 두고 작성되지 않았기 때문에, 이들과의 통합에 타입 정보가 필요할 수 있음. 
//? 이때 DefinitelyTyped 프로젝트에서 제공하는 @types 패키지를 활용하면, 외부 라이브러리의 타입 정의를 사용할 수 있음.
Object.defineProperty(exports, "__esModule", { value: true });
//! 1. @types 패키지 설치
//? 외부 라이브러리와 함께 사용할 타입 정의 파일을 설치하려면, @types로 시작하는 패키지를 설치해야 함.
//& 예시
//# npm install lodash
//# npm install @types/lodash --save-dev
//? 여기서 lodash 라이브러리를 설치한 후, 그에 맞는 타입 정의 파일 @types/lodash를 설치해야 함. 
//? 이렇게 하면 타입스크립트에서 lodash의 함수들을 타입 안전하게 사용할 수 있음.
//! 2. 타입스크립트와 외부 라이브러리 통합
//& 예시
const _ = require("lodash");
const arr = [1, 2, 3, 4];
console.log(_.shuffle(arr)); //? 배열을 무작위로 섞음
