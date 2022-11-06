import React, { useEffect, useState } from 'react';
import InputNumber from '../InputNumber';
import CheckComponent from '../CheckComponent';
import TitleComponent from '../TitleComponent';
import './style.css';

export default function TimeSetComponent(props) {

  const { title , onChange, delay } = props;

  const [check_item,Switching] = useState([{ title: "", disabled: false, check: false }]);
 
  useEffect(()=>{
    if(delay.from > delay.to) { onChange({ to: delay.to, from: delay.to, delay: delay.delay,check: delay.check })}
  },[delay])

  return (
    <div className="time_set_wrapper" >
      <TitleComponent title={title} />
      <div className='time_set_container'>
        <CheckComponent 
          check_item={check_item} 
          Switching={(check) => { 
            Switching(check)
            onChange({ to: delay.to, from: delay.from, delay: delay.delay,check: check[0].check });
          }} 
        />
        {
          delay.check && (<div className='time_set_input_wrapper'>
          <InputNumber value={delay.from} onChange={(from) => { onChange({ to: delay.to, from, delay: delay.delay,check: delay.check })}} styles={{ width: '80px' }} />
          <div style={{paddingLeft: '10px'}}>:</div>
          <InputNumber value={delay.to} onChange={(to) => { onChange({ to, from: delay.from, delay: delay.delay,check: delay.check })}} styles={{ width: '80px' }} />
          </div>)
        }
      </div>
    </div>
  );
}