import {styled} from '@mui/material/styles'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

//Components
import { navData } from '../../constants/data';

//Style
const Component = styled(Box)(({theme})=>({
    display:'flex',
    margin:'55px 130px 0 130px',
    justifyContent:'space-between',
    lineHeight:0,
    overflow:'hidden',
    [theme.breakpoints.down('md')]:{
        margin:0
    }
}))

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center; 
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const Navbar = () => {
  return (
    <Box style={{background:'white'}}>
        <Component>
            {
                navData.map((item)=>
                <Container>
                    <img src={item.url} alt="logo" style={{width:64}}/>
                    <Text>{item.text}</Text>
                </Container>
                )
            }
        </Component>
    </Box>
  )
}

export default Navbar