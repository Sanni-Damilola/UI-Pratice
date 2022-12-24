import React from "react";
import styled from "styled-components";
import future from "../Assets/future.png";

const FutureComponent = () => {
  return (
    <div>
      <Container>
        <Left>
          <Heading>The future is API-first</Heading>
          <Content>
            At Postman, we believe the future will be built with APIs. The
            API-first World graphic novel
            <br /> tells the story of how and why the API-first world is coming
            to be.
          </Content>
          <Button>Read the Graphic Novel</Button>
        </Left>
        <Image>
          <Right src={future} />
        </Image>
      </Container>
    </div>
  );
};

export default FutureComponent;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f8f8f8;
  padding-top: 50px;
  @media screen and (max-width: 620px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }
`;
const Left = styled.div`
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 250px;
    padding-left: 30px;
    margin-left: 0;
  }
  @media screen and (max-width: 620px) {
    width: 90%;
    margin-top: 20px;
    margin-left: 0;
  }
  @media screen and (max-width: 320px) {
    margin-left: 0;
    width: 80%;
  }
`;
const Heading = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
const Content = styled.p`
  font-size: 15px;
  color: #6d6d6d;
`;
const Button = styled.button`
  width: 150px;
  height: 30px;
  color: #6d6d6d;
  border: 1px solid #6d6d6d;
  background-color: #f8f8f8;
  border: 1px solid #a7a7a7;
  border-radius: 3px;
  font-size: 12px;
  transition: all 350ms;
  :hover {
    border: 1px solid #5e5e5e;
  }
`;
const Right = styled.img`
  object-fit: cover;
  object-position: left;
  @media screen and (max-width: 1025px) {
    width: 300px;
    height: 200px;
  }
  @media screen and (max-width: 320px) {
    width: 85%;
    margin-left: 20px;
  }
`;
const Image = styled.div`
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    padding-right: 30px;
  }
`;
