import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { popup_login } from '../../redux/selectors/index';
import { change_visible_popup, set_enter_popup, login } from '../../redux/actions/users';
import images from '../../assets/images';
import RegistrationButton from '../RegistrationButton';
import InputPopap from '../InputPopap';
import './style.css';

export default function PopapLogin (props) {

  const [social_login,setSocialLogin] = useState('');
  const [social_password,setSocialPassword] = useState('');
  const [err,setErr] = useState(false);
  const [duble_acc,setDduble] = useState(false);

  const [eye_pass, setEyePass] = useState(false);
  
  const dispatch = useDispatch();
  const popup_visible = useSelector(popup_login.popup_visible); 
  let enter = useSelector(popup_login.enter); 

  const { accounts, id_acc, user_id } = props; 

  const { cross } = images;

  var error_timer = '';
 
  return (
    <div className="modal" >
      <div className="modal-dialog" >
        <div className="modal-content">
          <button onClick={ () => { dispatch(change_visible_popup(!popup_visible)) }} type="button" className="close" >
            <img alt="" src={cross} style={{width: '16px', height: '16px'}} /> 
          </button>
          <ul className="nav-container" >
            <li className="nav-item login-tab">
              <div className={`nav-link ${enter ? 'active_tab' : ''}`} onClick={ () => { dispatch(set_enter_popup(!enter)) }} >Вход</div>
            </li>
            <li className="nav-item">
              <div className={`nav-link ${enter ? '' : 'active_tab'}`} onClick={ () => { dispatch(set_enter_popup(!enter)) }} >Регистрация</div>
            </li>
          </ul>
          <div className="tab-content background-grey p-5" >

            {
              enter ? <div className="tab-pane fade show active mx-4" >
              <form action="/user/login" method="POST" className="login-form">
                <InputPopap input_value={social_login} onChange={setSocialLogin} placeholder="Логин (E-mail)" /> 
                <InputPopap input_value={social_password} onChange={setSocialPassword} placeholder="Пароль" eye={true}/> 
                <div className="form-group mb-4 text-right">
                  <a href="#foget-pass" className="float-right">Забыли пароль?</a>
                  <div className="clearfix"></div>
                </div>
                <div className="buttonContainer">
                  <RegistrationButton onClick={()=>login(social_login,social_password,dispatch)} text="ВОЙТИ" color="#1d81d0" />
                </div>
              </form>
            </div> : <div className="tab-pane fade mx-4 show" >
              <span className="d-block mb-5 font-weight-bold f-18 lh-20">Внимание!</span>
              <span className="d-block my-5 f-14 lh-22">При регистрации на портале «Первая Федеральная Домовая Служба» Вы создаете учетную запись пользователя. Для регистрации которой с Вами свяжется наш специалист, Вам необходимо будет подтвердить свои данные.</span>
              <form className="my-3 pt-1 login-form" action="/user/register" method="POST">
                <InputPopap input_value={''} lable="Ваш телефон" placeholder="Телефон" /> 
                <InputPopap input_value={''} lable="Адрес электронной почты" placeholder="Email" />
                <InputPopap input_value={''} lable="Полное имя (ФИО)" placeholder="Полное имя" />
                <RegistrationButton text="ЗАПРОСИТЬ РЕГИСТРАЦИЮ" width={300} color="#1d81d0" />
                <p>Отправляя данную форму Вы соглашаетесь с <a href="#">Политикой ООО ПФДС</a> в отношении обработки персональных данных субъектов персональных данных.</p>
                <p>После запроса с вами свяжется наш специалист и ознокомит вас с инструкциями по активации пользователя.</p>
              </form>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
   
  );
}