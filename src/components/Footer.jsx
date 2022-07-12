import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Twitter,Room , Phone , Email } from "@material-ui/icons";
const Container = styled.div`
  display: flex;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom : 20px;
display:flex;
align-items:center
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> ASBAN</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ab
          perferendis, necessitatibus illo eligendi dolorum facilis rem officia
          aspernatur libero.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title> Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>Lorem ipsum dolor sit amet.
            </ContactItem>
            <ContactItem>
             <Phone style={{marginRight:"10px"}}/> +1 723 342 342
            </ContactItem>
            <ContactItem>
                <Email style={{marginRight:"10px"}}/>email@example
            </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
