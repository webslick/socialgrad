import React, { useEffect } from 'react';  
import './style.css';
import { useDispatch } from 'react-redux'; 
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import images from '../../assets/images';
import Title from '../../components/Title'
import SubTitle from '../../components/SubTitle'
import HomeWarning from '../../components/HomeWarning'
import TableHome from '../../components/TableHome'


function UKScreen (props) {
  
  const dispatch = useDispatch();
  const { scroll } = props;
 

  let arrColumn =[
    [{
      title: 'Руководитель: ',
      value: 'Налобин Виктор Викторович'
    },
    {
      title: 'Режим работы диспетчерской службы: ',
      value: 'Рабочие дни с 7 до 19 часов'
    },
    {
      title: 'Телефон: ',
      value: '383-34-99-517'
    },
    {
      title: 'e-mail: ',
      value: 'info@szl-nsk.ru'
    },
    {
      title: 'Официальный сайт: ',
      value: 'http://www.szl-nsk.ru/'
    }],
    [{
      title: 'Масштаб деятельности',
      value: '10,00'
    },
    {
      title: 'Финансовая устойчивость',
      value: '0,00'
    },
    {
      title: 'Эффективность',
      value: '0,00'
    },
    {
      title: 'Репутация',
      value: '12,00'
    },
    {
      title: 'Прозрачность',
      value: '16,00'
    }]
  ]
 
  return (
    <div className="main_screen" >
      <div className={`main_wrapper ${scroll > 659 ? 'compinsation' : ''}`}>
        <Title title="ООО Служба заказчика ЖКХ Ленинского района " /> 
        <SubTitle subtitle="обл. Новосибирская, г. Новосибирск, ул. Ватутина, д. 12/1" /> 
        <TableHome arrColumn={arrColumn} />
        <div className='map_wrapper'>
        <Title title="Управляющая организация на карте" /> 
          <YMaps>
            <Map width={900} defaultState={{ center: [44.625040, 40.094427], zoom: 15 }}>
              <Placemark geometry={[44.625040, 40.094427]} /> 
              <ZoomControl />
            </Map>
          </YMaps>
        </div>  
      </div>
    </div>
  );
}

export default UKScreen;