import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../Input';
import MainTitle from '../../MainTitle';
import ManualSelect from '../../ManualSelect';
import TitleComponent from '../../TitleComponent';
import AccountSettingsCopy from '../../AccountSettingsCopy';
import ItemDisplayComponent from '../../ItemDisplayComponent';
import TimeSetComponent from '../../TimeSetComponent';
import AddingComponent from '../../AddingComponent';
import SelectComponentItem from '../../SelectComponentItem';
import CheckComponent from '../../CheckComponent';
import { appPutAccountsVK } from '../../../../redux/actions/api_vk';
import './style.css';
async function onSave(check_all,name_acc, anticapcha, proxy_ip, proxy_log, proxy_pass, select_option_city, accounts, id_acc, checked, dispatch, onClose) {

  if(check_all) {
    accounts.map(item => {
      if(name_acc !== '') {
        item.main_settings.name = name_acc;
      }

      if((select_option_city === 0) && (proxy_ip !== '' && proxy_log !== '' && proxy_pass !== '')) {
        item.main_settings.network.proxy.ip = proxy_ip;
        item.main_settings.network.proxy.log = proxy_log;
        item.main_settings.network.proxy.pass = proxy_pass;
      }

      if((select_option_city !== 0) && (proxy_ip !== '' && proxy_log !== '' && proxy_pass !== '')) {
        item.main_settings.network.proxy.ip = proxy_ip;
        item.main_settings.network.proxy.log = proxy_log;
        item.main_settings.network.proxy.pass = proxy_pass;
      }

      if((select_option_city !== 0) && (proxy_ip === '' || proxy_log === '' || proxy_pass === '')) {
        item.main_settings.network.vpn.country = select_option_city;
      }

      item.main_settings.anticapcha = anticapcha;
    })
  } else {
    if(checked.length > 0) {
      checked.map(item => {
        if(name_acc !== '') {
          item.main_settings.name = name_acc;
        }
  
        if((select_option_city === 0) && (proxy_ip !== '' && proxy_log !== '' && proxy_pass !== '')) {
          item.main_settings.network.proxy.ip = proxy_ip;
          item.main_settings.network.proxy.log = proxy_log;
          item.main_settings.network.proxy.pass = proxy_pass;
        }
  
        if((select_option_city !== 0) && (proxy_ip !== '' && proxy_log !== '' && proxy_pass !== '')) {
          item.main_settings.network.proxy.ip = proxy_ip;
          item.main_settings.network.proxy.log = proxy_log;
          item.main_settings.network.proxy.pass = proxy_pass;
        }
  
        if((select_option_city !== 0) && (proxy_ip === '' || proxy_log === '' || proxy_pass === '')) {
          item.main_settings.network.vpn.country = select_option_city;
        }

        item.main_settings.anticapcha = anticapcha;
      })
    } else {

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

    }
  }

  // let save = await 
  dispatch(appPutAccountsVK(accounts));
  onClose(false);

}
export default function SheduleSettingsPage (props) {

  const { accounts, id_acc, onClose, task_id } = props;
  // useInvalidUrlAccess();

  const [id_check, setIdCheck] = useState([]);
  const [select_option_value, changeOption] = useState(0);
  const [select_option_city, changeOptionCity] = useState("0");
  const [name_acc, changeNameAcc] = useState("");
  const [anticapcha, changeAnticapcha] = useState("");
  const [proxy_ip, changeProxyIp] = useState("");
  const [proxy_log, changeProxyLog] = useState("");
  const [proxy_pass, changeProxyPass] = useState("");
  const [check_all, checkedAll] = useState(false);
  const [shedule_task, pushSheduleTask] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lable_network = ["Ручной","Автоматический"];
  const check_item_arr = [];
  const weeks_day = ["Все","Пн","Вт","Ср","Чт","Пт","Сб","Вс"];
  const account = accounts[id_acc];
  return (
    <div className="shedule_settings_page_wrapper" >
      <MainTitle title_acc={`${account.main_settings.name}`} text="Расписание аккаунта:" />
      <ManualSelect optionsState={select_option_value} onClick={(option) => { changeOption(option) }} title="Режим расписания" styles={{ width: '140px' }}>
        {
          lable_network?.map((item,key) =>( 
            <option key={key} value={key}>{item}</option>
          ))
        }
      </ManualSelect>
      {
        (select_option_value === "1")  && (
          <div className=''>
            <TitleComponent title="Дни недели"/>
            <div className='shedule_settings_weeks_days'>
              {
                weeks_day?.map((item,key) => (
                  <CheckComponent key={key} >
                    <TitleComponent title={item} />
                  </CheckComponent>
                ))
              }
            </div>
            <TimeSetComponent title="Запуск расписания (часы:минуты)" />
          </div>
        )
      }
      <TimeSetComponent title="Остановка расписания (часы:минуты)" />
      <ManualSelect optionsState={select_option_value} onClick={(option) => { changeOption(option) }} title="Следующее задание" styles={{ width: '140px' }}>
        {
          shedule_task?.map((item,key) =>( 
            <option key={key} value={key}>{item}</option>
          ))
        }
      </ManualSelect>
      <AddingComponent check_item={check_item_arr} onClick={(e) => {pushSheduleTask([1])}}>
        <SelectComponentItem />
      </AddingComponent>
      <TitleComponent title="Отправлять ошибки"/>
      <CheckComponent >
        <TitleComponent title="Telegram"/>
      </CheckComponent>
      <AccountSettingsCopy onChecked={checkedAll} onClose={onClose} styles={{marginTop:'30px'}} onSave={() => onSave(check_all,name_acc, anticapcha, proxy_ip, proxy_log, proxy_pass, select_option_city, accounts, id_acc, id_check, dispatch,onClose) }>
        {
          accounts.map((item,key) => {
            return <ItemDisplayComponent 
              check_all={check_all}
              checked={item.id === key ? true : false} 
              key={key} 
              name={`${item.main_settings.name}`} 
              id={key} 
              onClick={(id) => { 
              let lock = false;
              if( id_check.length == 0 ) {
                id_check.push(id)
                setIdCheck(id_check) 
              } else {
          
                id_check.map(item => {
                  if (item == id) {
                    lock = true
                  } 
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
        }
      </AccountSettingsCopy>
    </div>
  );
}
