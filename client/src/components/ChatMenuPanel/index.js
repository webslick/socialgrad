import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import { CommentOutlined, HistoryOutlined, MenuUnfoldOutlined, MenuFoldOutlined, HeartOutlined, WalletOutlined, UploadOutlined, PartitionOutlined, ToolOutlined } from '@ant-design/icons';
import images from '../../assets/images';
import './style.css';    
 
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('СООБЩЕНИЯ', '1', <CommentOutlined />),
  getItem('ИСТОРИЯ', '2', <HistoryOutlined />),
  getItem('ИЗБРАННОЕ', '3', <HeartOutlined />),
  getItem('КОШЕЛЕК', 'sub1', <WalletOutlined />, [
    getItem('РУБЛИ', '4'),
    getItem('ДОЛЛАРЫ', '5'),
    getItem('ЕВРО', '6'), 
  ]),
  getItem('ЗАГРУЗИТЬ', 'sub2', <UploadOutlined />, [
    getItem('ФОТО', '7'),
    getItem('ВИДЕО', '8'),
    getItem('ФАИЛ', 'sub3', null, [getItem('ТЕКСТ', '9'), getItem('КАРТИНКА', '10')]),
  ]),
  getItem('СЕТЬ', '11', <PartitionOutlined />),
  getItem('НАСТРОЙКИ', '12', <ToolOutlined />)
];

const { logo } = images;

export default function ChatMenuPanel(props) { 

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  
    return (
      <div className='chatMenuPanelContainer'>  
        <div className='logoChatContainer'>
          <img className='logochat' src={logo} alt="logochat" />
          <span className='logo'>ПФДС</span>
        </div>
        <Button
          type="primary"
          block={true}
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={[]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
      </div>
    );
}
 
