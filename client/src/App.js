import './App.css'; 
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';
import { useInvalidUrlAccess } from './routes/costomNavigation';
import Main from './routes/index';
import HeaderMenu from './components/HeaderMenu'
import PopapLogin from './components/PopapLogin'
import SubHeaderMenu from './components/SubHeaderMenu'
import Loader from './components/Loader'
import { change_page,change_subpage, setMobileMod } from './redux/actions/app';
import { checkAuth } from './redux/actions/users'
import {pages, users, loader, popup_login, app} from './redux/selectors'

function App () {
  const dispatch = useDispatch();  

  const mobile = useSelector(app.mobile); 

  const page = useSelector(pages.page); 
  const subpage = useSelector(pages.subpage); 

  const user = useSelector(users.user); 
  const popup_visible = useSelector(popup_login.popup_visible); 

  const app_ref = useRef();    
  
  const [scroll, setScroll] = useState(0);

console.log(page)

  useEffect(() => {   
    if(localStorage.getItem('page') === null) {   
      localStorage.setItem('page_pfds','myhome'); 
      // localStorage.setItem('subpage_pfds','myhome'); 
    }   

    // dispatch(change_page(localStorage.getItem('page')));
    dispatch(setMobileMod(isMobile));

    app_ref.current.addEventListener("scroll", (e) => { 
      setScroll(e.target.scrollTop); 
    });  
    
    return () => app_ref.current.removeEventListener("scroll", (e) => {});
  },[]);
 
  return (
    <div ref={app_ref} className="App">
      {/* {loading && <Loader text='Загрузка...' />} */}
      <HeaderMenu  
        userName={user.email}  
        page={page} 
        onClick={(e) => {  
          localStorage.setItem('page_pfds',e.target.id);
          dispatch(change_page(e.target.id)); 
        }}  
        scroll={scroll}
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
      <Main mobile={mobile} scroll={scroll} />
    </div>
  );
}

export default  App;


