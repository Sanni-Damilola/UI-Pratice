import React from 'react'
import styled from 'styled-components'
import images from "../Assets/hero.svg"
import {FcGoogle} from "react-icons/fc"

const Signup = () => {
  return (
    <Container>
      <Card>
        <Lef>
          <Images src={images} />
        </Lef>
        <Righ>
          <Top>
                <Left>Create Postman Account</Left>
                <Right><span>Sign In </span> instead?</Right>
          </Top>
           <Emailholder>
                <Name>Email</Name>
                <Input type="search"/>
            </Emailholder>
            <Emailholder>
                <Name>Username</Name>
                <Input type="search"/>
            </Emailholder>
            <Emailholder>
                <Name>Password <Sh>SHOW</Sh></Name>
                <Input type="password"/>
            </Emailholder>
            <Emailholder>
              <BoxH>
                  <Text> <Box type="checkbox"/>Sign up to get product updates, news, and other <br /> marketing communications.</Text>
              </BoxH>
             <Emailholder>
                 <BoxH2>
                        <Box type="checkbox"/>
                         <Text>Stay signed in for 30 days</Text>
                    </BoxH2>
             </Emailholder>
            </Emailholder>
            <Emailholder>
              <Pol>By creating an account, I agree to the Terms and Privacy Policy.</Pol>
            </Emailholder>
            <Emailholder>
              <Button>Sign in</Button>
            </Emailholder>
              <Emailholder>
                <Button2>
                    <White><FcGoogle /></White> Sign in with Google
                </Button2>
            </Emailholder>
        </Righ>
      </Card>
      <Foot>©2022 sanni, Inc. All rights reserved.</Foot>
    </Container>
  )
}

export default Signup
const Foot = styled.div`
    font-size: 12px;
    color: #999;
    text-align: center;
    margin-top: 15px;
`
const Button2 = styled.div`
    width: 100%;
    font-size: 14px;
    height: 40px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    margin-top: -9px;
    background-color: #2B77F3;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-decoration: none;
`
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
`
const Tex = styled.div`
    font-size: 15px;
    color: #9b9b9b;
    margin: 5px;
`
const Line = styled.div`
    width: 80px;
    height: 1px;
    background-color: #d4d4d4;
`
const Hold = styled.div`
    width: 180px;
    display: flex;
    align-items: center;
`
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
`
const Button = styled.div`
    width: 100%;
    font-size: 14px;
    height: 40px;
    color: white;
    border-radius: 3px;
    /* margin-top: 20px; */
    cursor: pointer;
    background-color: #F26B3A;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Pol = styled.div`
  font-size: 13px;
    color: #282828;
    font-weight: 500;
    margin-top: -14px;
`
const Text = styled.div`
    font-size: 13px;
    color: #282828;
    font-weight: 500;
    margin-left: 5px;
    width: 100%;
`
const Box = styled.input`
    height: 19px;
    width: 19px;
    background-color: #F26B3A;
    border-radius: 2px;
`
const BoxH2 = styled.div`
    width: 320px;
    display: flex;
    align-items: center;
    margin-top: 10px;
`
const BoxH = styled.div`
    width: 320px;
    display: flex;
    align-items: center;
`
const Sh = styled.div`
  opacity: .4;
    font-size: 12px;
    font-weight: 600;
    color: #282828;
    cursor: pointer;
    float: right;
`
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
`
const Name = styled.div`
    font-size: 13px;
    color: #282828;
    font-weight: 600;
    width: 100%;
`
const Emailholder = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 12px;
`
const Right = styled.div`
    cursor: pointer;
    font-size: 13px;
    span{
        color: #3e92f2;
        font-size: 13px;
        font-weight: 600;
        :hover{
        text-decoration: underline;
    }
    }
`
const Left = styled.h4`
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
`
const Top = styled.div`
    width: 85%;
    display: flex;
    /* background-color: green; */
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
`
const Righ = styled.div`
  width: 50%;
  height: 100%;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  align-items: center;
  flex-direction: column
`
const Images = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Lef = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  align-items: center;
`
const Card = styled.div`
  width: 800px;
  height: 600px;
  display: flex;
  background-color: white;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: red; */
    justify-content: center;
`