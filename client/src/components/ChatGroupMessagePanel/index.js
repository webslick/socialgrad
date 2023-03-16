import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';
import ChatMenuGroup from '../ChatMenuGroup';
import ChatSideBar from '../ChatSideBar';
import Dialogs from '../Dialogs';
import { getDialogsAll } from '../../redux/actions/dialogs'
import './style.css'; 

function ChatGroupMessagePanel(props) { 
  const { Search } = Input;
  const [activeItem, setActiveItem] = useState(0);
  const [rooms, setItemRooms] = useState([{id:'1', title: 'Все'}, {id:'2', title: 'Общая'}]);
  // const [serchDialogValue, onSearch] = useState('');
  const dispatch = useDispatch();  

  useEffect(() => {    
    // dispatch(getDialogsAll(1)); 
  },[]);
 
    return (
      <div className='chatGroupMessagePanelContainer'> 
        <ChatSideBar dialogs={[1,1,1,1,321,12,213,213]} onClick={(active) => {
          setActiveItem(active)
        }} /> 
        <div className='searchChatContainer'>
          <Search placeholder="поиск диалогов" allowClear onSearch={(value) => console.log(value)} style={{ width: 280 }} /> 
        </div>
        <div className='searchChatMenu'>
          <ChatMenuGroup activeItem={activeItem} itemMenu={['Все','Общая','Обьявления','Доска позора']} onClick={(active) => {
            setActiveItem(active)
          }} /> 
        </div>
        <div className='dialogsContainer'>
          <Dialogs items={[
            {
            _id: '24',
            author: {_id: '1117437'}, 
            undread: true,
            created_at: new Date(),
            text:'fssfs',
            isMe: false,
            currentDialogId: '1',
            partner:{ fullname: 'Генрих', isOnline: true, avatar: "https://source.unsplash.com/100x100/?random=1&nature,water" },
            lastMessage: {
              user: {
                _id: '198712634'
              },
              createdAt: new Date(),
              undread: 0,
              readed: true,
              attachments: [{
                filename: 'logo',
                url:'https://source.unsplash.com/100x100/?random=1&nature,water'
              }]
            },
            userId: '1061374120',
            }]}
            userId={'165234'} 
            onSearch={e => console.log(e)} 
            inputValue={'1'} 
            currentDialogId={'1'}
          />
        </div>
      </div>
    );
}

export default ChatGroupMessagePanel;
