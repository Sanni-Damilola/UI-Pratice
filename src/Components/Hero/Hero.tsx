import React from "react";
import styled from "styled-components";
import image from "../Assets/heroimage.png";
import { AiFillWindows, AiFillApple } from "react-icons/ai";
import { GiPenguin } from "react-icons/gi";
import space from "../Assets/space.svg";
import media from "../Assets/mediahero.png";

const Hero = () => {
  return (
    <Container>
      <Left>
        <Textwrap>
          <h2>
            Build <br /> APIs together
          </h2>
          <Span>
            Over 20 million developers use Postman. Get <br /> started by
            signing up or downloading the desktop <br /> app.
          </Span>
          <Wrap>
            <input type={"email"} placeholder="sanni@examole.com" />
            <Button2>Sign Up for Free</Button2>
          </Wrap>
          <p>Download the desktop app</p>
          <Social>
            <Icon>
              <AiFillWindows />
            </Icon>
            <Icon>
              <AiFillApple />
            </Icon>
            <Icon>
              <GiPenguin />
            </Icon>
          </Social>
        </Textwrap>
        <Image src={image} />
      </Left>
      <Left1>
        <Right1>
          <h2>What is Postman?</h2>
          <span>
            Postman is an API platform for building and using APIs. Postman
            simplifies each step of <br /> the API lifecycle and streamlines
            collaboration so you can create better APIs—faster.
          </span>
        </Right1>
        <Space1 src={space} />
        <Spacemedia src={space} />
      </Left1>
      <Media src={media} />
    </Container>
  );
};

export default Hero;

const Textwrap = styled.div`
  flex-direction: column;

  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: flex;
  }
`;

const Right1 = styled.div`
  margin-left: 50px;
  span {
    font-weight: 500;
    font-size: 15px;
    color: rgb(0, 0, 0, 0.6);
    @media screen and (min-width: 300px) and (max-width: 500px) {
      font-size: 12px;
      width: 100px;
    }
  }
  @media screen and (min-width: 300px) and (max-width: 500px) {
    margin-right: 30px;
  }
`;

const Left1 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;

  @media screen and (min-width: 300px) and (max-width: 500px) {
    background-color: white;
    flex-direction: column-reverse;
    display: flex;
  }
`;

const Space1 = styled.img`
  height: 210px;
  margin-right: 80px;

  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: none;
  }
`;

const Spacemedia = styled.img`
  display: none;

  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: block;
    height: 120px;
    margin-left: 130px;
  }
`;

const Space = styled.img`
  height: 210px;
  background-color: red;
  align-self: flex-end;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: none;
  }
`;

const Media = styled.img`
  display: none;
  width: 300px;
  height: 300px;
  object-fit: contain;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: block;
  }
`;

const Button2 = styled.div`
  padding: 11px 15px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  margin-right: 10px;
  border-radius: 0 4px 4px 0;
  background-color: #ff6c37;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 500;
  color: white;
  transition: all 360ms;

  @media screen and (min-width: 300px) and (max-width: 500px) {
    margin-top: 7px;
    border-radius: 4px;
    padding: 10px 30px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    margin-top: 7px;
    border-radius: 4px;
    padding: 10px 30px;
    width: 75%;
  }

  cursor: pointer;
  :hover {
    background-color: #fc5a1f;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: rgb(0, 0, 0, 0.6);
  margin-right: 25px;
`;

const Social = styled.div`
  margin-left: 60px;
  display: flex;
`;

const Wrap = styled.div`
  margin-top: 30px;
  margin-left: 60px;
  display: flex;
  justify-content: center;

  align-items: center;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    flex-direction: column;
    margin-left: 0;
    display: flex;
    align-items: flex-start;
    width: 70%;
    margin-left: 60px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
    display: flex;
    margin-left: 60px;
    align-items: flex-start;
  }

  input {
    border-radius: 4px 0 0 4px;
    height: 42px;
    width: 300px;
    border: 1px solid #fc5a1f;
    padding-left: 10px;
    ::placeholder {
      font-size: 15px;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      width: 90%;
      height: 40px;
      border-radius: 4px;
      padding-right: 10px;
      margin-bottom: 13px;
      margin-right: 10px;
      display: flex;
      ::placeholder {
        font-size: 12px;
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  flex-wrap: wrap;
`;

const Left = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    margin-top: 30px;
    h2 {
      margin-left: 60px;
      font-size: 20px;
    }

    p {
      margin-left: 60px;
      font-weight: 500;
      font-size: 14px;
      color: rgb(0, 0, 0, 0.5);
    }
  }

  h2 {
    margin-left: 60px;
    font-size: 29px;
  }

  p {
    margin-left: 60px;
    font-weight: 500;
    font-size: 14px;
    color: rgb(0, 0, 0, 0.5);
  }
`;

const Span = styled.div`
  margin-left: 60px;
  font-size: 18px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    width: 260px;
  }

  @media screen and (min-width: 300px) and (max-width: 500px) {
    width: 70%;
    margin-left: 60px;
    font-size: 18px;
    font-weight: 400;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 60%;

  @media screen and (max-width: 768px) {
    object-fit: cover;
    height: 500px;
    width: auto;
    position: absolute;
    top: -9%;
    right: -40%;
  }

  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: none;

  }
`;
