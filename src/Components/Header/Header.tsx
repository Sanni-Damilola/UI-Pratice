import React from "react";
import styled from "styled-components";
import postmanlogo from "../Assets/postman.png";
import { FiChevronDown } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import { TiFlowChildren, TiThSmallOutline } from "react-icons/ti";
import { HiOutlineTerminal } from "react-icons/hi";
import { AiOutlineAppstore, AiOutlineArrowRight } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { GrMenu, GrFormDown } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setshow] = React.useState<boolean>(false);
  const [media, setmedia] = React.useState<boolean>(false);
  const [search, setsearch] = React.useState<boolean>(false);
  const [landingsearch, setlandsearch] = React.useState<boolean>(false);

  const landingdatafunc = () => {
    setlandsearch(true);
  };

  const [product, setPproduct] = React.useState<Boolean>(false);
  const func = () => {
    setshow(!show);
    setPproduct(false);
  };
  const funcremove = () => {
    setshow(false);
  };

  const Toggle = () => {
    setPproduct(!product);
    setshow(false);
  };

  const hb = () => {
    setmedia(!media);
  };

  const remove = () => {
    setmedia(false);
    setlandsearch(false);
  };

  const removesearch = () => {
    setsearch(false);
  };

  const searchfun = () => {
    setsearch(true);
  };

  return (
    <Container>
      <Wrapper>
        <Navwrapper>
          <Logo src={postmanlogo} />
          <Nav to={""} onClick={Toggle}>
            <span>Product</span>
            <Icon>
              <FiChevronDown />
            </Icon>
          </Nav>
          <Nav to={""}>
            <span>Pricing</span>
          </Nav>
          <Nav to={""}>
            <span>Enterprice</span>
            <Icon>
              <FiChevronDown />
            </Icon>
          </Nav>
          <Nav to={""}>
            <span>Resources ans Support</span>
            <Icon>
              <FiChevronDown />
            </Icon>
          </Nav>
          <Nav to={"/explore"}>
            <span>Explore</span>
          </Nav>
        </Navwrapper>
        <Search onClick={func}>
          <div>
            <CiSearch />
          </div>
          <Input placeholder="search postman" />
        </Search>
        <Buttonwrapper>
          <Button1 to={"/signin"}>sign in</Button1>
          <Button2 to={"/signup"}>sign up for free</Button2>
        </Buttonwrapper>
        <Media>
          {media ? null : (
            <Searchmedia onClick={landingdatafunc}>
              <CiSearch />
            </Searchmedia>
          )}
          {media ? (
            <Searchmedia onClick={searchfun}>
              <CiSearch />
            </Searchmedia>
          ) : null}
          {media ? (
            <Span onClick={remove}>X</Span>
          ) : (
            <Menu onClick={hb}>
              <GrMenu />
            </Menu>
          )}
        </Media>
      </Wrapper>

      {product ? (
        <Drop>
          <Start>What is Postman?</Start>
          <Start>API repository</Start>
          <Start>Tools</Start>
          <Start>Governance</Start>
          <Start>Workspaces</Start>
          <Start>Integrations</Start>
          <Start2>
            Get started free{" "}
            <Ico>
              <AiOutlineArrowRight />
            </Ico>
          </Start2>
        </Drop>
      ) : null}

      {show ? (
        <Dropdown>
          <Up>
            <span>Public API Network</span>
            <input placeholder="Search for ApIs by popular tearms like Intel and Zuho" />
            <p onClick={funcremove}>X</p>
          </Up>
          <Down>
            <span>Search for:</span>
            <Wrap>
              <Workspace>
                <AiOutlineAppstore />
              </Workspace>
              <p>Workspace</p>
            </Wrap>
            <Wrap>
              <Workspace>
                <HiOutlineTerminal />
              </Workspace>
              <p>Collections</p>
            </Wrap>
            <Wrap>
              <Workspace>
                <MdWorkspacesOutline />
              </Workspace>
              <p>APIs</p>
            </Wrap>
            <Wrap>
              <Workspace>
                <TiFlowChildren />
              </Workspace>
              <p>Flows</p>
            </Wrap>
            <Wrap>
              <Workspace>
                <RiTeamLine />
              </Workspace>
              <p>Teams</p>
            </Wrap>
          </Down>
        </Dropdown>
      ) : null}

      {media ? (
        <Handbuggermenu>
          <Div>
            <span>Product</span>
            <div>
              <GrFormDown />
            </div>
          </Div>
          <Div>
            <span>Pricing</span>
          </Div>
          <Div>
            <span>Enterprice</span>
            <div>
              <GrFormDown />
            </div>
          </Div>
          <Div>
            <span>Resources and Support</span>
            <div>
              <GrFormDown />
            </div>
          </Div>
          <Div>
            <span>Explore</span>
          </Div>
          <Wraped>
            <Button4>Sign in</Button4>
            <Button3>Sign Up for Free</Button3>
          </Wraped>
        </Handbuggermenu>
      ) : null}
      {search ? (
        <Handbuggersearch>
          <span onClick={removesearch}>x</span>
          <input
            type="text"
            placeholder="Search for anything in all of post man"
          />
        </Handbuggersearch>
      ) : null}

      {landingsearch ? (
        <Handbuggersearch1>
          <span onClick={remove}>x</span>
          <input
            type="text"
            placeholder="Search for anything in all of post man"
          />
        </Handbuggersearch1>
      ) : null}
    </Container>
  );
};

export default Header;

const Span = styled.span`
  color: rgb(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 17px;
  margin-right: 10px;
  padding-left: 18px;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-bottom: 10px;
  span {
    margin-left: 15px;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.6);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
  }
`;

const Handbuggermenu = styled.div`
  position: absolute;
  padding-top: 20px;
  top: 53px;
  width: 100%;
  background-color: white;
  display: none;
  z-index: 9;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: block;
    height: 500px;
  }
  @media screen and (max-width: 768px) {
    display: block;
    height: 100vh;
  }
`;

const Handbuggersearch = styled.div`
  position: absolute;
  padding-top: 10px;
  top: 0;
  padding-bottom: 10px;
  background-color: white;
  width: 100%;
  display: none;

  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: flex;

    span {
      color: rgb(0, 0, 0, 0.5);
      font-weight: 500;
      font-size: 20px;
      margin-right: 10px;
      padding-left: 18px;
      cursor: pointer;
    }
    input {
      width: 83%;
      height: 27px;
      border: 1px solid rgb(0, 0, 0, 0.2);
      outline: none;
      margin-top: 3px;
      border-radius: 3px;
      ::placeholder {
        padding: 7px 10px;
        font-weight: 400;
        color: rgb(0, 0, 0, 0.5);
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;

    span {
      color: rgb(0, 0, 0, 0.5);
      font-weight: 500;
      font-size: 20px;
      margin-right: 10px;
      padding-left: 18px;
      cursor: pointer;
    }
    input {
      width: 83%;
      height: 27px;
      border: 1px solid rgb(0, 0, 0, 0.2);
      outline: none;
      margin-top: 3px;
      border-radius: 3px;
      ::placeholder {
        padding: 7px 10px;
        font-weight: 400;
        color: rgb(0, 0, 0, 0.5);
      }
    }
  }
`;
const Handbuggersearch1 = styled.div`
  position: absolute;
  padding-top: 10px;
  top: 0;
  height: 100vh;
  padding-bottom: 10px;
  background-color: white;
  width: 100%;
  display: none;

  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: flex;

    span {
      color: rgb(0, 0, 0, 0.5);
      font-weight: 500;
      font-size: 20px;
      margin-right: 10px;
      padding-left: 18px;
      cursor: pointer;
    }
    input {
      width: 83%;
      height: 27px;
      border: 1px solid rgb(0, 0, 0, 0.2);
      outline: none;
      margin-top: 3px;
      border-radius: 3px;
      ::placeholder {
        padding: 7px 10px;
        font-weight: 400;
        color: rgb(0, 0, 0, 0.5);
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;

    span {
      color: rgb(0, 0, 0, 0.5);
      font-weight: 500;
      font-size: 20px;
      margin-right: 10px;
      padding-left: 18px;
      cursor: pointer;
    }
    input {
      width: 83%;
      height: 27px;
      border: 1px solid rgb(0, 0, 0, 0.2);
      outline: none;
      margin-top: 3px;
      border-radius: 3px;
      ::placeholder {
        padding: 7px 10px;
        font-weight: 400;
        color: rgb(0, 0, 0, 0.5);
      }
    }
  }
`;

const Button4 = styled.button`
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 0 4px 4px 0;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 500;
  transition: all 360ms;
  color: black;
  border: 1px solid rgb(0, 0, 0, 0.1);
  transition: all 360ms;
  cursor: pointer;
  :hover {
    border: 1px solid rgb(0, 0, 0, 0.3);
  }
  @media screen and (min-width: 300px) and (max-width: 500px) {
    border-radius: 4px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29px;
    width: 48%;
  }

  @media screen and (max-width: 768px) {
    border-radius: 4px;
    border-radius: 4px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29px;
    width: 48%;
  }
`;
const Button3 = styled.button`
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 0 4px 4px 0;
  background-color: #ff6c37;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 500;
  transition: all 360ms;
  color: white;
  cursor: pointer;
  :hover {
    border: 1px solid rgb(0, 0, 0, 0.3);
  }
  @media screen and (min-width: 300px) and (max-width: 500px) {
    border-radius: 4px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29px;
    width: 48%;
  }

  @media screen and (max-width: 768px) {
    border-radius: 4px;
    border-radius: 4px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 29px;
    width: 48%;
  }

  cursor: pointer;
  :hover {
    background-color: #fc5a1f;
  }
`;

const Wraped = styled.div`
  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: flex;
    width: 100%;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
  }
`;

const Start2 = styled.div`
  font-size: 14px;
  width: 130px;
  align-items: center;
  padding-left: 8px;
  display: flex;
  height: 35px;
  border-radius: 3px;
  color: rgb(2, 101, 210);
  transition: all 350ms;
  cursor: pointer;
  :hover {
    background-color: rgb(242, 242, 242);
  }
`;

const Ico = styled.div`
  margin-top: 6px;
  margin-left: 5px;
`;

const Start = styled.div`
  font-size: 14px;
  width: 130px;
  align-items: center;
  padding-left: 8px;
  display: flex;
  height: 35px;
  border-radius: 3px;
  color: rgb(107, 107, 107);
  transition: all 350ms;
  cursor: pointer;
  :hover {
    background-color: rgb(242, 242, 242);
  }
`;

const Drop = styled.div`
  position: absolute;
  width: 170px;
  height: 235px;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  left: 40px;
  top: 50px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 10px;
`;

const Media = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
  }

  display: none;
`;

const Menu = styled.div`
  display: flex;
  font-size: 25px;
  justify-content: center;
  color: rgb(0, 0, 0, 0.5);
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
    margin-left: 10px;
  }
  @media screen and (max-width: 320px) {
    display: flex;
    font-size: 18px;
    margin-left: 0;
    margin-right: 10px;
  }

  display: none;
`;
const Searchmedia = styled.div`
  display: flex;
  font-size: 25px;
  justify-content: center;
  color: rgb(0, 0, 0, 0.5);
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
    margin-left: 10px;
  }
  @media screen and (max-width: 320px) {
    display: flex;
    font-size: 18px;
    margin-left: 0;
    margin-right: 10px;
  }

  display: none;
`;

const Workspace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  font-size: 14px;
  color: rgb(0, 0, 0, 0.5);
  margin-right: 3px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 10px;
  p {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.747);
  }
`;

const Up = styled.div`
  width: 90%;
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  p {
    cursor: pointer;
    color: rgb(0, 0, 0, 0.5);
    margin-left: 10px;
  }
  input {
    flex: 1;
    width: 50%;
    height: 30px;
    border: 0;
    outline: none;
    margin-top: 3px;
    ::placeholder {
      padding: 7px 10px;
      font-weight: 600;
      color: rgb(0, 0, 0, 0.5);
    }
  }
  span {
    font-size: 16px;
    margin-right: 10px;
    height: 22px;
    padding: 5px 16px;
    background-color: #f2f2f27a;
    border-radius: 5px;
  }
`;
const Down = styled.div`
  width: 100%;
  border-top: 1px solid rgb(0, 0, 0, 0.1);
  display: flex;
  span {
    margin-right: 10px;
    margin-top: 13px;
    font-size: 15px;
    color: rgb(0, 0, 0, 0.7);
    margin-left: 60px;
    font-weight: 500;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  width: 60%;
  height: 160px;
  background-color: white;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  margin-top: 7px;
  color: #00000099;
`;

const Container = styled.div`
  width: 100%;
  position: sticky;
  z-index: 999;
  top: 0;
  height: 53px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  height: 36px;
  object-fit: cover;
  width: 40px;
  margin-right: 10px;
  @media screen and (max-width: 320px) {
    display: flex;
    margin-left: 10px;
  }
`;
const Navwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
  height: 100%;
  justify-content: space-between;
  position: relative;
`;
const Nav = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

  span {
    font-weight: 700;
    font-size: 16px;
    color: rgb(0, 0, 0, 0.5);
  }
  margin-right: 23px;
  cursor: pointer;
`;
const Search = styled.div`
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  height: 36px;
  background-color: #f2f2f2;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
  :hover {
    outline: 1px solid rgba(0, 0, 0, 0.2);
  }
  div {
    margin-left: 20px;
    font-size: 20px;
    margin-top: 2px;
    margin-right: 4px;
    color: rgb(0, 0, 0, 0.6);
  }
  transition: all 360ms;
`;
const Input = styled.input`
  margin-top: 2px;
  border: 0;
  width: 55%;
  outline: none;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 14px;
  background-color: #f2f2f2;
`;
const Buttonwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button1 = styled(NavLink)`
  text-decoration: none;
  padding: 5px 15px;
  margin-right: 10px;
  border-radius: 4px;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 400;
  color: black;
  border: 1px solid rgb(0, 0, 0, 0.1);
  transition: all 360ms;
  cursor: pointer;
  :hover {
    border: 1px solid rgb(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Button2 = styled(NavLink)`
  text-decoration: none;
  padding: 5px 15px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  margin-right: 10px;
  border-radius: 4px;
  background-color: #ff6c37;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 500;
  color: white;
  transition: all 360ms;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
  :hover {
    background-color: #fc5a1f;
  }
`;
