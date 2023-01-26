import { Box } from '@mui/system';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
//Components
import Header from './components/header/Header'
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import DetailView from './components/detailView/DetailView';
import Cart from './components/cart/Cart';

const App=()=>{
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop:54}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<DetailView/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider >
  );
}

export default App;
