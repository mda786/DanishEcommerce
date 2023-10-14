import styled from "styled-components";
import categories from '../data'
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";


 const Container=styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        flexDirection:'column',
        padding:'0px',
        margin:'0'
    })}
 `;

const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories