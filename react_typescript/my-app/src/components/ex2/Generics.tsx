// ! 제네릭은 타입스크립트에서 매우 유용한 기능으로, 타입을 매개변수로 받아 다양한 데이터 타입에 대해 동작할 수 있는 컴포넌트를 만드는 데 도움을 줍니다. 제네릭을 사용하면 코드의 재사용성을 높이고, 타입 안정성을 유지할 수 있습니다.
// ! 제네릭을 사용할 때는 타입 매개변수를 사용하여 함수나 클래스의 타입을 정의합니다. 일반적으로 <T>와 같은 형태로 정의합니다.

interface Greeting<T> {
  contents: T;
}

const name: Greeting<string> = {contents: "성다운"};
const age: Greeting<number> = {contents: 26};

const Generics = () => {
  return <div>
    <h2>안녕하세요 {name.contents}님</h2>
    <h2>당신의 나이는 {age.contents}세 입니다.</h2>
  </div>;
};

export default Generics;
