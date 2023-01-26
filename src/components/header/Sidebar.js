import { Button, Typography,styled,Box, Badge, Stack } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ShoppingCart } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

//Components
import Profile from './Profile';
import LoginDialog from '../login/LoginDialog';

// Style
const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
      display: 'block'
  }
}));

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
      marginRight: '40px !important',
      textDecoration: 'none',
      color: '#FFFFFF',
      fontSize: 14,
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
          color: '#2874f0',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginTop: 10,
      }
  },
  [theme.breakpoints.down('md')]: {
      display: 'block'
  }
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color:'#2874f0',
  background: '#FFFFFF',
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: 2,
  padding: '5px 40px',
  height: 32,
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
      background: '#2874f0',
      color: '#FFFFFF'
  }
}));


const Sidebar = () => {
    const [open,setOpen]=useState(false);
    const {account,setAccount}=useContext(DataContext);
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
  return (
    <Stack direction='column' spacing={2}>
      {
        account?<Profile account={account} setAccount={setAccount}/>:
        <LoginButton variant='contained' onClick={()=>setOpen(true)} >Login</LoginButton>
      }
        <Typography style={{marginTop:3,width:135}}>Became a seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>
        <Container to='/cart' style={{display:'flex',flexDirection:'row'}}>
          <Badge badgeContent={cartItems?.length} color="error">
              <ShoppingCart />
          </Badge>
          <Typography style={{ marginLeft: 10 }}>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Stack>
  )
}

export default Sidebar