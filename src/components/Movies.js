import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended for You</h4>
        <Conent>
            <Wrap>
                <a href="/detail">
                <img src="/images/movie-loki.jpg"/>
                </a>
            </Wrap>
            <Wrap>
                <a href="/detail">
                <img src="/images/movie-moonknight.jpeg"/>
                </a>
            </Wrap>
            <Wrap>
                <img src="/images/movie-lat.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/movie-legends.jpg"/>
            </Wrap>
    
            <Wrap>
                <img src="/images/movie-mando.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/movie-kenobi.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/movie-aladin.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/movie-soul.jpg"/>
            </Wrap>
        </Conent>
    </Container>
  )
}

export default Movies

const Container=styled.div`
    
`

const Conent=styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
`

const Wrap=styled.div`
    border:3px solid rgba(249,249,249,0.1);
    border-radius:10px;
    overflow:hidden;
    box-shadow:rgb(0 0 0 / 68%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:0.25s;
    cursor:pointer;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    &:hover{
        transform:scale(1.05);
        border:3px solid rgba(249,249,249,0.8);
        box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;    
    }

`