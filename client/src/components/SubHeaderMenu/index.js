import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import images from '../../assets/images';
import './style.css';
import { Link } from 'react-router-dom'; 
import { pages } from '../../redux/selectors'
import Banner from '../Banner';

function SubHeaderMenu(props) {  

  const { subimg }= images;
  const { onClick, userName, subpage,page, headerhim, scroll} = props;
  
  const SubTabsArray = [
    { 
      page: "myhome",
      subpage: [
        {
          title:"ЧАТ ДОМА",
          key:"chat",
          rout:`${page}/chat`,
          notification: false 
        },
        {
          title:"УПУРАВЛЯЮЩИЕ ОРГАНИЗАЦИИ",
          key:"uk",
          rout:`${page}/uk`,
          notification: false 
        }
      ]
    },
    { 
      page: "gkh",
      subpage: [
        {
          title:"ЖКХ ЭКСПЕРТ",
          key:"expert",
          rout:`${page}/expert`,
          notification: false 
        },
        {
          title:"ГОЛОСОВАНИЕ",
          key:"voting",
          rout:`${page}/voting`,
          notification: false 
        },
        {
          title:"ОБРАЩЕНИЯ",
          key:"petition",
          rout:`${page}/petition`,
          notification: false 
        },
        {
          title:"ЖКХ УСЛУГИ",
          key:"services",
          rout:`${page}/services`,
          notification: false 
        }
      ]
    },
    { 
      page: "sales",
      subpage: [
        {
          title:"ЗАКАЗ ПРОДУКТОВ",
          key:"orderproducts",
          rout:`${page}/orderproducts/categories`,
          notification: false 
        },
        {
          title:"ЗАКАЗ БЛЮД",
          key:"orderdishes",
          rout:`${page}/orderdishes/categories`,
          notification: false 
        }
      ]
    },
    { 
      page: "socprojects",
      subpage: [
        {
          title:"МИРОПРИЯТИЯ",
          key:"worldviews",
          rout:`${page}/worldviews`,
          notification: false 
        },
        {
          title:"КОНКУРСЫ",
          key:"concourse",
          rout:`${page}/concourse`,
          notification: false 
        },
        {
          title:"СОРЕВНОВАНИЯ",
          key:"competitions",
          rout:`${page}/competitions`,
          notification: false 
        },
        {
          title:"ВЕБИНАРЫ",
          key:"webinars",
          rout:`${page}/webinars`,
          notification: false 
        }
      ]
    },
    { 
      page: "contacts",
      subpage: [
        {
          title:"О ПРОЕКТЕ",
          key:"about",
          rout:`${page}/about`,
          notification: false 
        },
        {
          title:"СОТРУДНИЧЕСТВО",
          key:"cooperation",
          rout:`${page}/cooperation`,
          notification: false 
        },
        {
          title:"АДРЕС",
          key:"adress",
          rout:`${page}/adress`,
          notification: false 
        } 
      ]
    }
  ]; 
 
  useEffect(() => {
    // let header = get
    // if(localStorage.getItem('token')) {
    //   checkAuth(dispatch);
    // }
 
  },[]);

  const active  = useSelector(pages.active);  
  //  console.log(scroll)
    return ( 
      <section>
        <Banner />
        <section className={`border_bottom ${scroll > 659 ? 'mn-level2-fixed' : ''}`}> 
          <div className="container">
            <nav className="topMenu test">
              {
                SubTabsArray.map((item, i) => {  
                  if (page === item.page) { 
                    return item.subpage.map(({ key, rout, title, notification }) => { 
                      return <Link key={key} to={rout}>
                        <div className={`tab ${key === subpage ? 'active' : ''}`} onClick={(e) => { onClick(e) }}>
                          <div id={key}>{title}</div>
                          <div className={`${notification ? 'activenotife' : ''}`}/> 
                        </div>
                      </Link>   
                    });
                  }  
                })
              } 
            </nav>
          </div>
        </section> 
      </section> 
    );
}

export default SubHeaderMenu;

