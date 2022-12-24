import React from "react";
import styled from "styled-components";

interface props {
  image: string;
  span: string;
  p: string;
}

const Definebox: React.FC<props> = ({ span, p, image }) => {
  return (
    <Container>
      <Image src={image} />
      <br />
      <span>{span}</span>
      <p>{p}</p>
    </Container>
  );
};

export default Definebox;

const Image = styled.img`
  margin-top: 10px;
  width: 40px;
  height: 40px;
  margin-left: 17px;
`;

const Container = styled.div`
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  width: 22%;
  height: 220px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: auto;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 320px) and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: auto;
    margin-bottom: 30px;
    height: auto;
  }
  background-color: #ffffff;
  border-radius: 3px;
  cursor: pointer;
  span {
    margin-left: 17px;
    font-weight: 600;

    font-size: 17px;
  }
  transition: all 360ms;

  :hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    span {
      color: rgb(2, 101, 210);
    }
  }

  p {
    color: rgb(0, 0, 0, 0.5);
    font-weight: 500;
    width: 270px;
    font-size: 14px;
    margin-left: 17px;

    @media screen and (max-width: 320px) {
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
`;
