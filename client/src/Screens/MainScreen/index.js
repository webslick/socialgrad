import React, { useEffect } from 'react';  

import { useDispatch } from 'react-redux';  
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

import images from '../../assets/images';
import { Title, SubTitle, HomeWarning, TableHome, CardProducts, CategoryProducts } from '../../components'; 
import './style.css';


function MainScreen (props) {
  
  const dispatch = useDispatch();
  const { scroll } = props;
  
  let arrColumn =[
    [{
      title: 'Общая площадь, кв.м',
      value: '3 461,30'
    },
    {
      title: 'Общая площадь жилых помещений, кв.м',
      value: '3 432,80'
    },
    {
      title: 'Количество этажей, ед.',
      value: '5'
    }],
    [{
      title: 'Год ввода дома в эксплуатацию',
      value: '1969'
    },
    {
      title: 'Численность жителей, чел.',
      value: '162'
    },
    {
      title: 'Количество подъездов, ед.',
      value: '4'
    }]
  ]
 
  return (
    <div className="main_screen" >
      <div className={`main_wrapper ${scroll > 659 ? 'compinsation' : ''}`}>
        <Title title="Мой дом" /> 
        <SubTitle subtitle="г.Новосибирск, ул.Темирязева, дом 247" />
        <HomeWarning title="В этом месте будет какая-нибудь информация касаема этого дома:" description="тут еще ченить" titletwo="Управляющая организация:" descriptiontwo="Служба заказчика ЖКХ  Ленинского района" />
        <TableHome arrColumn={arrColumn} />
        <div className='map_wrapper'>
          <YMaps>
            <Map width={900} defaultState={{ center: [44.625040, 40.094427], zoom: 15 }}>
              <Placemark geometry={[44.625040, 40.094427]} /> 
              <ZoomControl />
            </Map>
          </YMaps>
        </div>  
        <div className='tempContainerRow'>
        <CardProducts img={images.meat} defaultValue={'50 руб. от 1 кг.'} title='Мясо говядина' description="Отличное деревенское мясо привезённое из лучших деревень страны." price={[{ value: 0, label: '350 руб. от 1 кг.',number: 350 },{ value: 1, label: '300 руб. от 10 кг.',number: 300 },{ value: 2, label: '280 руб. от 100 кг.',number: 280 }]} txtbtn="В корзину" />
        <CardProducts img={images.krupy} defaultValue={'50 руб. от 1 кг.'} title='Крупы на развес' description="Первосортные круппы от производителя привезенные из лучших уголков страны" price={[{ value: 0, label: '50 руб. от 1 кг.',number: 50 },{ value: 1, label: '30 руб. от 10 кг.',number: 300 },{ value: 2, label: '25 руб. от 100 кг.',number: 280 }]} txtbtn="В корзину" />
        </div>
      </div>
    </div>
  );
}

export default MainScreen;