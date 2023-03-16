import React, { useEffect } from 'react';  
import { useNavigate } from 'react-router-dom';  
import { useDispatch } from 'react-redux';  
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

import images from '../../assets/images';
import { 
    Title, 
    SubTitle, 
    HomeWarning, 
    TableHome, 
    CardProducts, 
    CategoryProducts,
    OrangeButton,
    CardsAdvantage,
    CardsPrice
} from '../../components'; 
import './style.css';


function MainScreen (props) {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { scroll, mobile, isAuth } = props;
  
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
    // <div className="main_screen" >
    //   <div className={`main_wrapper ${scroll > 659 ? 'compinsation' : ''}`}>
    //     <Title title="Мой дом" /> 
    //     <SubTitle subtitle="г.Новосибирск, ул.Темирязева, дом 247" />
    //     <HomeWarning title="В этом месте будет какая-нибудь информация касаема этого дома:" description="тут еще ченить" titletwo="Управляющая организация:" descriptiontwo="Служба заказчика ЖКХ  Ленинского района" />
    //     <TableHome arrColumn={arrColumn} />
    //     <div className='map_wrapper'>
    //       <YMaps>
    //         <Map width={900} defaultState={{ center: [44.625040, 40.094427], zoom: 15 }}>
    //           <Placemark geometry={[44.625040, 40.094427]} /> 
    //           <ZoomControl />
    //         </Map>
    //       </YMaps>
    //     </div>  
    //     <div className='tempContainerRow'>
    //     <CardProducts img={images.meat} defaultValue={'50 руб. от 1 кг.'} title='Мясо говядина' description="Отличное деревенское мясо привезённое из лучших деревень страны." price={[{ value: 0, label: '350 руб. от 1 кг.',number: 350 },{ value: 1, label: '300 руб. от 10 кг.',number: 300 },{ value: 2, label: '280 руб. от 100 кг.',number: 280 }]} txtbtn="В корзину" />
    //     <CardProducts img={images.krupy} defaultValue={'50 руб. от 1 кг.'} title='Крупы на развес' description="Первосортные круппы от производителя привезенные из лучших уголков страны" price={[{ value: 0, label: '50 руб. от 1 кг.',number: 50 },{ value: 1, label: '30 руб. от 10 кг.',number: 300 },{ value: 2, label: '25 руб. от 100 кг.',number: 280 }]} txtbtn="В корзину" />
    //     </div>
    //   </div>
    // </div>
    <div className="main_screen" >
    <div className='main_wrapper'> 
    {
      mobile ? 
      <>
        <div className='mobileTitlePriceContainer'>
        InviteBot - Ваш бизнес
          в ВКонтакте без затрат на трафик!
        </div>
        <div className='mobileSubTitlePriceContainer'>
        Избавьтесь от лишних затрат, займитесь тем,
          о чём давно мечтали, InviteBot всё сделает за Вас.
        </div>
        <div className='mobileInfoMainContainer'>
          <div className='mobileInfoMainLeftContainer'>
          <strong className='strongfont'>InviteBot</strong> Умный робот, который выполняет ключевую задачу в маркетинге – гуляет по целевой аудитории, привлекает внимание, заводит диалог с заинтересованными пользователями и многое другое.
            На выходе Вы получаете ответ:
            - интересно ли Ваше коммерческое предложение людям или нет.
          </div>
          <div className='infoMainRightContainer'>
            <img className={`${ mobile ? "mobileImg" : "" }`} src={images.vk} alt="img" />
          </div>
        </div>
        <div className='mobileInfoMainContainer'>
          <div className='infoMainRightContainer'>
            <img style={{width: "150px"}} src={images.clock} alt="img" />
          </div>
          <div className='mobileInfoMainLeftContainer'>
            То есть, при использовании данной системы, Вы консультируете только заинтересованных в Вашем предложении.

            Вы экономите своё время и время людей, никого не уговариваете и не упрашиваете!
          </div> 
        </div>
        {
          isAuth ? 
          <></> : 
          <div className='buttonConatinerMainTop'>
            <OrangeButton onClick={()=>{navigate('/signin')}} width={300} text="Начать пользоваться" />
          </div>
        }
        <div className='mobileTitlePriceContainer'>
          Преимущества
        </div>
        <div className='mobileSubTitleContainer'>
          <strong>Продвижение на полном автомате.</strong><br/>
          Продвижение по расписанию в автоматическом режиме без Вашего участия.<br/>
          Стоит один раз настроить систему продвижения. 
        </div>
        <div className='cardsAdvantageContainer'>
          <CardsAdvantage mobile={mobile} count={1} title={'Работа по целевой аудитории'} description={'Сервис позволяет максимально точно выделить из всей аудитории только ту, которая подходит по заданным критериям поиска.'}/>
          <CardsAdvantage mobile={mobile} count={2} title={'Голосовой автоответчик'} description={'Уникальная фишка. На голос пользователи реагируют положительно и по нашему опыту конверсия вырастает.'}/>
          <CardsAdvantage mobile={mobile} count={3} title={'Имитация действий человека'} description={'Алгоритм бота полностью имитирует действия реального человека, а Вы можете наблюдать за его действиями в реальном времени!'}/>
          <CardsAdvantage mobile={mobile} count={4} title={'Закрепление Ваших Stories на первом месте'} description={'Подписчики будут видеть Вас постоянно впереди! Увеличивает охваты в разы!'}/>
          <CardsAdvantage mobile={mobile} count={5} title={'Менеджер аккаунтов'} description={'Удобное добавление, переключение и управление аккаунтами, их количество не ограничено!'}/>
          <CardsAdvantage mobile={mobile} count={6} title={'Заработок на партнёрской программе'} description={'Порекомендуйте трём друзьям и пользуйтесь InviteBot бесплатно! Платим за каждого привлечённого пользователя 40% его платежей.'}/>
        </div>
        <div className='mobileTitlePriceContainer'>
          Актуальные тарифы на сегодня:
        </div> 
        <div className='mobileCardPriceContainer'>
          {/* <CardsPrice mobile={mobile} onClick={()=>{navigate('/signin')}} title="Бесплатно 3 дня" description="После регистрации, Вам будет доступен полный функционал программы" price="1" txtbtn="Попробовать" des="test"/>  */}
          <CardsPrice mobile={mobile} onClick={() => {}} lock={!isAuth} title="30 дней" description="После регистрации, Вам будет доступен полный функционал программы, а также возможность зарабатывать на привлечении новых пользователей." price="1" txtbtn="Оплатить" des="30 дней подписки на сервис" />
          <CardsPrice mobile={mobile} onClick={() => {}} lock={!isAuth} title="90 дней" description="После регистрации, Вам будет доступен полный функционал программы, а также возможность зарабатывать на привлечении новых пользователей." price="3000" gift="+ месяц в подарок" txtbtn="Оплатить" des="90 дней подписки на сервис" />
          <CardsPrice mobile={mobile} onClick={() => {}} lock={!isAuth} title="180 дней" description="После регистрации, Вам будет доступен полный функционал программы, а также возможность зарабатывать на привлечении новых пользователей." price="6000" gift="+ полгода в подарок" txtbtn="Оплатить" des="180 дней подписки на сервис" />
        </div>
      </> :
      <>
           <div className='titlePriceContainer'>
        ПФДС - Удобный сервис для использования управляющими компаниями!
        </div>
        <div className='subTitlePriceContainer'>
        Избавьтесь от лишних затрат, займитесь тем,
          о чём давно мечтали, ПФДС всё сделает за Вас.
        </div>
        <div className='infoMainContainer'>
          <div className='infoMainLeftContainer'>
          <strong className='strongfont'>ПФДС</strong> Набор инструментов для комфортной работы и управления.
          </div>
          <div className='infoMainRightContainer'>
            <img style={{width: "300px"}} src={images.tehnick} alt="img" />
          </div>
        </div>
        <div className='infoMainContainer'>
          <div className='infoMainRightContainer'>
            <img style={{width: "300px"}} src={images.tehnick} alt="img" />
          </div>
          <div className='infoMainLeftContainer'>
            То есть, при использовании данной системы, Вы консультируете только заинтересованных в Вашем предложении.

            Вы экономите своё время и время людей, никого не уговариваете и не упрашиваете!
          </div> 
        </div>
        {
          isAuth ? 
          <></> : 
          <div className='buttonConatinerMainTop'>
            <OrangeButton onClick={() => { navigate('/signin') }} width={300} text="Начать пользоваться" />
          </div>
        }
        <div className='titlePriceContainer'>
          Преимущества
        </div>
        <div className='subTitleContainer'> 
          Полный набор инструментов нашей компании.<br/>
          Помогут вам в управлении -- стоит лишь<br/>
          Стоит один раз настроить систему продвижения. 
        </div>
        <div className='cardsAdvantageContainer'>
          <CardsAdvantage count={1} title={'Тут наши приемущества'} description={'Тут описание нашего приемущества почему нужно сотрудничать с нами'}/> 
          <CardsAdvantage count={2} title={'Тут наши приемущества'} description={'Тут описание нашего приемущества почему нужно сотрудничать с нами'}/> 
          <CardsAdvantage count={3} title={'Тут наши приемущества'} description={'Тут описание нашего приемущества почему нужно сотрудничать с нами'}/> 
          <CardsAdvantage count={4} title={'Тут наши приемущества'} description={'Тут описание нашего приемущества почему нужно сотрудничать с нами'}/> 
          <CardsAdvantage count={5} title={'Тут наши приемущества'} description={'Тут описание нашего приемущества почему нужно сотрудничать с нами'}/> 
          <CardsAdvantage count={6} title={'Тут наши приемущества'} description={'Тут описание нашего приемущества почему нужно сотрудничать с нами'}/> 
        </div>
        <div className='titlePriceContainer'>
          Актуальные тарифы на сегодня:
        </div> 
        <div className='cardPriceContainer'>
          {/* <CardsPrice onClick={() => {}} title="Бесплатно 3 дня" description="После регистрации, Вам будет доступен полный функционал программы" price="1" txtbtn="Попробовать" des="test"/>  */}
          <CardsPrice onClick={() => {}} lock={!isAuth} title="30 дней" description="После регистрации, Вам будет доступен полный функционал программы, а также возможность зарабатывать на привлечении новых пользователей." price="1" txtbtn="Купить" des="30 дней подписки на сервис" />
          <CardsPrice onClick={() => {}} lock={!isAuth} title="90 дней" description="После регистрации, Вам будет доступен полный функционал программы, а также возможность зарабатывать на привлечении новых пользователей." price="3000" gift="+ месяц в подарок" txtbtn="Купить" des="90 дней подписки на сервис" />
          <CardsPrice onClick={() => {}} lock={!isAuth} title="180 дней" description="После регистрации, Вам будет доступен полный функционал программы, а также возможность зарабатывать на привлечении новых пользователей." price="6000" gift="+ полгода в подарок" txtbtn="Купить" des="180 дней подписки на сервис" />
        </div>
        {
          isAuth ? 
          <></> : 
          <div className='buttonConatinerMainBottom'>
            <OrangeButton onClick={()=>{navigate('/signin')}} width={300} text="Начать пользоваться" />
          </div>
        }
      </>
    }
    </div>
  </div> 
  );
}

export default MainScreen;