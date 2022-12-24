import React from "react";
import styled from "styled-components";
import images from "../Assets/postman.png";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  return (
    <Container>
      <Card>
        <Top>
          <Left>Sign In</Left>
          <Right>
            <span>Create Account </span> instead?
          </Right>
        </Top>
        <Emailholder>
          <Name>Email or Username</Name>
          <Input type="name" />
        </Emailholder>
        <Emailholder>
          <Name>Password</Name>
          <Input type="Password" />
        </Emailholder>
        <Emailholder>
          <Signed>
            <BoxH>
              <Box type="checkbox" />
              <Text>Stay signed in for 30 days</Text>
            </BoxH>
            <Forget>Forgot Password?</Forget>
          </Signed>
          <Button>Sign in</Button>
        </Emailholder>
        <Emailholder>
          <Or>
            <Hold>
              <Line></Line>
              <Tex>or</Tex>
              <Line></Line>
            </Hold>
          </Or>
        </Emailholder>
        <Emailholder>
          <Button2>
            <White>
              <FcGoogle />
            </White>{" "}
            Sign in with Google
          </Button2>
        </Emailholder>
        <Emailholder>
          <Button3>Sign in with SSO</Button3>
        </Emailholder>
      </Card>
      <Image>
        <Images src={images} />
      </Image>
      <Foot>
        ©2022 sanni, Inc. All rights reserved. Terms of use Privacy Policy
      </Foot>
    </Container>
  );
};

export default Signin;
const Images = styled.img`
  height: 90px;
  margin-top: 3px;
`;
const Image = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  position: absolute;
`;
const Foot = styled.div`
  font-size: 12px;
  color: #999;
  text-align: center;
  margin-top: 15px;
`;
const White = styled.div`
  width: 35px;
  height: 35px;
  left: 2px;
  position: absolute;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
const Tex = styled.div`
  font-size: 15px;
  color: #9b9b9b;
  margin: 5px;
`;
const Line = styled.div`
  width: 80px;
  height: 1px;
  background-color: #d4d4d4;
`;
const Hold = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
`;
const Or = styled.div`
  width: 100%;
  font-size: 12px;
  height: 40px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button3 = styled.div`
  width: 100%;
  font-size: 14px;
  height: 40px;
  color: #6b6b6b;
  border-radius: 3px;
  cursor: pointer;
  margin-top: -9px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 3px;
`;
const Button2 = styled.div`
  width: 100%;
  font-size: 14px;
  height: 40px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  margin-top: -9px;
  background-color: #2b77f3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
`;
const Button = styled.div`
  width: 100%;
  font-size: 14px;
  height: 40px;
  color: white;
  border-radius: 3px;
  margin-top: 20px;
  cursor: pointer;
  background-color: #f26b3a;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Forget = styled.div`
  color: #3e92f2;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const Text = styled.div`
  font-size: 13px;
  color: #282828;
  font-weight: 500;
  margin-left: 5px;
`;
const Box = styled.input`
  height: 19px;
  width: 19px;
  background-color: #f26b3a;
  border-radius: 2px;

`;
const BoxH = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
`;
const Signed = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 100%;
  font-size: 14px;
  height: 40px;
  color: #282828;
  border-radius: 3px;
  border: 1px solid #d4d4d4;
  margin-top: 10px;
  outline: none;
  /* padding-left: 5px; */
`;
const Name = styled.div`
  font-size: 13px;
  color: #282828;
  font-weight: 600;
`;
const Emailholder = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 12px;
`;
const Right = styled.div`
  cursor: pointer;
  font-size: 13px;
  span {
    color: #3e92f2;
    font-size: 13px;
    font-weight: 600;
    :hover {
      text-decoration: underline;
    }
  }
`;
const Left = styled.h4`
  font-size: 20px;
  font-weight: bold;
  color: #1a1a1a;
`;
const Top = styled.div`
  width: 85%;
  display: flex;
  /* background-color: green; */
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
`;
const Card = styled.div`
  width: 400px;
  height: 550px;
  display: flex;
  background-color: white;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 3px;
  padding-bottom: 4px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: red; */
  align-items: center;
  position: relative;
  flex-direction: column;
`;
