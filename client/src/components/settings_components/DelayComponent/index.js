import React, { useState } from 'react';
import images from '../../../assets/images';
import TextArea from '../TextArea';
import InputNumber from '../InputNumber';
import CheckComponent from '../CheckComponent';
import Button from '../../Button';
import './style.css';
import TitleComponent from '../TitleComponent';


export default function DelayComponent(props) {

  const { title , disabled, children } = props
  const [check,Switching] = useState(false);

  return (
    <div className="delay_wrapper" >
      <TitleComponent title="sddfsd" />
      <div className='delay_item_wrapper'>
        <InputNumber />
        <div style={{paddingLeft: '10px'}}>:</div>
        <InputNumber />
      </div>
    </div>
  );
}