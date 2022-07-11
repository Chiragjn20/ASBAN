import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import React, { Component, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    position: relative;
    overflow:hidden
`

const Arrow = styled.div`

        width : 50px;
        height : 50px;
        background-color : white;
        border-radius : 50%;
        position : absolute;
        align-items : center;
        justify-content : center;
        display: flex;
        top: 0 ;
        bottom:0;
        left:${props=> props.direction ==="left"&& "10px"};
        right:${props=> props.direction ==="right"&& "10px"};
        margin: auto;
        cursor: pointer;
        opacity:0.5;
        z-index:2
`

const Wrapper = styled.div`
display:flex;
height:100%;
transition : all 1.5s ease;
transform : translateX(${props=>props.slideIndex*-100 }vw)

` 
const Slide = styled.div`
width: 100vw;
height: 100vh;
display:flex;
align-items : center;
background-color : #${props=>props.bg}
`
const ImgContainer = styled.div`
align-items : center;
justify-content:center;
display:flex;
height: 100%;
        flex:1
`

const Image = styled.img`
height:80%`

const Title= styled.h1`
font-size: 70px;
`

const Desc= styled.p`
margin: 50px 0;
font-size:20px;
font-weight:500;
letter-spacing:3px
`


const Button= styled.button`
padding : 10px;
font-size:20px;
border-radius: 5px;
cursor:pointer;
background-color : transparent
`



const InfoContainer = styled.div`
        flex:1;
        padding:50px
`

const Slider = () => {

    const[slideIndex , setslideIndex] =useState(0)
    const handleclick=(direction)=>{

        if(direction==="left"){
            setslideIndex(slideIndex >0 ? slideIndex-1:2);
        }else{
            setslideIndex(slideIndex <2 ? slideIndex +1 :0);
        }

    }
  return (
    <Container>
        <Arrow direction ="left" onClick={()=>handleclick("left")}>
        <ArrowLeft />
        </Arrow>
        <Wrapper slideIndex={slideIndex} >
            <Slide bg="fbf0f4">
            <ImgContainer>
            <Image src='https://picsum.photos/200/300'/>
            </ImgContainer>
            <InfoContainer>
                <Title> Winter sale</Title>
                <Desc> Get 30% off on all the products</Desc>
                <Button> Shop Now</Button>
            </InfoContainer>
            </Slide>
            <Slide bg="fbf1ed">
            <ImgContainer>
            <Image src='https://picsum.photos/200/300'/>
            </ImgContainer>
            <InfoContainer>
                <Title> Summer sale</Title>
                <Desc> Get 30% off on all the products</Desc>
                <Button> Shop Now</Button>
            </InfoContainer>
            </Slide>
            <Slide bg="f5fafd">
            <ImgContainer>
            <Image src='https://picsum.photos/200/300'/>
            </ImgContainer>
            <InfoContainer>
                <Title> Mansoon sale</Title>
                <Desc> Get 30% off on all the products</Desc>
                <Button> Shop Now</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>


        <Arrow direction= "right" onClick={()=>handleclick("right")}>
        <ArrowRight />
        </Arrow >
    </Container>
  )
}

export default Slider