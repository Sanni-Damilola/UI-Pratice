import React from "react";
import styled from "styled-components";
import images from "../Assets/toon.svg";

const Started = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Top>Get started with Postman</Top>
          <InputHold>
            <Input type={"email"} placeholder="sanni@examole.com" />
            <Button2>Sign Up for Free</Button2>
          </InputHold>
        </Left>
        <Right>
          <Images src={images} />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Started;
const Images = styled.img`
  @media screen and (max-width: 1048px) {
    height: 155px;
  }
  @media screen and (max-width: 996px) {
    height: 110px;
  }
  @media screen and (max-width: 574px) {
    height: 90px;
  }
  @media screen and (max-width: 406px) {
    height: 70px;
  }
`;
const Button2 = styled.div`
  height: 39px;
  background-color: rgb(255, 108, 55);
  color: rgb(255, 255, 255);
  font-weight: 600;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 14px;
  align-items: center;
  width: 125px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  @media screen and (max-width: 996px) {
    width: 140px;
  }
  @media screen and (max-width: 914px) {
    width: 160px;
  }
  @media screen and (max-width: 626px) {
    width: 180px;
  }
`;
const Input = styled.input`
  width: 66%;
  ::placeholder {
    font-size: 15px;
  }
  height: 35px;
  display: flex;
  border: 1px solid #ff6c37;
  outline: none;
  padding-left: 10px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  @media screen and (max-width: 1048px) {
    width: 85%;
  }
`;
const InputHold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
const Top = styled.div`
  font-size: 20px;
  line-height: 1.2;
  color: rgb(33, 33, 33);
  letter-spacing: -0.56px;
  font-weight: 600;
`;
const Left = styled.div`
  width: 47%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  /* background-color: red; */
  @media screen and (max-width: 1048px) {
    width: 100%;
  }
  @media screen and (max-width: 996px) {
    width: 50%;
  }
  @media screen and (max-width: 574px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  /* background-color: gray; */
  @media screen and (max-width: 1048px) {
    margin-top: 20px;
    width: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: flex-end;
  }
  @media screen and (max-width: 574px) {
    justify-content: center;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  /* background-color: green; */
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  background-color: #f9f9f9;
  padding-top: 50px;
  padding-bottom: 50px;
  /* align-items: center; */
  justify-content: center;
`;
