import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg"/>
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg"/>
                <span>HOME</span>
            </a>
            <a>
                <img src="/images/search-icon.svg"/>
                <span>SEARCH</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg"/>
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="/images/original-icon.svg"/>
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg"/>
                <span>MOVIES</span>
            </a>
            <a>
                <img src="/images/series-icon.svg"/>
                <span>SERIES</span>
            </a>
        </NavMenu>
        <UserImg src="/images/pfp.jpg"/>
    </Nav>
  )
}

export default Header

const Nav=styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
`

const Logo=styled.img`
    width:80px;
    cursor:pointer;
    transition:0.2s;
    &:hover{
        transform:scale(1.1);
    }
`

const NavMenu=styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;

        img{
            height:20px;
        }
        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;

            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transition:0.25s;
                transform-origin:left center;
                transform:scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }
`

const UserImg=styled.img`
    width:45px;
    height:45px;
    border-radius:50%;
    cursor:pointer;
    transition:0.15s;
    &:hover{
        border:1px solid rgba(249,249,249,0.8);
        box-shadow:7px 7px 7px rgba(0,0,0,0.8);
        transform:scale(1.1);
    }
`