import React, { useEffect } from 'react';  
import './style.css';
import { useDispatch } from 'react-redux'; 
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import CardsPrice from '../../components/CardsPrice'

function PriceScreen () {

  // useInvalidUrlAccess();

  const dispatch = useDispatch();
 
  return (
    <div className="price_screen" >
    <div className='price_wrapper'>
      <div className='titlePriceContainer'>
        Актуальные тарифы на сегодня:
      </div>
      <div className='cardPriceContainer'>
        <CardsPrice title="Бесплатно 3 дня" description="После регистрации, Вам будет доступен полный функционал программы" price="0" txtbtn="Попробовать" />
        <CardsPrice title="30 дней" description="После регистрации, Вам будет доступен полный функционал программы, а также возможность зарабатывать на привлечении новых пользователей." price="1000" txtbtn="Оплатить" />
        <CardsPrice title="90 дней" description="После регистрации, Вам будет доступен полный функционал программы, а также возможность зарабатывать на привлечении новых пользователей." price="3000" gift="+ месяц в подарок" txtbtn="Оплатить" />
        <CardsPrice title="180 дней" description="После регистрации, Вам будет доступен полный функционал программы, а также возможность зарабатывать на привлечении новых пользователей." price="6000" gift="+ полгода в подарок" txtbtn="Оплатить" />
      </div>
    </div>
  </div>
  );
}

export default PriceScreen;