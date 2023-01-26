import { InputBase,List,ListItem,styled } from '@mui/material'
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

//Style
const SearchContainer = styled(Box)(({theme})=>({
  borderRadius: 2,
  margin: '0 10px',
  width: '38%',
  backgroundColor: '#fff',
  display: 'flex',
  [theme.breakpoints.down('lg')]:{
    width:'60%',
  }
}))

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const Search = () => {
    const [text,setText]=useState();
    const dispatch=useDispatch();
    const {products}=useSelector(state=>state.getProducts)
    useEffect(()=>{
      dispatch(getProducts)
    },[dispatch])
    const getText=(text)=>{
      setText(text)
    }
  return (
    <SearchContainer>
        <InputSearchBase placeholder='Search for products, brands and more...' inputProps={{ 'aria-label': 'search' }} onChange={(e)=>getText(e.target.value)} value={text}/>
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
        {
          text &&
          <ListWrapper>
            {
              products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                <ListItem>
                  <Link to={`/product/${product.id}`} style={{textDecoration:'none',color:'inherit'}} onClick={()=>setText('')}>
                    {product.title.longTitle}
                  </Link>
                  </ListItem>
              ))
            }
          </ListWrapper>
        }
    </SearchContainer>
  )
}

export default Search