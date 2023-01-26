import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productAction';
import {useDispatch, useSelector} from 'react-redux';

//Components
import Navbar from './Navbar'
import Banner from './Banner'
import styled from '@emotion/styled'
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

//Style
const Component=styled(Box)`
padding:10px 10px;
background:#F2F2F2;
`

const Home = () => {
  const {products}=useSelector(state=>state.getProducts);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <>
    <Navbar/>
    <Component>
        <Banner/>
        <MidSlide products={products} timer={true} title="Deal of the Day"/>
        <Slide products={products} timer={false} title="Discount for You"/>
        <MidSection/>
        <Slide products={products} timer={false} title="Suggested items"/>
        <Slide products={products} timer={false} title="Top Selections"/>
        <Slide products={products} timer={false} title="Recommended Items"/>
        <Slide products={products} timer={false} title="Season's Top picks"/>
        
    </Component>
    </> 
  )
}

export default Home