import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import Detail from "./Detail";

function App() {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  return (
    <div className="App">
      <Container>
        <Route path="/" exact>
          <Main days={days} />
        </Route>
        <Route path="/Detail/:id" exact>
          <Detail days={days} />
        </Route>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 360px;
  min-height: 70vh;
  background-color: #fff;
  padding: 16px;
  margin: 40px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default App;

// - Q1. 평균 평점 state를 메인 컴포넌트에 두셨나요, 하위 컴포넌트인 평균 평점 컴포넌트에 두셨나요?
// (state와 props 개념을 떠올려 보세요)
//     - 선택하신 방식의 장단점은 무엇이라 생각하시나요?
//     - 평균 평점과 리셋 버튼을 추가할 때 어떤 고민을 하셨나요?
//  A. - 하위 컴포넌트에 두었습니다.
//       useState 를 사용해서 변경되는 평균값을 적용했고,
//       modify 함수를 사용해서 리셋시켰습니다.
//
// - Q2. 과제 구현 간, 상태관리를 위해 useState를 사용해보고 배운 점을 적어주세요.
//   A. 리액트에서 임포트 해오면 간편하게 사용할 수 있다.

// - Q3. 랜덤 숫자가 아닌 평점 남기기 페이지에서 입력한 숫자를 반영하기 위해서는 어떻게 해야 할까요?
// - **잘 구현되지 않은 부분이 있다면 어떤 것 때문이었을까요?**
//     - 평점 남기기 페이지에서 입력한 숫자가 반영이 잘 되지 않았을거에요! 우리의 데이터를 저장할 공간이 없기 때문이죠!
//   A. 잘 모르겠습니다....    
//     → 지금의 불편함을 꼭 기억해주세요. 다음 단계로 이 불편함을 해결해주기 위한 툴들을 배우게 될 것입니다.