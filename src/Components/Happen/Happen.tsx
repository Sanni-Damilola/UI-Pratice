import React from "react";
import styled from "styled-components";
import Happenprops from "../Allprops/Happenprops";
import pintresnt from "../Assets/pintrest.png";
import bitly from "../Assets/bitly.jpg";
import dolby from "../Assets/dolby.jpg";
import exotel from "../Assets/exotel.png";
import postmandev from "../Assets/postmandev.png";
import evangelist from "../Assets/evangelist.png";
import linkedin from "../Assets/linkedin.png";
import intel from "../Assets/intel.png";
import org from "../Assets/org.png";
import klaviyo from "../Assets/klaviyo.png";

const Happen = () => {
  return (
    <Container>
      <Wrap>
        <div>
          <span>What's happening on Postman</span>
        </div>
        <p>
          Browse the largest network of APIs and share what you build with
          developers across the planet.
          <p>Explore the Public API Network →</p>
        </p>
      </Wrap>
      <Wrapper>
        <Happenprops
          mt=""
          br=""
          hg="260px"
          wd={370}
          mr=""
          image={pintresnt}
          text1="Pinterest"
          text2="Pinterest Collection"
          text3="4 Collections . 4 ApIs"
          text4="Public workspace that Pinterest users to make Collections public"
          view="500+"
        />
        <Happenprops
          hg="260px"
          mr=""
          wd={383}
          mt=""
          view="500+"
          br=""
          image={bitly}
          text1="Bitly"
          text2="Bitly API Workspace"
          text3="1 Collections . 1 ApI"
          text4="Welcome to the Bitly API Workspace Here you can find access to all the public API"
        />
        <Happenprops
          mr=""
          view="4K+"
          wd={380}
          br=""
          hg="240px"
          image={dolby}
          mt=""
          text1="Dolby"
          text2="Doly.io Media APIs"
          text3="7 Collections"
          text4="Dolby.io Media APIs Postman Collection"
        />
        <Happenprops
          view="1K+"
          mr=""
          wd={380}
          image={exotel}
          br=""
          text1="Exotel"
          hg="260px"
          mt=""
          text2="Exotel APIs "
          text3="11 Collections"
          text4="The Official Exotel API Workspace - Explore our SMS Voice APIs to powee your business with a full stack customer engagement platform"
        />
        <Happenprops
          view="100+"
          mr=""
          image={postmandev}
          wd={390}
          text1="Postman DevRel"
          mt=""
          hg="250px"
          text2="GraphQL Security 101"
          text3="2 Collections"
          br=""
          text4="This workspace is an introduction to GraphQL Secuity"
        />
        <Happenprops
          mr=""
          image={evangelist}
          view="1k"
          text1="API Evangelist"
          mt=""
          wd={380}
          hg="235px"
          text2="Pew Research Center"
          text3="2 Collections"
          br=""
          text4="This is a Public workspace for Pinterest users to make Collections public"
        />
        <Happenprops
          image={linkedin}
          mr=""
          mt=""
          view="10K+"
          br=""
          text1="Linkedin"
          hg="260px"
          text2="Linkedin Marketing Solutions"
          text3="8 Collections"
          wd={390}
          text4="A workspace outlining different use cases for our Marketing APIs. Fork and watch your favorite collextions to be notified on updates"
        />
        <Happenprops
          image={intel}
          text1="Intel® Security Libraries for Data Center"
          br=""
          mt="10px"
          hg="290px"
          wd={380}
          mr="18px"
          text2="Intel® Secl-DC-Foundational Security"
          view="4K+"
          text3="5 Collections"
          text4="Quick start API Collections for Foundational Security use cases of intel® SecL-DC"
        />
        <Happenprops
          hg="260px"
          view="50+"
          image={org}
          mr=""
          mt=""
          br="value"
          wd={380}
          text1="Postman Customers Org"
          text2="Public SOAP APIs"
          text3="1 Collection"
          text4="Public workspace that Pinterest users to make Collections public"
        />
        <Happenprops
          mt=""
          hg="260px"
          mr=""
          br=""
          image={klaviyo}
          wd={380}
          view="10K+"
          text1="Klaviyo"
          text2="Klaviyo Developers"
          text3="3 Collections . 3 ApIs"
          text4="Klaviyo empowers creators to own their destiny. join over 265,000 + businesses who rely on Klaviyo for growth"
        />
      </Wrapper>
    </Container>
  );
};

export default Happen;

const Wrap = styled.div`
  margin-left: 52px;

  div {
    @media screen and (min-width: 300px) and (max-width: 500px) {
      margin-left: 20px;
      margin-bottom: 10px;
    }
  }

  p {
    @media screen and (max-width: 768px) {
      text-align: left;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 300px) and (max-width: 500px) {
    margin-left: 0;
    flex-wrap: wrap;
  }
`;

const Wrapper = styled.div`
  flex-wrap: wrap;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(2fr, 1);
  }
`;
const Container = styled.div`
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }

  span {
    font-size: 25px;
    font-weight: 600;
  }

  @media screen and (min-width: 300px) and (max-width: 500px) {
    margin-top: 500px;
  }

  p {
    font-size: 17px;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.6);
    display: flex;

    @media screen and (min-width: 300px) and (max-width: 500px) {
      font-size: 15px;
      margin-left: 20px;
      flex-wrap: wrap;
    }

    p {
      @media screen and (min-width: 300px) and (max-width: 500px) {
        margin-left: 0;
        font-size: 14px;
      }

      margin: 0;
      color: rgb(2, 101, 210);
      cursor: pointer;
      display: flex;
      :hover {
        transition: all 360ms;
        text-decoration: underline;
      }
    }
  }
`;
