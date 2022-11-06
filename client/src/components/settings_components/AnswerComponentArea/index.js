import React from 'react';
import images from '../../../assets/images';
import TextArea from '../TextArea';
import CheckComponent from '../CheckComponent';
import Button from '../../Button';
import './style.css';

export default function AnswerComponentArea(props) {

  const { value, styles, addingMessages, id, onChangeArea, onClick, onCheckArea } = props

  return (
    <div className="answer_component_area_wrapper" >
      <div className='answer_component_left_part'>
        <CheckComponent 
          check_item={[{ id, title: "", check: addingMessages.text_areas[id].check }]} 
          Switching={(e) => {
            let checked = addingMessages.text_areas;
            let ids = e[0].id
            checked[ids].check = e[0].check;
            onCheckArea([...checked]);
          }} 
        />
        <TextArea 
          onChange={ value => {
            let chars = addingMessages.text_areas;
            chars[id].text = value;
            onChangeArea([...chars]);
          }} 
          text={value} 
          styles={styles} 
        />
      </div>
      <div className='answer_component_right_part'>
       <Button onClick={() => onClick(id) } icon={images.del} />
      </div>
    </div>
  );
}