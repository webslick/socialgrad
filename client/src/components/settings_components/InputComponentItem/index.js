import React, { useState } from 'react';
import images from '../../../assets/images';
import TextArea from '../TextArea';
import Input from '../Input';
import CheckComponent from '../CheckComponent';
import Button from '../../Button';
import './style.css';


export default function InputComponentItem(props) {

  const { title , disabled, children } = props
  const [check,Switching] = useState(false);

  return (
    <div className="input_component_item_wrapper" >
      <CheckComponent />
      <Input />
      <Button icon={images.del} />
    </div>
  );
}