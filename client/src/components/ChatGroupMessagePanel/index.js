import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';
import ChatMenuGroup from '../ChatMenuGroup';
import ChatSideBar from '../ChatSideBar';
import Dialogs from '../Dialogs';
import { setActiveDialog, createDialog } from '../../redux/actions/dialogs' 
import { setActiveRoom, createRoom, deleteRoom } from '../../redux/actions/rooms'
import './style.css'; 
import { pages, users, loader, popup_login, app } from '../../redux/selectors'
import { socket } from '../../socket'; 
import { nanoid } from 'nanoid';

function ChatGroupMessagePanel(props) { 

  const { Search } = Input;
  const { user, room, dialog } = props;
 
  const [value, setValue] = useState('');
   
  const dispatch = useDispatch();  
 
    const user_dialogs = []
    const all_rooms = []
    let dialogs = [] 
 
    user.users_home.map((item) => { 
      user_dialogs.push({ id: item.id, name: item.name, lastname: item.lastname, avatar: item.avatar })
    })
 
    Object.keys(user).map((item) => {
      if(item === "join_rooms") {  
        dialogs = user.join_rooms  
      }
    })
    const [hovered, setHovered] = useState(false);
 
    return (
      <div className='chatGroupMessagePanelContainer'> 
        <ChatSideBar user_dialogs={user_dialogs} hovered={hovered} setHovered={setHovered} onClick={async (active) => {  
          dispatch(setActiveDialog(active))
          dispatch(setActiveRoom('private'))
          setHovered(false); 

          const roomId = nanoid(8);

          // const create_room = await createRoom({ 
          //   id: roomId, 
          //   typeName: "joint" 
          // }, dispatch);

          // if(create_room.status !== 200) {
          //   console.log(create_room.status, create_room.msg);
          // }
 
          // const create_dialog = await createDialog({
          //   userId: user.id, 
          //   roomId: roomId, 
          //   collaborator: user_dialogs[active].id,
          //   lastMessage: '',
          //   status: true
          // }, dispatch);
 
          // if(create_dialog.status !== 200) {
          //   const delete_room = await deleteRoom({ 
          //     roomId: roomId 
          //   }, dispatch);
          //   console.log(create_dialog.status, create_dialog.msg);
          // }

          // socket.emit("ROOMS:JOIN", { userId: user.id, roomId  }); 

        }} />  
        <div className='searchChatMenu'>
          <ChatMenuGroup activeItem={room} rooms={user.all_rooms} onClick={(active) => {  
            dispatch(setActiveRoom(active))
            // dispatch(setActiveDialog(null))
          }} /> 
        </div>
        <div className='searchChatContainer'>
          <Search value={value} placeholder="поиск диалогов" allowClear onSearch={(value) => setValue(value)} style={{ width: 280 }} /> 
        </div>
        <div className='chatMenuGroupContainer'> 
        <div className='roomTitle'>Личные Диалоги</div> 
      </div>
        <div className='dialogsContainer'>
          {/* <Dialogs items={
            // dialogs
            [
              // {
              //   id: '24',  // id: 2
              //   author: {id: '1117437'},      // userId: 2
              //   undread: 0,
              //   created_at: new Date(),
              //   text:'fssfs',
              //   isMe: false,
              //   currentDialogId: '1',
              //   partner:{ fullname: `${user_dialogs[0]?.name} ${user_dialogs[0]?.lastname}`, isOnline: true, avatar: user_dialogs?.avatar },  // collaborator: 3
              //   lastMessage: {
              //     user: {
              //       id: '198712634'
              //     },
              //     createdAt: new Date(),
              //     undread: 0,
              //     readed: false,
              //     attachments: []
              //     // attachments: [{
              //     //   filename: 'logo',
              //     //   url:'https://source.unsplash.com/100x100/?random=1&nature,water'
              //     // }]
              //   },
              //   userId: '1061374120',      // userId: 2
              // } 
            ]
          }
            userId={'165234'} 
            onSearch={e => console.log(e)} 
            inputValue={'1'} 
            currentDialogId={'1'}
          /> */}
        </div>
      </div>
    );
}

export default ChatGroupMessagePanel;
