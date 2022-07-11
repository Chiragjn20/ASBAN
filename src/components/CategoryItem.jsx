import React from 'react'
import styled from 'styled-components'
const Container = styled.div`

flex:1
height : 70vh;
position : relative;
margin:3px
`
const Image = styled.img`

width:100%;
height : 100%;
object-fit: cover;
`
const Info = styled.div`
width:100%;
height : 100%;
top:0;
left:0;
position: absolute;
display : flex;
flex-direction: column;
justify-content: center
`
const Title = styled.h1`
color:white
`
const Button = styled.button`
border:none;
padding: 10px
cursor: pointer
`



const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.image}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem