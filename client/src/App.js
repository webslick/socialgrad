import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';
import { socket } from './socket';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { change_page, change_subpage, loader_switch, setWorkData } from './redux/actions/app'; 
import { checkAuth, getMe, set_user, set_user_isauth } from './redux/actions/users'; 

import { pages, users, loader, popup_login, app } from './redux/selectors';

import Main from './routes/index';
import Loader from './components/Loader';
import HeaderMenu from './components/HeaderMenu';
import PopapLogin from './components/PopapLogin';
import SubHeaderMenu from './components/SubHeaderMenu';
 
import './App.css';  
 
function App () {
    
  const dispatch = useDispatch();  
  
  const mobile = useSelector(app.mobile);  
  const work_data = useSelector(app.work_data); 
 
  const page = useSelector(pages.page); 
  const subpage = useSelector(pages.subpage); 
  
  const user = useSelector(users.user); 
  const isAuth = useSelector(users.isAuth);
  const popup_visible = useSelector(popup_login.popup_visible); 
  
  const app_ref = useRef();    
  const loading = useSelector(loader.loading);

  // const [scroll, setScroll] = useState(0); 
 
  useEffect(() => {   




    
    // socket.on("chat message", (msg) => { 
    //   console.log(msg)
    // });
  
    // socket.on("test", (msg) => { 
    //   console.log(msg)
    // }); 

    // const socket = socketIO.connect('http://localhost:4000');
    // dispatch(setMobileMod(isMobile)); 
    // setTimeout(()=>{

    //   dispatch(setSocket(socket)); 
    // },10)

    // app_ref.current.addEventListener("scroll", (e) => { 
    //   setScroll(e.target.scrollTop); 
    // });  
     
    // return () => app_ref.current.removeEventListener("scroll", (e) => {});
 
  },[]);
  
  useEffect(() => {  

    dispatch(loader_switch(true)) 

    if(localStorage.getItem('token_pfds')) { 
      checkAuth(dispatch) 
    }  
    
    if(localStorage.getItem('page_pfds') === null) {   
      localStorage.setItem('page_pfds','myhome'); 
      // localStorage.setItem('subpage_pfds','myhome'); 
    }    

    const fetchData = async () => { 
      const user = await getMe(dispatch);

      if(user !== 401) {  
        dispatch(set_user_isauth(true));
        dispatch(set_user(user));
        dispatch(setWorkData(true));  
      }   

      dispatch(loader_switch(false)); 
    }; 

    fetchData();

    // dispatch(change_page(localStorage.getItem('page'))); 

  },[]);
 
  const [elementPosition, setElementPosition] = useState({ x: 20, y: 150 })
  const elementRef = useRef()

    // Element scroll position
  useScrollPosition(
    ({ currPos }) => {
      setElementPosition(currPos)
    }, [], app_ref
  )

// console.log(elementPosition);


  return (
    <div ref={app_ref} className="App">
      {loading && <Loader text='Загрузка...' />}
      <HeaderMenu  
        userName={user.email}  
        page={page} 
        onClick={(e) => {  
          localStorage.setItem('page_pfds',e.target.id);
          dispatch(change_page(e.target.id)); 
        }}  
        // scroll={scroll}
        isAuth={isAuth}
        payProduct={user.isProductPay}
        userActivated={user.isActivated}
      /> 
      <SubHeaderMenu 
        headerhim={()=> {}} 
        userName={user.email}  
        page={page} 
        subpage={subpage} 
        onClick={(e) => {  
          localStorage.setItem('subpage_pfds',e.target.id);
          dispatch(change_subpage(e.target.id));
        }}    
        // scroll={scroll}
      /> 
      { popup_visible && <PopapLogin /> }
      <Main isAuth={isAuth} mobile={mobile}   />
    </div>
  );
}

export default  App;


