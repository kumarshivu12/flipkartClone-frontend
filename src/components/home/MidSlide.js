import {styled} from '@mui/material/styles'
import { Box } from '@mui/system'
import React from 'react'
import Slide from './Slide'

//Style
const Component=styled(Box)`
display:flex;
`
const LeftComponent=styled(Box)(({theme})=>({
    width:'83%',
    [theme.breakpoints.down('md')]:{
        width:'100%',
    }
}));

const RightComponent=styled(Box)(({theme})=>({
    width:'17%',
    background: 'white',
    padding:5,
    marginTop:10,
    marginRight:10,
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))


const MidSlide = ({products,title,timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <Component>
        <LeftComponent>
            <Slide products={products} timer={timer} title={title}/>
        </LeftComponent>
        <RightComponent>
            <img src={adURL} alt="add" style={{width:217}}/>
        </RightComponent>
    </Component>
  )
}

export default MidSlide