interface GreetingProps {
  name: string;
  age?: number; //? 선택적 프로퍼티
}

const Greeting = ({name, age}: GreetingProps) => {
  return(
<div>
  <h2>안녕하세요 {name}님</h2>
  {age && <h2>당신의 나이는 {age}세 입니다.</h2>} {/* 조건부 렌더링, age가 0, null, undefined, false, NaN, 빈 문자열 등과 같은 falsy 값이 아닐 경우에만 표시 */}
</div>
  );
};

export default Greeting;