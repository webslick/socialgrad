import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SheduleSettingsPage from '../task_settings_pages/SheduleSettingsPage';
import AnswerSettingsPage from '../task_settings_pages/AnswerSettingsPage';
import AutoSecretarySettingsPage from '../task_settings_pages/AutoSecretarySettingsPage';
import LikingLookingSettingsPage from '../task_settings_pages/LikingLookingSettingsPage';
import AnswerInFriendsSettingsPage from '../task_settings_pages/AnswerInFriendsSettingsPage';
import SendMessageListSettingsPage from '../task_settings_pages/SendMessageListSettingsPage';
import PossibleFriendsSettingsPage from '../task_settings_pages/PossibleFriendsSettingsPage';
import TargetGroupLIstSettingsPage from '../task_settings_pages/TargetGroupLIstSettingsPage';
import PublicHistorySettingsPage from '../task_settings_pages/PublicHistorySettingsPage';
import ParsingSettingsPage from '../task_settings_pages/ParsingSettingsPage';
import SendMessageGroupListSettingsPage from '../task_settings_pages/SendMessageGroupListSettingsPage';
import ManualSortFriendsSettingsPage from '../task_settings_pages/ManualSortFriendsSettingsPage';

import './style.css';

export default function TaskSettingsComponent (props) {

  const { accounts, id_acc, onClose } = props;
  // useInvalidUrlAccess();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const account = accounts[id_acc];
  const task_id = account.task_settings.task_value;
  const taskSettingPage = [];
  let titleTask = [
    "Выбрать задание из списка",
    "Автоответчик на подтвержденные заявки в друзья",
    "Лайкинг друзей",
    "Автоответчик на входящие заявки в друзья",
    "Работа по целевой аудитории из списка",
    "Работа по возможным друзьям",
    "Ручная сортировка возможных друзей",
    // "Работа по целевой аудитории из списка",
    "Отправка сообщений в сообщества из списка",
  ]
 
  switch (task_id) {
    case 0:
      break;
      case 1: 
      taskSettingPage.push(<AnswerSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id} onClose={onClose} />)  
      break;
    case 2:
      taskSettingPage.push(<LikingLookingSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id}  onClose={onClose} />) 
      break;
    case 3:
      taskSettingPage.push(<AnswerInFriendsSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id}  onClose={onClose} />) 
      break;
    case 4:
      taskSettingPage.push(<SendMessageListSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id}  onClose={onClose} />) 
      break;
    case 5:
      taskSettingPage.push(<PossibleFriendsSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id}  onClose={onClose} />)  
      break;
    case 6:
      taskSettingPage.push(<ManualSortFriendsSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id} onClose={onClose} />)  
      break;
    case 7:
      taskSettingPage.push(<SendMessageGroupListSettingsPage titleTask={titleTask[task_id]} accounts={accounts} id_acc={id_acc} task_id={task_id} key={task_id}  onClose={onClose} />)  
      break; 
    default:
      break;
  }
  return (
    <div className="task_settings_component_wrapper" >
      {
        taskSettingPage.map((item) => (item))
      }
    </div>
  );
}
