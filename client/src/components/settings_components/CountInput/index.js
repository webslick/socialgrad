import React from 'react';
import InputNumber from '../InputNumber';
import TitleComponent from '../TitleComponent';
import './style.css';

export default function CountInput(props) {

  const { title , count, setCount } = props;

  return (
    <div className="count_input_wrapper" >
      <TitleComponent title={title} />
      <InputNumber value={count} onChange={setCount} />
    </div>
  );
}