import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainTitle from '../../MainTitle';
import CountInput from '../../CountInput';
import TitleComponent from '../../TitleComponent';
import AccountSettingsCopy from '../../AccountSettingsCopy';
import TextArea from '../../TextArea';
import RadialBtnsComponent from '../../RadialBtnsComponent';
import { appPutAccountsVK } from '../../../../redux/actions/api_vk';
import { 
  manual_settings_count,
  manual_settings_filter
} from '../../../../redux/actions/manual_settings';

import { manual_settings } from '../../../../redux/selectors';

import './style.css';
async function onSave( count,suggestFriendsFilterType, accounts, id_acc, task_id, dispatch, onClose ) {

  let setings_response = accounts;
 
  setings_response[id_acc].task_settings.tasks[task_id-1].count = count;
  setings_response[id_acc].task_settings.tasks[task_id-1].suggestFriendsFilterType = suggestFriendsFilterType;

  dispatch(appPutAccountsVK(setings_response));
  onClose(false);

}

export default function ManualSortFriendsSettingsPage (props) {
 
  const { accounts, id_acc, onClose, task_id,titleTask } = props; 

  const dispatch = useDispatch(); 

  const count = useSelector(manual_settings.count);
  const suggestFriendsFilterType = useSelector(manual_settings.suggestFriendsFilterType);
  const friends = useSelector(manual_settings.friends);

  const [text_friends, setFriends] = useState('')

  const account = accounts[id_acc];

  useEffect(() => {
    if(friends.length !== 0 && Array.isArray(friends)) {
      let arrTemp = [];
      let string = '';
      arrTemp = friends.map((item) => (`id: ${item.userId} Ф.И.О: ${item.firstName} ${item.lastName}`))
      string = arrTemp.join('\n');
      setFriends(string)
    }
  },[friends])

  return (
    <div className="shedule_settings_page_wrapper" >
      <MainTitle title_acc={titleTask} text="Настройка задания:" />
      <MainTitle title_acc={`${account.main_settings.name}`} text="Аккаунт:" />
      <CountInput count={count} setCount={(counts) => {dispatch(manual_settings_count(counts))}} title="Вывести необходимое кол-во возможных друзей:"/>
      <TitleComponent title="Настройка фильтра" />
      <RadialBtnsComponent 
        title={[
          "Пользователи, с которыми много общих друзей",
          "Пользователи, импортированные из контактов",
          "Пользователи, которые импортировали те же контакты, что и вы"
        ]}
        Switching={type => { dispatch(manual_settings_filter(type)) }}
        checked={suggestFriendsFilterType}
      />
       <TitleComponent title={`В этом поле появятся ваши возможные друзья: ${Array.isArray(friends) ? friends.length : 0}`}  />
      <TextArea text={ text_friends } onChange={(e) => {}} />
      <AccountSettingsCopy 
        onClose={onClose} 
        styles={{ marginTop:'30px' }} 
        onSave={() => onSave( count, suggestFriendsFilterType, accounts, id_acc, task_id, dispatch, onClose ) }
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
