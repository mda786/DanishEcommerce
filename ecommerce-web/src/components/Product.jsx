import React from 'react'
import styled from 'styled-components'
import { FavoriteBorderOutlined, SearchOutlined,ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Info =styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left:0;
    background-color: rgba(0,0,0,.3);
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
`
const Container =styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity:1;
    }
`

const Image =styled.img`
    height: 100%;
    z-index: 2;
    width: 100%;
    border-radius: 3px;
`



const Icon=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    margin: 10px;
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
    transform: scale(1.2);
    background-color: #e9f5f5;
  }
`



const Product = ({item}) => {
    
  return (
    <Container>
        <Image src={item.img}></Image>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                <SearchOutlined/>
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product