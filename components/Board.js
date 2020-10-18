import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Dimensions, Alert, StyleSheet } from "react-native";
import * as Font from "expo-font";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");
//////////////////// Style ////////////////////
const ScrollContainer = styled.ScrollView`
  width: 100%;
  flex: 4;
  background-color: black;
`;

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Result = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const AnswerContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const AnswerText = styled.Text`
  margin: 25px 12px 0 15px;
  font-size: 23px;
  color: gray;
  ${({ fontLoaded }) => fontLoaded && `font-family: BlackHanSans `}
`;

const Text = styled.Text`
  margin: 25px 12px 0 15px;
  font-size: 20px;
  color: white;

  ${({ fontLoaded }) => fontLoaded && `font-family: BlackHanSans `}
`;

//////////////////// Components ////////////////////

const Board = ({ results }) => {
  console.log(results.length);
  const [fontLoaded] = Font.useFonts({
    BlackHanSans: require("../assets/BlackHanSans-Regular.ttf"),
  });

  return (
    <ScrollContainer>
      <Container>
        {results.map((result, idx) => (
          <Result key={idx}>
            <Text fontLoaded={fontLoaded} style={{ color: "gray" }}>
              {results.length - idx < 10
                ? `0${results.length - idx}`
                : results.length - idx}
              회
            </Text>
            <AnswerContainer>
              <AnswerText fontLoaded={fontLoaded}>{result.answer}</AnswerText>

              {result.strike === 0 && result.ball === 0 ? (
                <Text fontLoaded={fontLoaded} style={{ color: "red" }}>
                  아웃
                </Text>
              ) : (
                <>
                  <Text fontLoaded={fontLoaded} style={{ color: "gray" }}>
                    {result.strike} 스트라이크
                  </Text>
                  <Text fontLoaded={fontLoaded} style={{ color: "gray" }}>
                    {result.ball} 볼
                  </Text>
                </>
              )}
            </AnswerContainer>
          </Result>
        ))}
      </Container>
    </ScrollContainer>
  );
};

export default Board;
