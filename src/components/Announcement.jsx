import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height : 20px;
    background-color: teal;
   justify-content : center;
    align-items : center;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    padding:2px
`

const Announcement = () => {
  return (
    <Container>
        Over 30% off on all the products;
    </Container>
  )
}

export default Announcement