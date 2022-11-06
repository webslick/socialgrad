import React, { useState } from 'react';
import TextArea from '../TextArea';
import './style.css';
import TitleComponent from '../TitleComponent';


export default function RandomizeComponentArea(props) {

  const { disabled, title, nobtn, onFormText, textAreaMessages } = props;
  let arr = []; 
  let temp = []; 

  const [text,setTextAreaValue] = useState('{Привет!|Здравствуйте!|Приветствую!}');
  return (
    <div className="randomize_component_area_wrapper" >
      <TitleComponent title={title} />
      <TextArea text={ disabled ? '' : text } onChange={(e) => { setTextAreaValue(e) }} disabled={disabled} />
      {
      !nobtn && (<div className="randomize_component_button_conntainer">
          <div onClick={() => {
            arr = text.split('|');
            arr[0] = arr[0].substring(1);
            arr[arr.length - 1] = arr[arr.length - 1].slice(0, -1)
            temp.push(...textAreaMessages)
            arr.map((item,id) => { temp.push({ id, text: item, check: true }); return false })
            temp.map((item,id) => { item.id = id; return false })
            onFormText([...temp]);
          }} className="signinBtn">
            <div className="signinBtntext">Сформировать</div>
          </div>
        </div>)
      }
    </div>
  );
}