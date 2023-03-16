import { useDispatch, useSelector } from 'react-redux';
import React, { useRef, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import './App.css';  
import Main from './routes/index';
import Loader from './components/Loader'
import HeaderMenu from './components/HeaderMenu'
import PopapLogin from './components/PopapLogin'
import SubHeaderMenu from './components/SubHeaderMenu'
// import Loader from './components/Loader'
import { change_page,change_subpage, setMobileMod } from './redux/actions/app';
import { checkAuth, set_restate, getMe,set_user,set_user_isauth, getInfoUntilDays } from './redux/actions/users'
import {pages, users, loader, popup_login, app} from './redux/selectors'
// import socketIO from 'socket.io-client';



function App () {
  
  // const socket = socketIO.connect('http://localhost:4000');

  // socket.on("chat message", (msg) => { 
  //   console.log(msg)
  // });
// socket.on("test", (msg) => { 
//   console.log(msg)
// });

  const dispatch = useDispatch();  
  
  const mobile = useSelector(app.mobile); 
  
  const page = useSelector(pages.page); 
  const subpage = useSelector(pages.subpage); 
  
  const user = useSelector(users.user); 
  const isAuth = useSelector(users.isAuth);
  const popup_visible = useSelector(popup_login.popup_visible); 
  
  const app_ref = useRef();    
  const loading = useSelector(loader.loading);
  const [scroll, setScroll] = useState(0);
  const [loaddingdata,setLoadData] = useState(false);
  
  useEffect(() => {   
    if(localStorage.getItem('page_pfds') === null) {   
      localStorage.setItem('page_pfds','myhome'); 
      // localStorage.setItem('subpage_pfds','myhome'); 
    }   
    
    // dispatch(change_page(localStorage.getItem('page')));
    dispatch(setMobileMod(isMobile));
    
    // app_ref.current.addEventListener("scroll", (e) => { 
    //   setScroll(e.target.scrollTop); 
    // });  
     
    // return () => app_ref.current.removeEventListener("scroll", (e) => {});
  },[]);
  
  useEffect(() => {    
    const fetchData = async () => {
      // setLoadData(true)  
      const user = await getMe(dispatch)  
      if(user !== 401) { 
        dispatch(set_user_isauth(true));
        dispatch(set_user(user)); 
        // getInfoUntilDays(user,dispatch);
      }   
    }; 
    fetchData(); 
  },[]); 
 
  useEffect(() => {    
    if(localStorage.getItem('token_pfds')) { 
      checkAuth(dispatch) 
    }  
    // if(localStorage.getItem('page') === null) {  
    //   localStorage.setItem('page','main'); 
    // }   
    dispatch(setMobileMod(isMobile));
    // dispatch(change_page(localStorage.getItem('page')));
   
  },[]);  
 
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
        scroll={scroll}
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
        scroll={scroll}
      />
      { popup_visible && <PopapLogin /> }
      <Main isAuth={isAuth} mobile={mobile} scroll={scroll} />
    </div>
  );
}

export default  App;


