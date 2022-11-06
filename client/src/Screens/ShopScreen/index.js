import React, { useEffect } from 'react';  
import { useDispatch } from 'react-redux';   
import { Row } from 'antd';  

import { CategoryProducts, Title } from '../../components';

import images from '../../assets/images';
import './style.css';


export default function ShopScreen (props) {
  
  const dispatch = useDispatch();
  const { scroll } = props;
 
  return (
    <div className="shop_screen" >
      <div className={`shop_wrapper ${scroll > 659 ? 'compinsation' : ''}`}> 
        <Title title="Выбирите категорию товаров:" />
        <Row justify='center'>  
          <CategoryProducts img={images.meat} title='Свежее мясо' description="Отличное деревенское мясо привезённое из лучших деревень страны." categories="" />
          <CategoryProducts img={images.krupy} title='Крупы' description="Первосортные крупы от производителя привезенные из лучших уголков страныю." categories="" />
          <CategoryProducts img={images.kids} title='Детские товары' description="Детские товары от производителя. Большой ассортимент товаров. Все товары оригинальны." categories="" />
          <CategoryProducts img={images.himiks} title='Бытовая химия' description="Непродовольственные химические вещества, средства ухода за одеждой, помещениями, автомобилями, посудой и тому подобным, которые обычно встречаются и используются в домохозяйстве.   dfgdfgdfdg fs f gsg sfg sf gg htrwhhfsdhstegra gag fddgraegrgfaddgddgdfffdsgt tf" categories="" />
          <CategoryProducts img={images.tehnick} title='Бытовая техника' description="Первосортные круппы от производителя привезенные из лучших уголков страны" categories="" />
          <CategoryProducts img={images.frutis} title='Фрукты' description="Сочные съедобные плоды дерева или кустарника." categories="" />
          <CategoryProducts img={images.fish} title='Рыбная продукция' description="Рыбная продукция прямикомм из Владивостока." categories="" />
          <CategoryProducts img={images.polufabrik} title='Полуфабрикаты' description="Полуфабрикаты от производителя." categories="" />
        </Row> 
      </div>
    </div>
  );
}
 

 