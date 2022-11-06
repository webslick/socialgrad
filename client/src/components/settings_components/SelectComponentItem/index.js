import React, { useState } from 'react';
import images from '../../../assets/images';
import TextArea from '../TextArea';
import Input from '../Input';
import CheckComponent from '../CheckComponent';
import Button from '../../Button';
import './style.css';


export default function SelectComponentItem(props) {

  const { title , disabled, children } = props
  const [check,Switching] = useState(false);
  const taskArr = [
    "Выбрать задание из списка",
    "Расписание",
    "Автоответчик на подтвержденные заявки в друзья",
    "Автосекретарь",
    "Лайкинг и просмотр Stories друзей",
    "Автоответчик на входящие заявки в друзья",
    "Работа по целевой аудитории из списка",
    "Работа по возможным друзьям",
    "Ручная сортировка возможных друзей",
    // "Работа по целевой аудитории из списка",
    "Публикация историй",
    "Поиск целевой аудитории (парсер)",
    "Отправка сообщений в сообщества из списка",
  ]
  return (
    <div className="select_component_item_wrapper" >
      <div className='select_component_left_part'>
        <CheckComponent />
        <div className='select_number_item'>1</div>
        <div className='select_component_task_wrapper'>
          <select className='select_component_task'>
            {
              taskArr.map((item,i) => (
                <option key={i}>{item}</option>
              ))
            }
          </select>
        </div>
      </div>
      <div className='select_component_rigth_part'>
        <Button icon={images.del} />
      </div>
    </div>
  );
}