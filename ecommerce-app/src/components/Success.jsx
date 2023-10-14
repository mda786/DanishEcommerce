import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const InfoContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:10%;
    flex-direction: column;
    width: 25%;
    text-align: center;
    padding: 50px;
`
const Image=styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
    `
const Span=styled.span`
    margin-bottom: 15px;    
    font-size: 30px;
    font-weight: 400;
    background-color: #0aa662;
    color: white;
    padding: 3px 20px;
    border-radius: 15px;
`
const Para=styled.p`
    font-size: 15px;
    font-weight: 600;
`
const Success = () => {
  return (
    <Container>
        <InfoContainer>
            <Image src='assets/logo.jpg'/>
            <Span>Successfull</Span>
            <Para>Your order being prepared.Thanks for choosing Danish Shop</Para>
        </InfoContainer>
    </Container>
  )
}

export default Success