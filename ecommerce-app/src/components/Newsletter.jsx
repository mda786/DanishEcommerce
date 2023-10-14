import { Send } from '@mui/icons-material'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container=styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({
        width:'110vw'
    })}
`
const Title=styled.h1`
    font-size: 70px;
    margin-bottom: 2px;
    ${mobile({
        fontSize: '50px'
    })}
`
const Desc=styled.p`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
    ${mobile({
        textAlign:'center'
    })}
`
const InputContainer=styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    ${mobile({
        width:'80%'
    })}
`
const Input=styled.input`
    flex: 8;
    padding-left: 20px;
    outline: none;
    border: none;
`

const Button=styled.button`
    flex:.8;
    border:none;
    cursor: pointer;
    background-color: teal;
    color: white;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>
            Newsletter
        </Title>
        <Desc>
            Get Timely Update From your Favorite Products.
        </Desc>
        <InputContainer>
            <Input placeholder='Email...'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter