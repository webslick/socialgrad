import React,{ useState } from 'react'; 
import Button from '../Button_';
import { HashLink as Link } from 'react-router-hash-link'; 
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { InputNumber } from 'antd';  
import './style.css'

export default function InputCardProducts(props) {

  const { number } = props;
  const dispatch = useDispatch();

  const [value, setValue] = useState(number);


  return (
    <div className="inputCardProductWrapper">
      <div className='currentButtonAddContainer'>
        <Button className='colorLightGreen' type="primary" icon={<PlusOutlined />} />
      </div>
      <div className='inputNumberContainer'>
        <InputNumber controls={false} style={{ width: '50px' }} min={number} max={1000} value={value} onChange={setValue} />
      </div>
      <div className='currentButtonRemoveContainer'>
        <Button className='colorLightGreen' type="primary" icon={<MinusOutlined />} />
      </div> 
    </div>
  ); 
}
 