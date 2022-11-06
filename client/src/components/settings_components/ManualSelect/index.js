import React, { useState } from 'react';
import images from '../../../assets/images';
import TextArea from '../TextArea';
import InputNumber from '../InputNumber';
import CheckComponent from '../CheckComponent';
import Button from '../../Button';
import './style.css';
import TitleComponent from '../TitleComponent';


export default function ManualSelect(props) {

  const { title , disabled, children, styles, optionsState, onClick } = props;
  return (
    <div className="manual_select_wrapper" >
      <TitleComponent title={title} />
      <div className='manual_select_component_task_wrapper'>
        <select onChange={(e) => { onClick(e.target.value) }} value={optionsState} style={styles} className='manual_select_component_task'>
          {
            children
          }
        </select>
      </div>
    </div>
  );
}