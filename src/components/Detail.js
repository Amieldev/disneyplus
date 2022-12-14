import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
            <img src="/images/background-loki.jpg"/>
        </Background>
        <ImageTitle>
          <img src="/images/title-loki.png"/>
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png"/>
            <span>PLAY</span>
          </PlayButton>

          <TrailerButton>
          <img src="/images/play-icon-white.png"/>
            <span>TRAILER</span>
          </TrailerButton>

          <AddButton>
            <span>+</span>
          </AddButton>

          <GroupWatchButton>
          <img src="/images/group-icon.png"/>
          </GroupWatchButton>
        </Controls>
        <SubTitle>
          2021 . 60H . Fantasy, Marvel, Heroes
        </SubTitle>
        <Description>
        Loki, the God of Mischief, steps out of his brother's shadow to embark<br/>
        on an adventure that takes place after the events of "Avengers: Endgame."
        </Description>
    </Container>
  )
}

export default Detail

const Container=styled.div`
    min-height:calc(100vh-70px);
    padding:0 calc(3.5vw+5px);
    position:relative;
`

const Background=styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;

    img{
      width:100%;
      height:100%;
      object-fit:cover;
    }
`

const ImageTitle=styled.div`
    height:20vh;
    width:25vw;
    margin-left:22px;
    min-height:170px;
    min-width:200px;
    margin-top:60px;

    img{
      width:100%;
      height:100%;
      object-fit:contain;
    }
`

const Controls=styled.button`
    display:flex;
    align-items:center;
    background:transparent;
    border:none;

`
const PlayButton=styled.button`
    border-radius:4px;
    font-size:15px;
    padding:0px 24px;
    margin-right:22px;
    display:flex;
    align-items:center;
    height:56px;
    background:rgb(249,249,249);
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;
    transition:0.25s;

    &:hover{
      background:rgb(198,198,198);
    }
`

const TrailerButton=styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
`
const AddButton=styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background:rgba(0,0,0,0.6);
    cursor:pointer;
    transition:0.25s;

    span{
      font-size:30px;
      color:white;
    }

    &:hover{
      background:rgba(249,249,249,0.3);
    }
`
const GroupWatchButton=styled(AddButton)`
    background:black;
`

const SubTitle=styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;
    margin-left:22px;
`

const Description=styled.div`
    line-height:1.4;
    color:rgb(249,249,249);
    font-size:20px;
    margin-top:16px;
    margin-left:22px;
    max-width:760px;
`