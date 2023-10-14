import styled from "styled-components"
import Navbar from '../components/Navbar'
import Products from "../components/Products"
import Announcements from "../components/Announcements"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useState } from "react"


const Container=styled.div`

`

const Title=styled.h1`
    margin: 20px;
`

const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Filter=styled.div`
    margin: 20px;
    ${mobile({
        margin:'0px 10px',
        display:'flex',
        flexDirection:'column'
    })}
`
const Select =styled.select`
    margin:0px 20px;
    padding: 5px 20px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    width: 150px;
    ${mobile({
        width:'130px',
        margin: '0'
    })}
`

const Option=styled.option`
    margin: 5px;
    font-size: 15px;
    cursor: pointer;
    padding: 20px;
`


const FilterText=styled.span`
    font-size: 20px;
    font-weight: 600;
`


const ProductList = () => {
    const location=useLocation()
    const cat=location.pathname.split('/')[2]
    const [filters,setFilters]=useState({})
    const [sort,setSort]=useState('newest')
    const handleFilter=(event)=>{
        const value=event.target.value;
        setFilters({
            ...filters,
            [event.target.name]:value
        })
    }
    
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Product:
                </FilterText>
                <Select name='color' onChange={handleFilter}>
                    <Option disabled defaultValue>Color</Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>pink</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                </Select>
                <Select name='size' onChange={handleFilter}>
                    <Option disabled defaultValue>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Products:
                </FilterText>
                <Select onChange={(e)=>{setSort(e.target.value)}}>
                    <Option defaultValue value='newest'> newest</Option>
                    <Option value='asce'>price (asce)</Option>
                    <Option value='desc'>price (Desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList