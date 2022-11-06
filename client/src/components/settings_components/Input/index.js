import React,{ useState } from 'react';
import './style.css';


export default function Input(props) {

  const { placeholder , disabled, styles, changeInput, input_value  } = props
  // const [input_value,setInputvalue] = useState('');
  return (
    <div style={styles} className='input_component_wrapper'>
      <input style={{ pointerEvents: disabled ? 'none' : 'all', backgroundColor: disabled ? '#afafaf' : null }} className='input_component_item' onChange={({
        target: {
          value
        }
      }) => { changeInput(value) }} name="nameCard" placeholder={placeholder} value={input_value} />
    </div>
  );
}