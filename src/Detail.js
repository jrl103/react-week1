import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = ({ days }) => {
  const { id } = useParams();
  const circle = [0, 1, 2, 3, 4];
  const [count, setCount] = React.useState();
  return (
    <WrapDetail>
      <h3>
        <DayDetail>{days[id]}요일</DayDetail> 평점 남기기
      </h3>
      <div>
        {circle.map((v, i) => {
          return (
            <Circle
              key={i}
              onClick={() => {
                setCount(i);
              }}
              style={{ backgroundColor: i <= count ? "purple" : "#e0e0e0" }}
            ></Circle>
          );
        })}
      </div>
      <Link to="/">
        <ButtonDetail>평점 남기기</ButtonDetail>
      </Link>
    </WrapDetail>
  );
};
const WrapDetail = styled.div`
  text-align: center;
  margin-top: 100px;
`;
const DayDetail = styled.span`
  color: #fff;
  background-color: salmon;
  border: none;
  border-radius: 10px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  width: 50px;
`;
const Circle = styled.div`
  margin: 3px;
  width: 30px;
  height: 30px;
  background-color: #e0e0e0;
  border-radius: 50%;
  float: left;
`;
const ButtonDetail = styled.button`
  color: #fff;
  background-color: aquamarine;
  border: none;
  border-radius: 10px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  width: 100px;
`;
export default Detail;
