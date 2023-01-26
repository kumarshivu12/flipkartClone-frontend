import { Button , styled} from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { ShoppingCart,FlashOn} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addToCart} from '../../redux/actions/cartAction';
import OrderPlaced from '../cart/OrderPlaced';
import { DataContext } from '../../context/DataProvider';

//Style
const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]: {
      padding: '20px 0 0 40px',
      marginTop:25,//extra
  }
}))
const Image = styled('img')({
  padding: '15px 10px',
  border: '1px solid #f0f0f0',
  width: '95%',
});
const StyledButton = styled(Button)(({theme})=>({
  width: '48%',
  borderRadius: 2,
  height: 50,
  color: '#FFF',
  [theme.breakpoints.down('lg')]: {
    width: '46%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '48%',
  }
}))

const ActionItem = ({product}) => {
  const [quantity,setQuantity]=useState(1);
  const dispatch=useDispatch();
  const {open,setOpen}=useContext(DataContext);
  const navigate=useNavigate();
  const {id}=product;
  const addItemToCart=()=>{
    dispatch(addToCart(id,quantity))
    navigate('/cart')
  }
  return (
    <LeftContainer>
        <Box style={{padding:'15px 20px',width:'90%'}}>
        <Image src={product.detailUrl} alt='detail'/>
        </Box>
        <StyledButton onClick={()=>addItemToCart()} variant='contained' style={{background:'#ff9f00',marginRight:10}}><ShoppingCart/> Add to Cart</StyledButton>
        <StyledButton onClick={()=>setOpen(true)} variant="contained" style={{background:'#fb541b'}}><FlashOn/> Buy Now</StyledButton>
        <OrderPlaced open={open} setOpen={setOpen}/>
    </LeftContainer>
  )
}

export default ActionItem