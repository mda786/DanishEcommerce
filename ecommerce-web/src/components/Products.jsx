import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import axios from 'axios'

const Container =styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
   
`

const Products = ({cat,filters,sort}) => {
  
  const [products,setProducts]=useState([])
  const [filteredProducts,setFilteredProducts]=useState([])
  
  useEffect(()=>{
    const getProducts=async ()=>{
      try{
        const res=await axios.get(
          cat
            ?`/api/products?category=${cat}`
            :'/api/products'
          )
        setProducts(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getProducts()
  },[cat])
  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter((item)=>
        Object.entries(filters).every(([key,value])=>
          item[key].includes(value)
        )
      )
    )
  },[cat,filters,products])
  useEffect(()=>{
    if(sort==='newest'){
      return setFilteredProducts((prev)=>{
        return [...prev].sort((a,b)=>a.createdAt - b.createdAt)
      })
    }else if(sort==='asce'){
      return setFilteredProducts((prev)=>{
        return [...prev].sort((a,b)=>a.price - b.price)
      })
    }else if(sort==='desc'){
      return setFilteredProducts((prev)=>{
        return [...prev].sort((a,b)=>b.price - a.price)
      })
    }
  },[sort])
  
  return (
    <Container>
        {cat && Array.isArray(filteredProducts)? filteredProducts.map(item=>(
            <Product item={item} key={item._id}/>
        )):products.slice(0,8).map(item=>(
          <Product item={item} key={item._id}/>
      ))}
    </Container>
  )
}

export default Products