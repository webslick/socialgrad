import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import images from '../../assets/images';
import './style.css';
import { HashRouter, Link, Route, Routes, useLocation  } from 'react-router-dom'; 
import { pages } from '../../redux/selectors' 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Breadcrumb } from 'antd';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Banner(props) {  

  const { banner }= images;
  
  const { onClick, userName, subpage,page, headerhim, scroll} = props;
  

  const breadcrumbNameMap = {
    '/myhome': 'chat',
    '/apps/1': 'Application1',
    '/apps/2': 'Application2',
    '/apps/1/detail': 'Detail',
    '/apps/2/detail': 'Detail',
  };

  const BannerArray = [
    { 
      title:"Национальный проект «Жилье и городская среда»",
      discription:`Федеральный проект \"Обеспечение устойчивого сокращения\" 
      непригодного для проживания жилищного фонда" национального проекта "Жилье и городская среда" реализуется в рамках исполнения Указа Президента Российской Федерации от 7 мая 2018 года
      № 204`,
      subtitle:`Перейти к типовым вопросам граждан, возникающим в связи с переселением из аварийного жилищного фонда`,
      page: '' 
    }, 
  ]; 
 
  const active  = useSelector(pages.active);  

  // const location = useLocation();
  // const pathSnippets = location.pathname.split('/').filter((i) => i);
  // const extraBreadcrumbItems = pathSnippets.map((_, index) => {
  //   const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
  //   return {
  //     key: url,
  //     title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
  //   };
  // });

  
  // const breadcrumbItems = [
  //   {
  //     title: <Link to="/">Home</Link>,
  //     key: 'home',
  //   },
  // ].concat(extraBreadcrumbItems);
  // console.log(breadcrumbItems)
    return (  
      <section className='subHeadMenu' >
         {/* <Breadcrumb routes={breadcrumbItems} /> */}
        
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Главная</a></li>
            <li className="breadcrumb-item"><a href="/relocation-about">Расселение аварийного жилья </a></li>
            <li className="breadcrumb-item active" > О федеральном проекте  </li>
          </ol>
        </nav>
        <Swiper 
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1} 
        pagination={{ clickable: true }} 
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {
          BannerArray.map((item,key) => (
            <SwiperSlide key={key}>
            <div className="bannerWrapper">
              <img src={banner} className="backgroundImg" />
              <div className="overlay" /> 
              <div className="textWrapper">
                <div className="container"> 
                  <h2 className="titleBanner">{item.title}</h2>
                  <p className="discriptionBanner">{item.discription}</p>
                  <p className="linkContainer">
                    <a className="linkP" href="/relocation-about/faq">{item.subtitle}</a>
                  </p>
                </div>
              </div>
            </div>
            </SwiperSlide> 
          ))
        } 
      </Swiper> 
      </section>  
    );
}

export default Banner;

