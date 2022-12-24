import React from "react";
import styled from "styled-components";
import MediaOutletsCard from "./MediaOutletsCard";
import SpotlightHeads from "./SpotlightHeads";
import { AiOutlineRight } from "react-icons/ai";
import youtube from "../Assets/youtube.png";
import { BsEye } from "react-icons/bs";
import shopify from "../Assets/shopify.png";
import postman from "../Assets/po.svg";
import december from "../Assets/december.png";
import devrel from "../Assets/devrel.png";
import outsystem from "../Assets/outsystem.png";
import hsbc from "../Assets/hsbc.png";
import sign from "../Assets/signeasy.png";
import gusto from "../Assets/gusto.png";
import attend from "../Assets/attentive.png";

const SpotlightComponent = () => {
  return (
    <div>
      <Container>
        <Head>
          <Single>
            <SpotlightHeads
              head="In the spotlight"
              about="The best APIs, collections, and workspaces handpicked by Postman."
              blueText=" See what more is in the spotlight →
"
              size=""
            />
          </Single>
          <Double>
            <HeadCards>
              <SpotlightHeads
                head="Trending APIs, collections and workspaces"
                about="There’s an API for that: discover the APIs, workspaces, and collections the Postman community is creating, viewing, and forking."
                blueText="  
View Complete List →
"
                size="13px"
              />
            </HeadCards>
            <HeadCards2>
              <SpotlightHeads
                head="New and Noteworthy"
                about="Discover newly added public workspaces with public APIs from a multitude of industries."
                blueText=" View Complete List →
"
                size="13px"
              />
            </HeadCards2>
          </Double>
        </Head>
        <GridContents>
          <Card>
            <MediaOutletsCard
              logo={youtube}
              head="Youtube"
              content1="API Evangelist  .  Updated on 29 Sep,2022  .  2 versions"
              content2=""
              content3=""
              foot1="10+ watchers "
              foot2="10k+ views"
              foot3=""
              footIcon={<BsEye />}
              footIcon1={<BsEye />}
              footIcon2=""
            />
            <AiOutlineRight />
          </Card>
          <Card>
            <MediaOutletsCard
              logo={shopify}
              head="Shopify"
              content1="Anh Nguyen Trung  .  Updated on 16 Dec, 2021"
              content2=""
              content3=""
              foot1="100 + forks"
              foot2="40+ watchers"
              foot3="2k+ views"
              footIcon=""
              footIcon1={<BsEye />}
              footIcon2={<BsEye />}
            />
            <AiOutlineRight />
          </Card>
          <Card>
            <MediaOutletsCard
              logo={postman}
              head="Pubished Postman Templates"
              content1="Postman  .  Updated on 1 Dec, 2022"
              content2="Templates published by the Postman team"
              content3=""
              foot1="100+ watchers"
              foot2="500k+ views"
              foot3=""
              footIcon={<BsEye />}
              footIcon1={<BsEye />}
              footIcon2=""
            />
            <AiOutlineRight />
          </Card>
          <Card>
            <MediaOutletsCard
              logo={december}
              head="December 2, 2022 Datadog API Collection"
              content1="Datadog  .  Updated on 2 Dec,2022"
              content2="This is the latest collection for the Datadog REST API, created on December 2, 2022. Fork it to your workspace to try Datadog API requests."
              content3=""
              foot1="10+ forks"
              foot2="7 watchers"
              foot3="40+ views"
              footIcon=""
              footIcon1={<BsEye />}
              footIcon2={<BsEye />}
            />
            <AiOutlineRight />
          </Card>
          <Card>
            <MediaOutletsCard
              logo={devrel}
              head="DevRel Re-public"
              content1="Postman DevRel  .  Updated on 30 Nov, 2022"
              content2="An Interim public workspace for workshops, streams, and other events."
              content3=""
              foot1="6 watchers"
              foot2="10k+ views"
              foot3=""
              footIcon={<BsEye />}
              footIcon1={<BsEye />}
              footIcon2=""
            />
            <AiOutlineRight />
          </Card>
          <Card>
            <MediaOutletsCard
              logo={outsystem}
              head="OutSystems 11 platform APIs"
              content1="OutSystems  .  Updated on 28 Nov, 2022"
              content2="Within this workspace you have access to all O11 platform REST base APIs like:"
              content3=""
              foot1="5 watchers"
              foot2="100+ views"
              foot3=""
              footIcon={<BsEye />}
              footIcon1={<BsEye />}
              footIcon2=""
            />
            <AiOutlineRight />
          </Card>
          <Card>
            <MediaOutletsCard
              logo={hsbc}
              head="HSBC Developers"
              content1="develop.hsbc  .  Updated on 23 Nov, 2022"
              content2="HSBC's Commercial APIs please visit https://develop.hsbc.com for more information"
              content3=""
              foot1="1 watcher"
              foot2="500+ views"
              foot3=""
              footIcon={<BsEye />}
              footIcon1={<BsEye />}
              footIcon2=""
            />
            <AiOutlineRight />
          </Card>
          <Card>
            <MediaOutletsCard
              logo={sign}
              head="Signeasy API"
              content1="Signeasy  .  Updated on 20 Nov, 2022"
              content2="The public workspace for the Signeasy eSignature API collections."
              content3=""
              foot1="6 watchers"
              foot2="500+ views"
              foot3=""
              footIcon={<BsEye />}
              footIcon1={<BsEye />}
              footIcon2=""
            />
            <AiOutlineRight />
          </Card>
          <CardLast>
            <MediaOutletsCard
              logo={gusto}
              head="Gusto Embedded"
              content1="Gusto  .  Updated on 2 Dec,2022"
              content2="Gusto's Embedded Payroll API"
              content3=""
              foot1="6 watchers"
              foot2="300+ views"
              foot3=""
              footIcon={<BsEye />}
              footIcon1={<BsEye />}
              footIcon2=""
            />
            <AiOutlineRight />
          </CardLast>
          <CardLast>
            <MediaOutletsCard
              logo={attend}
              head="Attentive Public APIs"
              content1="Attentive  .  Updated on 6 Oct, 2022"
              content2="Attentive's APIs allow you as a developer to integrate with the Attentive platform and build custom applications"
              content3=""
              foot1="2 watchers"
              foot2="100+ views"
              foot3=""
              footIcon={<BsEye />}
              footIcon1={<BsEye />}
              footIcon2=""
            />
            <AiOutlineRight />
          </CardLast>
        </GridContents>
      </Container>
    </div>
  );
};

export default SpotlightComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
`;
const Single = styled.div`
  margin-right: 50px;
  margin-left: 50px;
`;
const Double = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 50px;
  max-width: 1900px;
`;
const HeadCards = styled.div`
  margin-right: 50px;
  max-width: 550px;
`;
const HeadCards2 = styled.div`
  max-width: 550px;
  margin-right: 120px;
`;
const GridContents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  margin-left: 50px;
  margin-top: 20px;
  margin-right: 50px;
  @media screen and (max-width: 719px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div`
  border-top: 1px solid #dfdfdf;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 350ms;
  :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;
const CardLast = styled.div`
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 350ms;
  :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;
