import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { mobile } from '../responsive'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/apiCalls';


const Container = styled.div`
    height:60px;
    ${mobile({
    heigth: '40px'
})}
`

const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({
    padding: '10px 0px'
})}
`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({
    display: 'none'
})}
`
const SearchContainer = styled.div`
border:.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
cursor: pointer;
`
const Input = styled.input`
    border: none;
    ${mobile({
    width: '50px'
})}
`
const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
    fontSize: '24px',
    paddingLeft: '15px'
})}
`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({
    justifyContent: 'flex-start',
    flex: '2',
    marginLeft: '10px'
})}
`
const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({
    fontSize: '14px',
    marginLeft: '10px'
})}
`
const StyledLink = styled(Link)`
    color:black;
    text-decoration: none;
`

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const logOut=()=>{
        logout(dispatch);
        navigate("/login")
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <SearchIcon style=
                            {{ color: 'gray', fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>{user ? user.username : "Danish."}</Logo>
                </Center>
                <Right>
                    {user ?
                        <StyledLink to='/register' onClick={logOut}>
                            <MenuItem>Lougout</MenuItem>
                        </StyledLink>
                        : <>
                            <StyledLink to='/register' >
                                <MenuItem>Register</MenuItem>
                            </StyledLink>
                            <StyledLink to='/login'>
                                <MenuItem>Sign In</MenuItem>
                            </StyledLink>
                        </>}
                    <StyledLink to='/cart'>
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </MenuItem>
                    </StyledLink>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar