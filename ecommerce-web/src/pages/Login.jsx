import styled from "styled-components"
import {mobile} from '../responsive'
import { useState } from "react"
import { login } from "../redux/apiCalls"
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)),url('assets/lbgi.jpg') center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper=styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;

    ${mobile({
        width:'80%',
    })}
`

const Title=styled.h1`
    font-size: 30px;
    font-weight: 500;
`

const Form=styled.form`
    display: flex;
    flex-direction: column;

`
const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 0px;
    padding: 10px;
`
const Button=styled.button`
    width: 40%;
    background-color: teal;
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    font-weight: 500;
    border-radius: 5px;
    margin-bottom: 5px;
    &:hover{
        background-color: green;
    }
    &:disabled{
        color:green;
        cursor:not-allowed;
    }

`
const Link1=styled.p`
    cursor: pointer;
    margin: 5px 0px;
    text-decoration: underline;
    font-size: 13px;
    font-weight: 400;
    width: 40%;
    &:last-child{
      width: 50%;
    }
`
const Error=styled.span`
    color:red;
`

const Login = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const {isFetching,error}=useSelector(state=>state.user)
    const handelClick=(e)=>{
        e.preventDefault()
        login(dispatch,{username,password})
    }

  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
                <Input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={handelClick} disabled={isFetching}>LOGIN</Button>
                {error && <Error>Something went wrong...</Error>}
                <Link1>Forgot password?</Link1>
                <Link to='/register'><Link1>CREATE A NEW ACCOUNT</Link1></Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login