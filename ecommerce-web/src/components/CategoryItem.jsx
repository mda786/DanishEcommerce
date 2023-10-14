import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container=styled.div`
    flex: 1;
    margin: 5px;
    height: 40vw;
    position: relative;
    ${mobile({
        margin: '0px'
    })}
   
`;

const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({
        width:'100vw',
        height:'40vh'
    })}
`;

const Info=styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 1s ease;
  &:hover{
      background-color: black;
      opacity: .8;
    }
`;

const Title=styled.h1`
  margin-bottom: 20px;
  color: white;
`;
const Button=styled.button`
  border: none;
  padding: 10px;
  color: gray;
  background-color: white;
  font-weight: 700;
  border-radius: 2px;
  cursor: pointer;
  transition: all 1s ease;
  &:hover{
    transform: scale(1.2);
  }
`;

//function components start
const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
        <Title>
          {item.title}
        </Title>
        <Button>
          SHOP NOW
        </Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem