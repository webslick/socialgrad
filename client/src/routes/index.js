import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OfferScreen from '../Screens/OfferScreen/index';
import PoliticsScreen from '../Screens/PoliticsScreen/index';
import UserYesScreen from '../Screens/UserYesScreen/index'; 
import ShopScreen from '../Screens/ShopScreen/index'; 
import MainScreen from '../Screens/MainScreen/index'; 
import UKScreen from '../Screens/UKScreen/index'; 
import ChatScreen from '../Screens/ChatScreen/index'; 
import { LocationContextProvider, BlockedSlashLinker } from './costomNavigation';

const Main = (props) => {

  const { scroll } = props
  return (
    <main>
     <LocationContextProvider> 
        <Routes>   
          <Route path='/' element={<ChatScreen />}/> 
          <Route exact path='/myhome/chat' element={<ChatScreen scroll={scroll} />}/>
          <Route exact path='/myhome/uk' element={<UKScreen scroll={scroll} />}/>
          <Route exact path='/gkh/:item' element={<UserYesScreen />}/>
          <Route exact path='/orderproducts/categories' element={<ShopScreen />}/> 
          <Route exact path='/sales' element={<ShopScreen />}/> 
          <Route path='/socprojects/:item' element={<UserYesScreen />}/>
          <Route path='/contacts/:item' element={<OfferScreen />}/> 
          <Route exact path='/myhome' element={<MainScreen scroll={scroll} />}/>
          <Route exact path='/gkh' element={<UserYesScreen />}/>
          <Route exact path='/sales' element={<PoliticsScreen />}/> 
          <Route path='/socprojects' element={<UserYesScreen />}/>
          <Route path='/contacts' element={<OfferScreen />}/> 
          <Route path="*" element={<div>404 not found</div>}></Route>
        </Routes>
      </LocationContextProvider>
    </main>
  )
} 

export default Main;