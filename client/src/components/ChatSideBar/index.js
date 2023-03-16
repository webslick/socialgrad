import React from 'react';
import { Button, Popover } from "antd";
import { UserAddOutlined, TeamOutlined  } from '@ant-design/icons';
import './style.css';  
export default function ChatSideBar(props) { 
  const { dialogs } = props
    return (
      <div className='chatSideBarContainer'> 
        <div className='leftIconContact'><TeamOutlined /></div>
        <div className='textContact'>Список жильцов</div> 
        <Popover
          className="chat__dialog-header-action"
          title="Начать диолог с ..."
          placement="bottom"
          content={
            dialogs.map((item) => (<div>{item}</div>))
          }
          trigger="click">
          <div>
          <Button type='prymari' shape="circle" size='medium' icon={<UserAddOutlined />} />
          </div>
        </Popover>  
      </div>
    );
} 