import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useState } from "react";

const Main = ({ days }) => {
  const circle = [0, 1, 2, 3, 4];
  const num = new Array(7).fill(0).map((v) => Math.floor(Math.random() * 5));
  const avgNum = num.reduce((acc, cur) => acc + cur + 1, 0) / 7;
  const [avg, setAvg] = React.useState(avgNum.toFixed(1));
  const reset = () => setAvg("0.0");

  return (
    <Wrap>
      <Title>내 일주일은?</Title>
      {days.map((day, index) => {
        return (
          <Week>
            <DayTitle key={index}>{day}</DayTitle>
            <>
              {circle.map((value, id) => {
                const number = num[index];
                return (
                  <Circle
                    key={id}
                    style={{
                      backgroundColor: id <= number ? "yellow" : "#c0c0c0",
                    }}
                  ></Circle>
                );
              })}
              ;
            </>
            <Link to={`/detail/${index}`}>
              <Triangle></Triangle>
            </Link>
          </Week>
        );
      })}

      <AverageBox>
        <AverageText>평균 평점</AverageText>
        <Average>{avg}</Average>
        <button onClick={reset}>Reset</button>
      </AverageBox>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
const Title = styled.h3`
  text-align: center;
  margin: 20px;
`;
const Week = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const DayTitle = styled.div`
  padding: 16px;
  margin: 8px;
`;
const Circle = styled.div`
  margin: 3px;
  width: 30px;
  height: 30px;
  background-color: #e0e0e0;
  border-radius: 50%;
  float: left;
`;
const Triangle = styled.div`
  margin-left: 10px;
  width: 0;
  height: 0;
  border-bottom: 18px solid transparent;
  border-top: 18px solid transparent;
  border-left: 25px solid purple;
  border-right: 25px solid transparent;
`;
const AverageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AverageText = styled.p`
  font-size: 20px;
  font-weight: bolder;
  color: purple;
`;
const Average = styled.p`
  font-size: 20px;
  font-weight: bolder;
  color: purple;
`;
export default Main;
