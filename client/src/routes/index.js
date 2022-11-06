import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import { MainScreen, UKScreen, ShopScreen } from '../Screens';   
import { LocationContextProvider } from './costomNavigation';

const Main = (props) => {

  const { scroll } = props
  return (
    <main>
     <LocationContextProvider> 
        <Routes>   
          <Route path='/' element={<MainScreen scroll={scroll} />}/> 
          <Route exact path='/myhome/chat' element={<MainScreen scroll={scroll} />}/>
          <Route exact path='/myhome/uk' element={<UKScreen scroll={scroll} />}/>
          <Route exact path='/gkh/:item' element={<MainScreen scroll={scroll} />}/>
          <Route exact path='/sales/orderproducts/categories' element={<ShopScreen scroll={scroll} />}/> 
          <Route exact path='/sales' element={<MainScreen scroll={scroll} />}/> 
          <Route path='/socprojects/:item' element={<MainScreen scroll={scroll} />}/>
          <Route path='/contacts/:item' element={<MainScreen scroll={scroll} />}/> 
          <Route exact path='/myhome' element={<MainScreen scroll={scroll} />}/>
          <Route exact path='/gkh' element={<MainScreen scroll={scroll} />}/>
          <Route exact path='/sales' element={<MainScreen scroll={scroll} />}/> 
          <Route path='/socprojects' element={<MainScreen scroll={scroll} />}/>
          <Route path='/contacts' element={<MainScreen scroll={scroll} />}/> 
          <Route path="*" element={<div>404 not found</div>}></Route>
        </Routes>
      </LocationContextProvider>
    </main>
  )
} 

export default Main;