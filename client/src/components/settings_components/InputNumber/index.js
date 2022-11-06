import React from 'react';
import './style.css';

export default function InputNumber(props) {

  const { styles, value, onChange } = props;

  return (
    <div style={styles} className='input_number_component_wrapper'>
      <input 
        type='number' 
        className='input_number_component_item' 
        onChange={(e) => { onChange(+e.target.value) }} 
        value={value} 
        min={0}
        max={100}
      />
    </div>
  );
}