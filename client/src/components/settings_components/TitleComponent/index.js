import React from 'react';
import './style.css';

export default function TitleComponent(props) {

  const { title , disabled, styles, center } = props;

  return (
    <div 
      style={{ 
        pointerEvents: disabled ? 'all' : 'none', 
        color: disabled ? 'gray' : null, ...styles
      }} 
      className={`title_component_wrapper ${center ? 'title_center' : ''}`} 
    >
        <div className='title_component_text'>
          {
            title
          }
        </div>
    </div>
  );
}