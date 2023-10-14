import styled from "styled-components"
import { mobile } from "../responsive"

const Container=styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
    ${mobile({
        width:'110vw',
        fontSize:'12px'
    })}
`



const Announcements = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over &#8377;500.
    </Container>
  )
}

export default Announcements