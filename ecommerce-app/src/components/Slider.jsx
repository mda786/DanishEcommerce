import { 
    ArrowLeftOutlined,
    ArrowRightOutlined
    } 
    from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"
import { mobile } from "../responsive"


const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({
        display:'none'
    })}
`
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left:${p=>p.direction ==='left'&& '10px'};
    right:${props=>props.direction ==='right'&& '10px'};
    cursor:pointer;
    opacity: .5;
    z-index: 2;
`
const Wrapper=styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(${p=>p.sliding*-100}vw);
    transition: all 2s ease;
`
const SlideContainer=styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-color: #${p=>p.bg};
`
const ImgContainer=styled.div`
    height: 100%;
    flex: 1;
`
const Image=styled.img`
    height: 90%;
    padding-left: 50px;
`
const InfoContainer=styled.div`
    flex: 1;
    padding: 50px;
`
const Title=styled.h1`
    font-size: 60px;
`;
const Desc=styled.p`
    margin: 30px 0px;
    font-size: 20px;
    letter-spacing: 3px;
    font-weight: 500;
`;
const Button=styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;

`;

//function components start
const Slider = () => {
    const [sliding,setSliding]=useState(0)
    const handleClick=(dir)=>{
        dir==='left'?setSliding(sliding>0?sliding-1:2):setSliding(sliding>1?0:sliding+1)
    }
  return (
    <Container>
        <Arrow direction='left' onClick={()=>(handleClick('left'))}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper sliding={sliding}>
            <SlideContainer bg='f5fafd'>
                <ImgContainer>
                    <Image src='assets/1st.png'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        SUMMER SALE
                    </Title>
                    <Desc>
                        DON'T COMPROMISE ON STYLE! GET 30% OFF FROM 
                        NEW  ARRIVALS.
                    </Desc>
                    <Button>
                        SHOP NOW
                    </Button>
                </InfoContainer>
            </SlideContainer>
            <SlideContainer bg='fbf0f4'>
                <ImgContainer>
                    <Image src='assets/3rd.png'/>
                </ImgContainer>
                <InfoContainer >
                    <Title>
                        WINTER SALE
                    </Title>
                    <Desc>
                        DON'T COMPROMISE ON STYLE! GET 30% OFF FROM 
                        NEW  ARRIVALS.
                    </Desc>
                    <Button>
                        SHOP NOW
                    </Button>
                </InfoContainer>
            </SlideContainer>
            <SlideContainer bg='fcf1ed'>
                <ImgContainer>
                    <Image src='assets/2nd.png'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        RAINY SALE
                    </Title>
                    <Desc>
                        DON'T COMPROMISE ON STYLE! GET 30% OFF FROM 
                        NEW  ARRIVALS.
                    </Desc>
                    <Button>
                        SHOP NOW
                    </Button>
                </InfoContainer>
            </SlideContainer>
        </Wrapper>
        <Arrow direction='right' onClick={()=>(handleClick('right'))}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider