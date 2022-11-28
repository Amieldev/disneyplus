import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg"/>
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Disney+ is the home for your favorite movies and TV shows from <br/>
            Disney, Pixar, Marvel, Star Wars, and National Geographic
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png"/>
        </CTA>
    </Container>
  )
}

export default Login 

const Container=styled.div`
    position:relative;
    height:calc(100vh - 70px);
    display: flex;
    align-items:top;
    justify-content: center;
    overflow-x:hidden;

    &:before {
        background-position: top;
        background-image: url("/images/login-background.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }
` 

const CTA=styled.div`
    width:80%;
    max-width: 650px;
    padding:80px 40px ;
    display:flex;
    flex-direction:column;
`

const CTALogoOne=styled.img`
    
`

const CTALogoTwo=styled(CTALogoOne)`

`

const SignUp=styled.a`
    width:100%;
    background:#0063e5;
    font-weight:bold;
    padding:17px 0;
    margin-top:8px;
    margin-bottom:12px;
    color:#f9f9f9;
    border-radius:10px;
    text-align:center;
    font-size:18px;
    letter-spacing:1.5px;
    cursor: pointer;
    transition:0.25s;

    &:hover{
      background:#0483ee;
    }

`

const Description=styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`