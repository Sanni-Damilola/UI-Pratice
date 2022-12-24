import React from "react";
import styled from "styled-components";
import Definebox from "../Allprops/Definebox";
import img1 from "../Assets/spaner.svg";
import img2 from "../Assets/api.svg";
import img3 from "../Assets/workspace.svg";
import img4 from "../Assets/governance.svg";

const Define = () => {
  return (
    <Container>
      <Wrapper2>
        <Definebox
          image={img1}
          span="API Tools"
          p="A comprehensive set of tools that help accelerate the API Lifecycle -
        from design, testing, documentation, and mocking to discovery."
        />
        <Definebox
          image={img2}
          span="API Respository"
          p="Easily store, iterate and collaborate around all your API artifacts on one central platform used across teams."
        />
        <Definebox
          image={img3}
          span="Workspaces"
          p="Organize your API work and collaborate with teammates across your organization or stakeholders across the world."
        />
        <Definebox
          image={img4}
          span="Governace"
          p="Improve the quality of APIs with governance rules that ensure APIs are designed, built, tested, and distributed meeting organizational standards."
        />
        <Wrapmedia>
          <Button>Learn more</Button>
        </Wrapmedia>
      </Wrapper2>
    </Container>
  );
};

export default Define;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 320px) {
    display: none;
  }
`;
const Wrapmedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  @media screen and (max-width: 320px) {
    display: block;
    align-self: center;
    display: flex;
    margin-top: 20px;
  }
`;

const Button = styled.div`
  padding: 5px 15px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  margin-right: 10px;
  border-radius: 4px;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 400;
  color: black;
  transition: all 360ms;
  cursor: pointer;
  :hover {
    border: 1px solid rgb(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (min-width: 300px) and (max-width: 500px) {
  }
`;

const Wrapper2 = styled.div`
  width: 95%;
  margin-left: 18px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: grid;
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
  }

  /* @media screen and (max-width: 320px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  } */
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: #f9f9f9;
`;
