import React from "react";
import styled from "styled-components";
import { TfiEye } from "react-icons/tfi";

interface props {
  image: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  wd: number;
  view: string;
  br: string;
  mr: string;
  mt: string;
  hg: string;
}

const Happenprops: React.FC<props> = ({
  image,
  mt,
  text1,
  text2,
  text3,
  text4,
  wd,
  view,
  br,
  mr,
  hg,
}) => {
  return (
    <Container hg={hg}>
      <br />
      <Wrapper>
        <Right>
          <Image br={br} src={image} />
          <Span>{text1}</Span>
        </Right>
        <Left mr={mr} mt={mt}>
          workspace
        </Left>
      </Wrapper>
      <Div>{text2}</Div>
      <P1>{text3}</P1>
      <P2 wd={wd}>{text4}</P2>
      <P3>
        <div>
          <TfiEye />
        </div>
        {view}
      </P3>
    </Container>
  );
};

export default Happenprops;

const Div = styled.div`
  margin-left: 17px;
  margin-top: 10px;
  font-size: 16px;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    font-size: 14px;
  }
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Right = styled.div`
  display: flex;
  margin-left: 17px;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div<{ mr: string; mt: string }>`
  border: 2px solid #0ab80a7f;
  padding: 1px 10px;
  margin-right: 16px;

  font-size: 10px;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    margin-top: 10px;
    margin-left: 10px;
  }
  margin-left: ${(mr) => mr.mr};
  margin-top: ${(mt) => mt.mt};
  color: green;
  border-radius: 3px;
  text-transform: uppercase;
`;
const Span = styled.div`
  font-weight: 400;
  font-size: 18px;
`;
const Image = styled.img<{ br: string }>`
  width: 57px;

  height: 57px;
  margin-right: 10px;
  border-radius: ${({ br }) => (br ? "" : "")};
  object-fit: contain;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const P1 = styled.div`
  margin-left: 17px;
  font-size: 13.7px;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    font-size: 12px;
  }
  color: #000000a0;
  font-weight: 500;
  margin-bottom: 10px;
`;
const P2 = styled.div<{ wd: number }>`
  margin-left: 17px;
  width: ${(width) => width.wd}px;
  font-size: 13.7px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }

  color: #000000a0;
  font-weight: 500;
  margin-bottom: 10px;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    font-size: 12px;
    width: 80%;
  }
`;
const P3 = styled.div`
  margin-left: 14px;
  font-size: 13.7px;
  color: #000000a0;
  font-weight: 500;
  display: flex;
  width: 60px;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    margin-right: 5px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 300px) and (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

const Container = styled.div<{ hg: string }>`
  width: 29.5%;
  margin: 10px;
  height: ${(hg) => hg.hg};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: 340px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 300px) and (max-width: 500px) {
    width: 80%;
    margin-left: 28px;
    height: auto;
  }
`;
