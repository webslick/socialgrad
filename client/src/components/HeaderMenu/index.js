import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { pages, users } from '../../redux/selectors';
import { change_page } from '../../redux/actions/app';
import LoginButton from '../LoginButton'; 
import './style.css';

function HeaderMenu(props) {  
 
  const { onClick, userName, page, mobile, isAuth, scroll} = props; 

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {   
    dispatch(change_page(localStorage.getItem('page_pfds')));  
  },[page]); 

  const { hash, key } = useLocation()

  useEffect(()=>{
    if(hash){
      const targetElement = document.getElementById(hash.substring(1))
      targetElement?.scrollIntoView({behavior: 'smooth'})
    }
  }, [key, hash]); 

  const userIsAuth = useSelector(users.isAuth);
  const subpage = useSelector(pages.subpage); 
 
  const TabsArray = [
    {
      title:"МОЙ ДОМ",
      key:"myhome",
      rout:`/myhome`,
      notification: true
    },
    {
      title:"ЖКХ",
      key:"gkh",
      rout:'/gkh',
      notification: false
    },
    {
      title:"МАГАЗИН",
      key:"sales",
      rout:'/sales',
      notification: false
    },
    {
      title:"СОЦИАЛЬНЫЕ ПРОЕКТЫ",
      key:"socprojects",
      rout:'/socprojects',
      notification: false
    },
    {
      title:"КОНТАКТЫ",
      key:"contacts",
      rout:'/contacts',
      notification: false
    }
  ];

  const active  = useSelector(pages.active); 

    return ( 
      <header className={`headerWrapper ${scroll < 658 ? '' : 'nobord'}`}>
        <div className="container">
          <div className={`header ${scroll > 100 ? 'top' : ''}`}>
            <div className="topItemsMenu">
                <Link to="/" className="logoContainer">
                  <span className="logo" >Первая Федеральная Домовая Служба</span>
                </Link>
                <span className="subTextMenu" >Территория твоего проживания</span>
                <Link to="tel:8 800 200 06 00" className="phoneMenu">8 800 2000 600</Link> 
                {
                  !userIsAuth ? <LoginButton text="Личный кабинет" /> :
                    <div className="wrapperDropdown">
                      <div className="dropdown">
                        <span className="username"> adminadmin </span> 
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M9 10.625C10.5533 10.625 11.8125 9.36601 11.8125 7.8125C11.8125 6.25899 10.5533 5 9 5C7.4467 5 6.1875 6.25899 6.1875 7.8125C6.1875 9.36601 7.4467 10.625 9 10.625ZM9.5 17L12.5 16C12.8945 16 14 15.6176 14 15.2229C14 12.8561 12.0813 10.9375 9.71429 10.9375H8.28571C5.9187 10.9375 4 12.8561 4 15.2229C4 15.6176 7.5 17 9.5 17Z" fill="#323B47"></path>
                          <path fillRule="evenodd" clipRule="evenodd" d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#323B47" strokeWidth="1.4"></path>
                        </svg>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right login_card_menu" styles="">
                        <div className="arrow" styles={{ marginTop: '-1rem',right: '0.5rem' }}></div>
                          <a className="dropdown-item" href="/user">Профиль</a>
                          <a className="dropdown-item" href="https://ais.reformagkh.ru" target="_blank">Рабочая область</a>
                          <a className="dropdown-item" href="/user/logout">Выход</a>
                      </div>
                    </div>
                }
                {/* <RegistrationButton text="Регистрация" margin={40} color="#1d81d0" /> */}
            </div>
          </div>
          <div className="navigationWrapper">
            <nav className="topMenu">
              { 
                TabsArray.map(({ key, rout, title, notification }) => { 
                  return (
                    <Link key={key} to={rout}>
                      <div className={`tab ${key === page ? 'active' : ''}`} onClick={(e) => { onClick(e);console.log(e) }}>
                        <div id={key}>{ title }</div>
                        <div className={`${notification ? 'activenotife' : ''}`}/> 
                      </div>
                    </Link>
                  )
                })  
              } 
            </nav>     
          </div>
        </div> 
      </header>
    );
}

export default HeaderMenu;

