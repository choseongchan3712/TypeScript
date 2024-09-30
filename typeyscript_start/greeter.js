// ! typescript 설치하기
//# npm install -g typescript
function greeter(person) {
    return "hello, " + person;
}
var user = "Jane User";
document.body.textContent = greeter(user);
//! 코드 컴파일하기
//# tsc greeter.ts
