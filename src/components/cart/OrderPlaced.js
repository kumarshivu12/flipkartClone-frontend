import { Box, Button, Dialog, Stack, Typography,styled} from '@mui/material'
import React from 'react'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';


const StyledStack=styled(Stack)(({theme})=>({
    width:'500px',
    padding:'20px',
    [theme.breakpoints.down('sm')]:{
        width:'300px'
    }
}))
const OrderPlaced = ({open,setOpen}) => {
    const {cartItems}=useSelector(state => state.cart)
    const dispatch=useDispatch();
    const placeOrder=()=>{
        setOpen(false)
        {
            cartItems.map(item=>(
                // console.warn(item)
                dispatch(removeFromCart(item.id))
            ))
        }
    }
  return (
    <Dialog
    open={open}
    onClose={()=>setOpen(false)}
    >
        <StyledStack direction='column' spacing={3} style={{height:'100%',justifyContent:'center',alignItems:'center'}}>
            <Box>
                <CheckCircleRoundedIcon sx={{fontSize:'200px',color:'green'}}/>
                <Typography variant='h4'>Order Placed</Typography>
            </Box>
            <Box style={{marginLeft:'auto',padding:'5px 20px'}}>
                <Button variant='text' size='large' sx={{fontWeight:600}}
                onClick={placeOrder}
                >
                    Close
                </Button>
            </Box>
        </StyledStack>
    </Dialog>
  )
}

export default OrderPlaced