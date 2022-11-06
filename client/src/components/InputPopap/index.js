import React, { useState } from 'react'; 
import './style.css';

export default function InputPopap (props) {
 
  const [visible_pass, setVisiblePass] = useState(false); 

  const { lable, eye, placeholder, onChange, input_value } = props;  
  return (
    <div className={`${eye ? "custom-password-control" : ""} form-group`}>
      {lable && <label htmlFor="login">{lable}<sup style={{color: 'red'}}>*</sup></label>}
      <input value={input_value} onChange={({target: { value }}) => {onChange(value)}} type={`${(!visible_pass && eye) ? 'password': 'text'}`} name="username" className="form-control form-control-lg" placeholder={placeholder} />
      {eye && <i className={`icon-show-password ${visible_pass ? 'op5' : ''}`} onClick={() => {setVisiblePass(!visible_pass)}}></i>}
      <div className="invalid-feedback" /> 
    </div>  
  );
}