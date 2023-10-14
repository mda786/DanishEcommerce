
import styled from "styled-components"
import { mobile } from "../responsive"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../redux/apiCalls"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)),url('assets/bgi.jpg') center;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Wrapper=styled.div`
    width: 40%;
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
    flex-wrap: wrap;

`
const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement=styled.span`
    margin: 20px 0px;
    font-size: 12px;
`

const Agreement1=styled.span`
    margin: 5px 0px;
    font-size: 10px;
    cursor: pointer;
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
    margin-top: 30px;

    &:hover{
        background-color: green;
    }

`



const Error=styled.span`
    color:red;
`
const Register = () => {

    const navigate = useNavigate()
    const [data,setData]=useState({
        fname:"",
        lname:"",
        username:"",
        email:"",
        password:""
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData({
          ...data,
          [name]: value,
        });
      };
      const dispatch=useDispatch()
    const {isFetching,error}=useSelector(state=>state.user)
    const handelClick=(e)=>{
        e.preventDefault()
        register(dispatch,data)
        navigate("/login")

    }
      
  return (
    <Container>
        <Wrapper>
            <Title>CREATE ACCOUNT</Title>
            <Form>
                {error && <Error>Something went wrong...</Error>}
                <Input name="fname" placeholder='First name' onChange={handleInputChange} value={data.fname}/>
                <Input name="lname" placeholder='Last name' onChange={handleInputChange} value={data.lname}/>
                <Input name="username" placeholder='Username'onChange={handleInputChange} value={data.username}/>
                <Input name="email" type="email" placeholder='Email' onChange={handleInputChange} value={data.email} required/>
                <Input name="password" type="password" placeholder='Password'onChange={handleInputChange} value={data.password}/>
                <Agreement>
                    By creating an account,I consent to the processig of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Agreement1><Link to={'/login'}>Do you already have an account?Login.</Link></Agreement1>
                <Button onClick={handelClick} disabled={isFetching}>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register