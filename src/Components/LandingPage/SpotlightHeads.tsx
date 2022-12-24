import React from "react";
import styled from "styled-components";

interface iprops {
  head: string;
  about: string;
  blueText: string;
  size: string;
}

const SpotlightHeads: React.FC<iprops> = ({ head, about, blueText, size }) => {
  return (
    <div>
      <Container>
        <Headings>
          <FirstHead size={size}>
            <HeadText>{head}</HeadText>
            <AboutText>
              {about}
              <span> {blueText}</span>
            </AboutText>
          </FirstHead>
        </Headings>
      </Container>
    </div>
  );
};

export default SpotlightHeads;

const Container = styled.div``;
const Headings = styled.div``;
const FirstHead = styled.div<{ size: string }>`
  font-size: ${(props) => props.size};
`;
const HeadText = styled.h2`
  font-weight: 500;
`;
const AboutText = styled.p`
  color: #6d6d6d;
  span {
    color: #006eff;
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
