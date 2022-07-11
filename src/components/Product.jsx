import React from 'react'
import styled from 'styled-components'
import {ShoppingCart} from  '@material-ui/icons'
import {Search} from  '@material-ui/icons'
import {FavoriteBorder} from  '@material-ui/icons'

const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display: flex;
align-items : center;
justify-content: center;
margin:10px;
transition : all 0.5s ease; 
    &:hover{
        background-color:#e9f5f5;
        transform: scale(1.1);
    }


`
const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position : absolute;
background-color : rgba(0,0,0,0.2);
top:0;
left:0;
display: flex;
align-items : center;
justify-content: center;
z-index:3;
transition : all  0.5s ease;
cursor : pointer;
`

const Container = styled.div`
flex : 1;
margin : 5px;
min-width : 280px;
height : 350px;
display: flex;
align-items : center;
justify-content: center;
background-color : #f5fbfd;
position : relative;
&:hover ${Info}{
   opacity:1;
}
`
const Image = styled.img`
height:75%;
z-index :2
`
const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`




const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.image}/>
            <Info>
                <Icon>
                    <ShoppingCart/>
                </Icon>
                <Icon>
                    <Search/>
                </Icon>
                <Icon>
                    <FavoriteBorder/>
                </Icon>

            </Info>
    </Container>
  )
}

export default Product