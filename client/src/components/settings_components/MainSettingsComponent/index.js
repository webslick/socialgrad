import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import MainTitle from '../MainTitle';
import ManualSelect from '../ManualSelect';
import TitleComponent from '../TitleComponent';
import AccountSettingsCopy from '../AccountSettingsCopy';
import ItemDisplayComponent from '../ItemDisplayComponent';
import { appPutAccountsVK } from '../../../redux/actions/api_vk'
import VkApiServices from '../../../services/VkApiServices';


import './style.css';

async function onSave( name_acc,anticapcha, select_option_city,proxy_ip,proxy_log, proxy_pass, accounts, id_acc, dispatch, onClose ) {

  if(name_acc !== '') {
    accounts[id_acc].main_settings.name = name_acc;
  }

  if((select_option_city === 0) && (proxy_ip !== '' && proxy_log !== '' && proxy_pass !== '')) {
    accounts[id_acc].main_settings.network.proxy.ip = proxy_ip;
    accounts[id_acc].main_settings.network.proxy.log = proxy_log;
    accounts[id_acc].main_settings.network.proxy.pass = proxy_pass;
  }

  if((select_option_city !== 0) && (proxy_ip !== '' && proxy_log !== '' && proxy_pass !== '')) {
    accounts[id_acc].main_settings.network.proxy.ip = proxy_ip;
    accounts[id_acc].main_settings.network.proxy.log = proxy_log;
    accounts[id_acc].main_settings.network.proxy.pass = proxy_pass;
  }

  if((select_option_city !== 0) && (proxy_ip === '' || proxy_log === '' || proxy_pass === '')) {
    accounts[id_acc].main_settings.network.vpn.country = select_option_city;
  }

  accounts[id_acc].main_settings.anticapcha = anticapcha; 

  dispatch(appPutAccountsVK(accounts));

  const vk_res = await VkApiServices.saveaccvk({user_id: accounts[id_acc].user_accounts_info.user_id, accounts:[...accounts]});
 
  onClose(false);

}


export default function MainSettingsComponent (props) {

  const { accounts, id_acc, onClose } = props;
  // useInvalidUrlAccess();

  const [select_option_value, changeOption] = useState(0);
  const [select_option_city, changeOptionCity] = useState("0");
  const [name_acc, changeNameAcc] = useState("");
  const [anticapcha, changeAnticapcha] = useState("");
  const [proxy_ip, changeProxyIp] = useState("");
  const [proxy_log, changeProxyLog] = useState("");
  const [proxy_pass, changeProxyPass] = useState(""); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lable_network = ["Выключены","Vpn","Proxy"];
  const city_proxy = ["Выбирите страну","Нидерланды","Сингапур","Великобритания","США"];

  const account = accounts[id_acc]

  return (
    <div className="main_settings_wrapper" >
      <MainTitle  title_acc={`${account.main_settings.name}`} text="Настройки аккаунта:" />
      <TitleComponent title="Название аккаунта" />
      <div className='main_settings_name_input_container'>
        <Input placeholder="Введите название" changeInput={(val) => { changeNameAcc(val) }} input_value={name_acc} />
      </div>
      <div className='main_settings_anticaptcha_title_container'>
        <TitleComponent title="AntiCaptcha" />
        <a target="parent" href="https://anti-captcha.com/ru">Сервис anti-captcha.com</a>
      </div>
      <div className='main_settings_anticaptcha_input_container'>
        <Input placeholder="Ключ учетной записи anti-captcha.com"  changeInput={(val) => { changeAnticapcha(val) }} input_value={anticapcha} />
      </div>
      <ManualSelect optionsState={select_option_value} onClick={(option) => {
         changeOption(option);
         if(option === '0') {
          changeOptionCity('0');
          changeProxyIp('');
          changeProxyLog('');
          changeProxyPass('');
        }
      }} title="Настройки сети" styles={{ width: '140px' }}>
        {
          lable_network.map((item,key) =>( 
            <option key={key} value={key}>{item}</option>
          ))
        }
      </ManualSelect>
      {
        (select_option_value === "1")  && 
        <ManualSelect optionsState={select_option_city} onClick={(option) => { changeOptionCity(option) }} title="Настройки сети" styles={{ width: '140px' }}>
          {
            city_proxy.map((item,key) =>( 
              <option key={key} value={key}>{item}</option>
            ))
          }
        </ManualSelect>
      }
      {
        (select_option_value === "2")  && (
          <div className='main_settings_proxy_container'>
          <div className='main_settings_proxy_title_container'>
            <TitleComponent title="Учетная запись прокси" />
            <a target="parent" href="https://proxy6.net/en/">Сервис proxy6.net</a>
          </div>
          <div className='main_settings_proxy_name_input_container'>
            <Input placeholder="193.203.105.114:53660"  changeInput={(val) => { changeProxyIp(val) }} input_value={proxy_ip} />
          </div>
          <div className='main_settings_proxy_name_input_container'>
            <Input placeholder="mvfzpqkUHC" changeInput={(val) => { changeProxyLog(val) }} input_value={proxy_log} />
          </div>
          <div className='main_settings_proxy_name_input_container'>
            <Input placeholder="l7iITN6Qmq" changeInput={(val) => { changeProxyPass(val) }} input_value={proxy_pass} />
          </div>
          </div>
        )
      }
       <AccountSettingsCopy 
        onClose={onClose} 
        styles={{ marginTop:'30px' }} 
        onSave={() => onSave( name_acc,anticapcha, select_option_city,proxy_ip,proxy_log, proxy_pass, accounts, id_acc, dispatch, onClose ) }
      >  
        {/* {
          accounts.map((item,key) => {
            return <ItemDisplayComponent 
              check_all={check_all}
              checked={item.id === key ? true : false} 
              key={key} 
              name={`${item.main_settings.name}`} 
              id={key} 
              onClick={(id) => { 
              let lock = false;
              if( id_check.length === 0 ) {
                id_check.push(id)x
                setIdCheck(id_check) 
              } else {
          
                id_check.map(item => {
                  if (item === id) {
                    lock = true
                  } 
                  return false
                })
                if(!lock) {
                  id_check.push(id)
                  setIdCheck(id_check) 
                } 
              }
                console.log(id_check)
              }} 
            />
          })
        } */}
      </AccountSettingsCopy>
    </div>
  );
}
