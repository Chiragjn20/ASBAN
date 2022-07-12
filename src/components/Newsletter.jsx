import React from 'react'
import styled from 'styled-components'
import {Send} from  '@material-ui/icons'

const Container = styled.div`
height:60vh;
display: flex;
align-items : center;
justify-content: center;
background-color: rgb(248, 248, 248);
flex-direction : column
`
const Title = styled.h1`
font-size: 70px;
margin:20px;
`

const Description = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
    font-weight:300
`
const InputContainer = styled.div`
width: 50%;
display : flex;
justify-content: space-between;
border: 1px solid lightgray;
`
const Input = styled.input`
padding-left:20px;
border:none;
flex:8
`
const Button = styled.button`
flex:1;
border:none;
background-color : teal;
color:white
`



const Newsletter = () => {
  return (
    <Container>
        <Title>Title</Title>
        <Description> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Description>
            <InputContainer>
                    <Input placeholder='Enter your email'/>
                    <Button>
                        <Send/>
                    </Button>
            </InputContainer>
    </Container>
  )
}

export default Newsletter