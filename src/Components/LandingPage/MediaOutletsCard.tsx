import React from "react";
import styled from "styled-components";

interface iprops {
  logo: any;
  head: string;
  content1: string;
  content2: string;
  content3: string;
  foot1: string;
  foot2: string;
  foot3: string;
  footIcon: any;
  footIcon1: any;
  footIcon2: any;
}

const MediaOutletsCard: React.FC<iprops> = ({
  logo,
  head,
  content1,
  content2,
  content3,
  foot1,
  foot2,
  foot3,
  footIcon,
  footIcon1,
  footIcon2,
}) => {
  return (
    <div>
      <Container>
        <LogoWrap>
          <Logo src={logo} />
        </LogoWrap>
        <Content>
          <Head>
            <HeadText>{head}</HeadText>
            <HeadLogo></HeadLogo>
          </Head>
          <Content1>{content1}</Content1>
          <Content2>{content2}</Content2>
          <Content3>{content3}</Content3>
          <Foot>
            <FootLings>
              {footIcon}
              <Text>{foot1}</Text>
            </FootLings>
            <FootLings>
              {footIcon1}
              <Text>{foot2}</Text>
            </FootLings>
            <FootLings>
              {footIcon2}
              <Text>{foot3}</Text>
            </FootLings>
          </Foot>
        </Content>
      </Container>
    </div>
  );
};

export default MediaOutletsCard;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const LogoWrap = styled.div`
  height: 50px;
  width: 50px;
  margin-top: 15px;
`;
const Logo = styled.img`
  width: 50px;
  object-fit: contain;
  object-position: center;
`;
const Head = styled.div`
  height: 25px;
  display: flex;
`;
const HeadText = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
const HeadLogo = styled.div``;
const Content = styled.div`
  margin-top: 12px;
  margin-bottom: 15px;
  margin-left: 7px;
`;
const Content1 = styled.div`
  margin-top: 15px;
  color: #6d6d6d;
  font-size: 12px;
`;
const Content2 = styled.div`
  color: #6d6d6d;
  font-size: 13px;
`;
const Content3 = styled.div`
  height: 25px;
  color: #6d6d6d;
  font-size: 13px;
`;
const Foot = styled.div`
  height: 25px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const FootLings = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;
const Text = styled.div`
  color: #6d6d6d;
  margin-left: 5px;
  font-size: 13px;
`;
const Icon = styled.div``;
