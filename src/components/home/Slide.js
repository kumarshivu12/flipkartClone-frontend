import {styled} from '@mui/material/styles'
import { Button, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

//Style
const Component = styled(Box)`
margin-top:10px;
background:#ffffff;
`
const Deal=styled(Box)`
padding: 15px 20px;
display:flex;
`
const Timer=styled(Box)`
display:flex;
margin-left:10px;
align-items:center;
color:#7f7f7f;
`
const DealText=styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:25px;
`
const ViewAllButton=styled(Button)`
margin-left:auto;
font-size:13px;
font-weight:600;
border-radius:2px;
bacground:#2874f0;
`
const Image=styled('img')({
    width:"auto",
    height:150,
})
const Text=styled(Typography)`
font-size:14px;
margin-top:5px;
`
const Slide = ({products,timer,title}) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const render=({hours,minutes,seconds})=>{
        return <Box variant='span' style={{marginLeft:10,fontWeight:600,color:'#212121',opacity:0.7}}>{hours}:{minutes}:{seconds} Left</Box>;
    }
  return (
    <Component>
        <Deal>
            <DealText>{title}</DealText>
            {
                timer && 
                    <Timer>
                        <img src={timerURL} alt='timer' style={{width:'24px',marginTop:5}}/>
                        <Countdown date={Date.now()+5.04e+7} renderer={render} />
                    </Timer>
                    
            }
            
            <ViewAllButton variant='contained'>View All</ViewAllButton>
        </Deal> 
        <Divider/>
        <Carousel
            responsive={responsive}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            centerMode={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                products.map((product)=>
                <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                    <Box textAlign='center' style={{padding:"25px 15px"}}>
                        <Image src={product.url} alt='product'/>
                        <Text style={{fontWeight:600,color:'#212121'}}>{product.title.shortTitle}</Text>
                        <Text style={{color:'green'}} >Upto {product.price.discount} off</Text>
                        <Text style={{color:'#212121',opacity:0.6}}>{product.tagline}</Text>
                    </Box>
                </Link>   
                )
            }
        </Carousel>
    </Component>
    
  )
}

export default Slide