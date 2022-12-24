import React from 'react'
import styled from 'styled-components'
import images from "../Assets/postman.png"
import images2 from "../Assets/twit.png"
import images3 from "../Assets/weather.png"
import images4 from "../Assets/dev.png"

const Hero = () => {
  return (
    <Container>
        <Wrapper>
            <First>
                <Top>Popular teams <span>View all teams</span></Top>
                <Down>
                    <Post>
                        <PostCard>
                            <Images src={images} />
                        </PostCard>
                        <PostTextHolder>
                            <Postman>Postman</Postman>
                            <P>300k+ Views · 1k+ Collections</P>
                        </PostTextHolder>
                    </Post>
                    <Post>
                        <PostCard>
                            <Images src={images2} />
                        </PostCard>
                        <PostTextHolder>
                            <Postman>Twitter</Postman>
                            <P>50k+ Views · 4 Collections</P>
                        </PostTextHolder>
                    </Post>
                    <Post>
                        <PostCard>
                            <Images src={images4} />
                        </PostCard>
                        <PostTextHolder>
                            <Postman>Cisco DevNet</Postman>
                            <P>40k+ Views · 40+ Collections</P>
                        </PostTextHolder>
                    </Post>
                    <Post>
                        <PostCard>
                            <Images src={images3} />
                        </PostCard>
                        <PostTextHolder>
                            <Postman>Salseforce Developers</Postman>
                            <P>30k+ Views · 5 Collections</P>
                        </PostTextHolder>
                    </Post>
                </Down>
            </First>
        </Wrapper>
    </Container>
  )
}

export default Hero
const P = styled.div`
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
    color: rgb(107, 107, 107);
`
const Postman = styled.h3`
    font-size: 16px;
    line-height: 1.44;
    color: rgb(33, 33, 33);
    letter-spacing: -0.12px;
    font-weight: 600;
    margin: 0;
`
const PostTextHolder = styled.div`
    display: flex;
    width: 190px;
    height: 100%;
    justify-content: center;
    /* background-color: red; */
    margin-left: 10px;
    flex-direction: column;
`
const Images = styled.img`
    height: 40px;
`
const PostCard = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background-color: #F9F9F9;
`
const Post = styled.div`
    width: 250px;
    display: flex;
    height: 80px;
    /* background-color: yellow; */
    align-items: center;
`
const Down = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const First = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`
const Top = styled.h2`
    font-size: 21px;
    line-height: 1.2;
    color: rgb(33, 33, 33);
    letter-spacing: -0.56px;
    font-weight: 600;
    span{
        cursor: pointer;
        color: rgb(2, 101, 210);
        font-size: 16px;
        margin-left: 3px;
        :hover{
            text-decoration: underline;
        }
    }
`
const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* background-color: green; */
    margin-top: 60px;
    flex-wrap: wrap;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    /* background-color: red; */
    justify-content: center;
    /* margin-top: 60px; */
    padding-bottom: 40px;
`