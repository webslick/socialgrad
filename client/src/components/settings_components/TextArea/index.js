import React, { useState } from 'react';
import './style.css';


export default function TextArea(props) {
  const { placeholder , disabled, onChange, text, styles } = props
  return (
    <div className="textarea_component_wrapper" >
       <textarea 
        style={{ 
          pointerEvents: disabled ? 'none' : 'all', 
          backgroundColor: disabled ? 'gray' : null, 
          color: disabled ? '#8e9093' : '#375c8b', 
          ...styles 
        }} 
        value={ text } 
        onChange={(e) => { onChange(e.target.value) }}  
        placeholder={ placeholder }  
        className="textarea_component_item" 
       />
    </div>
  );
}