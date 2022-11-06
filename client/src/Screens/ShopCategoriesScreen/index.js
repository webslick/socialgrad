import React, { useEffect } from 'react';  
import { useDispatch } from 'react-redux';   
import { useParams } from 'react-router-dom';   
import { Row } from 'antd';  

import { CardProducts, Title } from '../../components';

import images from '../../assets/images';
import './style.css';


export default function ShopCategoriesScreen (props) {
  
  const dispatch = useDispatch();
  const { item } = useParams();
  
  const { scroll } = props; 

  return (
    <div className="shop_screen" >
      <div className={`shop_wrapper ${scroll > 659 ? 'compinsation' : ''}`}> 
        <Title title="Выбирите категорию товаров:" />
        <Row justify='center'>   
          <CardProducts img={images.meat} defaultValue={'50 руб. от 1 кг.'} title='Мясо говядина' description="Отличное деревенское мясо привезённое из лучших деревень страны." price={[{ value: 0, label: '350 руб. от 1 кг.',number: 350 },{ value: 1, label: '300 руб. от 10 кг.',number: 300 },{ value: 2, label: '280 руб. от 100 кг.',number: 280 }]} txtbtn="В корзину" />
          <CardProducts img={images.meat} defaultValue={'50 руб. от 1 кг.'} title='Мясо говядина' description="Отличное деревенское мясо привезённое из лучших деревень страны." price={[{ value: 0, label: '350 руб. от 1 кг.',number: 350 },{ value: 1, label: '300 руб. от 10 кг.',number: 300 },{ value: 2, label: '280 руб. от 100 кг.',number: 280 }]} txtbtn="В корзину" />
          <CardProducts img={images.meat} defaultValue={'50 руб. от 1 кг.'} title='Мясо говядина' description="Отличное деревенское мясо привезённое из лучших деревень страны." price={[{ value: 0, label: '350 руб. от 1 кг.',number: 350 },{ value: 1, label: '300 руб. от 10 кг.',number: 300 },{ value: 2, label: '280 руб. от 100 кг.',number: 280 }]} txtbtn="В корзину" />
        </Row> 
      </div>
    </div>
  );
}
 

 