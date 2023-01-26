import {styled} from '@mui/material/styles'
import  Grid  from '@mui/material/Grid'
import React from 'react'
import { imageURL } from '../../constants/data'


//Style
const Wrapper=styled(Grid)`
margin-top:10px;
display:flex;
justify-content: space-between;
`
const Image=styled('img')(({theme})=>({
    marginTop:10,
    width:'100%',
    justifyContent:'space-between',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120,
    }
}));
const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>
        <Wrapper lg={12} sm={12} md={12} xs={12} container>
            {
                imageURL.map(item=>(
                <Grid item={true} lg={4} md={4} sm={1} xs={1}>
                    <img src={item} alt='banner' style={{width:'100%'}}/>
                </Grid>
                ))
            }
        </Wrapper>
        <Image src={url} alt='covid'/>
    </>
  )
}

export default MidSection