import React from 'react';
import './style.css'; 

export default function ChatMenuGroup(props) {
    const { onClick, activeItem, rooms } = props;  
    return (
      <div className='chatMenuGroupContainer'> 
        <div className='roomTitle'>Комнаты</div>
        <div className='chatRooms'> 
          {
            rooms.map((item,key) => ( 
              <div key={key} className='itemMenu' onClick={(e) => onClick(e.target.id)}>
                <div id={item.roomId} className='textItem'>{item.roomName}</div>
                <div className={activeItem === item.roomId ? `activeItem` : ``}/>
              </div>
            ))
          } 
        </div> 
      </div>
    );
} 