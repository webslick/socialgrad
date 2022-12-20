import React from 'react';
import './style.css'; 

export default function ChatMenuGroup(props) {
    const { itemMenu, onClick, activeItem } = props;
    return (
      <div className='chatMenuGroupContainer'> 
        {
          itemMenu.map((item,key) => (
            <div key={key} className='itemMenu' onClick={() => onClick(key)}>
              <div className='textItem'>{item}</div>
              <div className={activeItem === key ? `activeItem` : ``}/>
            </div>
          ))
        } 
      </div>
    );
} 