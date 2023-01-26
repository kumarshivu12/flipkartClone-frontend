import { Grid,Box, Typography,styled,Button } from '@mui/material'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { DataContext } from '../../context/DataProvider'

//Components
import CartItems from './CartItems'
import EmptyCart from './EmptyCart'
import OrderPlaced from './OrderPlaced'
import TotalView from './TotalView'

//Style
const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0'
    }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}));
const Header=styled(Box)`
padding:15px 24px;
background:white;
`
const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;

const Cart = () => {
    const {cartItems}=useSelector(state => state.cart)
    const {open,setOpen}=useContext(DataContext)
    const orderHandler=()=>{
        setOpen(true)
    }
  return (
    <>
    {
        cartItems.length ?
        <Component container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                <Header>
                    <Typography style={{fontWeight:600}}> My Cart ({cartItems.length})</Typography>
                </Header>
                {
                    cartItems.map((item)=>
                    <CartItems item={item}/>
                    )
                }
            <BottomWrapper>
                <StyledButton variant="contained" onClick={orderHandler}>Place Order</StyledButton>
                <OrderPlaced open={open} setOpen={setOpen}/>
            </BottomWrapper>
            </LeftComponent>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TotalView cartItems={cartItems}/>
            </Grid>
        </Component>
        :<EmptyCart/>
    }
    </>
  )
}

export default Cart