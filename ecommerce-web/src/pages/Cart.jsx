import styled from "styled-components"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcements from '../components/Announcements'
import { Add, Remove } from "@mui/icons-material"
import { mobile } from "../responsive"
import { useSelector } from "react-redux"
import StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from "react"
import {userRequest} from '../requestMethod'



const key = process.env.REACT_APP_STRIPE

const Conatiner = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({
    padding: '10px'
})}
`

const Title = styled.h1`
font-weight: 300;
text-align: center;

`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
    border: ${p => p.type === 'filled' && 'none'};
    background-color: ${p => p.type === 'filled' ? 'black' : 'transparent'};
    color: ${p => p.type === 'filled' && 'white'};
`
const TopTexts = styled.div`
    ${mobile({
    display: 'none'
})}
`

const TopText = styled.span`
    text-decoration: underline;
    margin: 0px 10px;
    cursor: pointer;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
    flexDirection: 'column'
})}
`
const Info = styled.div`
    flex: 3;
`
const Hr = styled.hr`
    background-color: #eee;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 8px 0px;
    ${mobile({
    flexDirection: 'column'
})}
`

const ProductDetail = styled.div`
    flex:2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
    border-radius: 3px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ProductName = styled.span`
`

const ProductId = styled.span`

`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${p => p.color};
`

const ProductSize = styled.span`

`

const PriceDetail = styled.div`
    flex:2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ProductAmountContianer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductsPrice = styled.span`
    font-size: 30px;
    font-weight: 200;
`
const Summary = styled.div`
    flex: 1;
    border: .5px solid gray;
    padding: 20px;
    height: 50vh;
    border-radius: 5px;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${p => p.type === 'total' && '500'};
    font-size: ${p => p.type === 'total' && '20px'};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    padding: 10px;
    width: 100%;
    background-color: black;
    color: white;
    font-weight: 600;
    border-radius: 3px;
    cursor: pointer;
`

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const user=useSelector(state=>state.user.currentUser)
    
    const [stripeToken,setStripeToken]=useState(null)
  const onToken=(token)=>{
    setStripeToken(token)
  }
  useEffect(()=>{
    const makeRequest=async()=>{
      try{
        await userRequest(user.accessToken).post(
          '/checkout/payment',{
            tokenId:stripeToken.id,
            amount:cart.total*100,
          }
        )
      }catch(err){
        console.log(err);
      }
    }
    stripeToken && makeRequest();
  },[stripeToken,cart.total,user.accessToken])
    return (
        <Conatiner>
            <Navbar />
            <Announcements />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECHOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products?.map(product =>
                        (
                            <Product>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName><b>Product:</b>{product.title}</ProductName>
                                        <ProductId><b>ID:</b>{product._id}</ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>SIZE:</b>{product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContianer>
                                        <Remove />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Add />
                                    </ProductAmountContianer>
                                    <ProductsPrice> &#8377; {product.price * product.quantity}</ProductsPrice>
                                </PriceDetail>
                            </Product>))}

                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>&#8377;{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>&#8377;92</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>&#8377;-92</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>&#8377;{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout name='Danish'
                            image='https://cdn.dribbble.com/users/3912043/screenshots/15713568/dc-logo-or-cd-logo_4x.jpg'
                            billingAddress
                            shippingAddress
                            description={`your total amount is Rs.${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            currency="inr"
                            stripeKey={key}>
                        <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Conatiner>
    )
}

export default Cart