import { Badge } from '@material-ui/core'
import { Search, ShoppingBasket, ShoppingCart, StyleTwoTone } from '@material-ui/icons'
import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
   height : 60px;
`
const Wrapper = styled.div`
   padding : 10px 20px;
   display : flex;
   justify-content : space-between;
    align-items : center
`
const Language = styled.span`
    font-size : 14 px;
    cursor : pointer
`

const SearchContainer = styled.div`
border : 0.5px solid black;
margin-left : 25px;
padding : 5px; 

`

const Left = styled.div`
   flex :1 ;
   display : flex;
   align-items : center
`

const Input = styled.input`
border : none`
const Logo = styled.h1`
    font-weight: bold;
`
const Center = styled.div`
   flex : 1;
   text-align : center
`
const Right = styled.div`
   flex:1;
   display : flex;
   justify-content: flex-end;
   align-items : center
`

const MenuItem = styled.div`
    font-size : 14px;
    cursor : pointer;
    margin : 15px
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Language> EN </Language>
            <SearchContainer>
                <Input/>
                <Search style ={{color:'gray' , fontSize:'15px' }} />
            </SearchContainer>
            </Left>
            <Center><Logo>ASBAN</Logo></Center>
            <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>LOG IN</MenuItem>
            <MenuItem>
            <Badge color="secondary" >
            <ShoppingCart />
               </Badge>
            </MenuItem>    
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar