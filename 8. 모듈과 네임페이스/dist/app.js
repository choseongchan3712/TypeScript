"use strict";
//! 1. 모듈
//? 모듈은 코드를 여러 파일로 나누어 관리할 수 있도록 도와주는 기능이야. 이를 통해 각 파일이 독립된 공간에서 실행될 수 있고, 파일 간에 필요한 함수나 클래스를 공유할 때는 명시적으로 내보내고 가져옴.
Object.defineProperty(exports, "__esModule", { value: true });
//? 모듈의 기본 사용법:
//# (1) 내보내기(export):
//? 특정 함수, 변수, 클래스 등을 다른 파일에서 사용할 수 있도록 내보내는 명령어.
//# (2) 가져오기(import):
//? 다른 파일에서 내보낸 항목을 현재 파일에서 가져와 사용하는 명령어.
//& 예시
//? export는 mathUtils.ts에서 보기
const mathUtils_1 = require("./mathUtils");
console.log((0, mathUtils_1.add)(2, 3)); //? 5
//! 2. 네임스페이스
//? 네임스페이스는 전역 스코프의 혼잡을 방지하고, 관련된 기능들을 그룹으로 묶어 관리할 수 있도록 도와줌. 주로 모듈 시스템을 사용하기 전에 네임스페이스를 많이 썼지만, 현재는 모듈 사용이 더 권장되는 방식임.
//& 예시
var Geometry;
(function (Geometry) {
    function calculateArea(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.calculateArea = calculateArea;
    function calculateCircumference(radius) {
        return 2 * Math.PI * radius;
    }
    Geometry.calculateCircumference = calculateCircumference;
})(Geometry || (Geometry = {}));
//? 네임스페이스 내부 함수 호출
let area = Geometry.calculateArea(5);
console.log(area); // 78.53981633974483
