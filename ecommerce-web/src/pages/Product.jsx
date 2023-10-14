import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethod'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux'

const Container=styled.div`

`

const Wrapper=styled.div`
    display: flex;
    padding: 50px;
    ${mobile({
        flexDirection:'column',padding:'10px'
    })}
`
const ImgContainer=styled.div`
    flex: 1;
`

const Image=styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    border-radius: 2px;
    ${mobile({
        height:'50vh'
    })}
`

const InfoContainer=styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({
        padding: '10px',width:'90%'
    })}
`

const Title=styled.h1`
    font-weight: 200;
`

const Desc=styled.p`
    margin: 20px 0px;
`

const Price=styled.span`
    font-weight: 100;
    font-size: 30px;
`
const FilterContainer=styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 30px 0px;
    ${mobile({
        width: '100%'
    })}
`
const Filter=styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle=styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    margin: 0px 5px;
    border-radius: 50%;
    cursor: pointer;
    background-color:${p=>p.color} ;
`
const FilterSize=styled.select`
    cursor: pointer;
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption=styled.option``

const AddContainer=styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        width: '100%'
    })}
`
const AmountContainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border:1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`
const Button=styled.button`
    border: 1px solid teal;
    cursor: pointer;
    padding:8px 15px;
    background-color: white;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    const location=useLocation();
    const id=location.pathname.split('/')[2]
    const [color,setColor]=useState("")
    const [size,setSize]=useState("")
    const [product,setProduct]=useState({})
    const [quantity,setQuantity]=useState(1)
    const dispatch=useDispatch()
     
    useEffect(()=>{
        const getProduct=async()=>{
            try{
                const res=await publicRequest.get(`/products/find/${id}`)
                setProduct(res.data)
            }catch(err){
                console.log(err);
            }
        }
        getProduct();
    },[id])

    const handleQuantity=(type)=>{
        if(type==='dec'){
            quantity>1&&setQuantity(quantity-1)
        }else{
            setQuantity(quantity+1)
        }
    }
    const handleClick=()=>{
        dispatch(addProduct({...product,quantity,color,size}))
    }

  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <Price>Rs. {product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color :</FilterTitle>
                        {product.color?.map((c)=>(
                        <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>

                        ))}
                        {/* <FilterColor color="blue" /> */}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size :</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map((s)=>(
                            <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            ))}  
                            {/* <FilterSizeOption >S</FilterSizeOption> */}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product