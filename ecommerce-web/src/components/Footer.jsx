import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container=styled.div`
    display: flex;
    ${mobile({
        flexDirection:'column'
    })}

`


const Left=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo=styled.h1``
const Desc=styled.p`
    margin: 20px 0px;
`
const SocialContainer=styled.div`
    display: flex;
`
const Social=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${p=>p.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center=styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        display:'none'
    })}
    `
const Title=styled.h3`
    margin-bottom: 30px;
`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap:wrap;
`
const ListItem=styled.li`
    width: 50%;
    margin-bottom: 7px;
`

const Right=styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem=styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0px;
`
const Payment=styled.img`
    background-color: white;
    width: 50%;
    cursor: pointer;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                Danish.
            </Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, cumque.
            </Desc>
            <SocialContainer>
                <Social color='3B5999'>
                    <Facebook/>
                </Social>
                <Social color='E4405F'>
                    <Instagram/>
                </Social>
                <Social color='55ACEE'>
                    <Twitter/>
                </Social>
                <Social color="E60023">
                    <Pinterest/>
                </Social>
            </SocialContainer>
        </Left>
        <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Faishion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    {/* <ListItem></ListItem> */}
                    <ListItem>Terms</ListItem>
                </List>
        </Center>
        <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:'10px'}}/> Mahabalipuram,Chennai,Tamilnadu,India</ContactItem>
                <ContactItem><Phone style={{marginRight:'10px'}}/> +91 7256838491</ContactItem>
                <ContactItem><Mail style={{marginRight:'10px'}}/> mddanishashraf10@gmail.com</ContactItem>
                <Payment src='assets/payment.png'/>
        </Right>
    </Container>
  )
}

export default Footer