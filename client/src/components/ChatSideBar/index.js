import React from 'react';
import { Button, Popover } from "antd";
import { UserAddOutlined, TeamOutlined  } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveDialog } from '../../redux/actions/dialogs'
import Avatar from '../Avatar';
import './style.css';  
import { nanoid } from 'nanoid'
export default function ChatSideBar(props) { 
  const { user_dialogs, onClick, hovered, setHovered } = props
  const dispatch = useDispatch(); 

    return (
      <div className='chatSideBarContainer'> 
        <div className='leftIconContact'><TeamOutlined /></div>
        <div className='textContact'>Список жильцов</div> 
        <Popover
          className="chat__dialog-header-action"
          title="Начать диолог с ..."
          placement="bottom"
          content={
            user_dialogs ?
            user_dialogs.map((item, key) => ( 
            <div key={key} onClick={() => onClick(key)} className='dialogs_chat_item'> 
              <div className='dialog_chat_item_avatar'>
                <Avatar user={{
                  id: `${nanoid(8)}`,
                  fullname: `${item.name} ${item.lastname}`,
                  isOnline: true,
                  avatar: item.avatar 
                }} />  
              </div>
              <div className='dialog_chat_item_fio'>{item.name}</div> 
              <div className='dialog_chat_item_fio'>{item.lastname}</div> 
            </div>
            )) :
            []
          }
          open={hovered}
          onOpenChange={setHovered}
          trigger="hover">
          <div>
          <Button type='prymari' shape="circle" size='medium' icon={<UserAddOutlined />} />
          </div>
        </Popover>  
      </div>
    );
} 