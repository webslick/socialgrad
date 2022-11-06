import React from 'react';
import TitleComponent from '../TitleComponent'
import './style.css';

export default function RadialBtnsComponent(props) {

  const { title , disabled, Switching , checked} = props;

  return (
    <div className="radial_buttons_component_wrapper">
      {
        title.map((item,i) => ( 
          <div key={i} style={{ pointerEvents: disabled ? 'none' : 'all' }}  className="radial_component_wrapper" >
            <div  
              style={disabled === i ? { backgroundColor: disabled ? '#ddddddcc' : '' } : {}} 
              onClick={() => {
                Switching(i); 
              }} 
              className='radial_component_item'
            >
              { checked === i ? <div className='radial_check' /> : false  }
            </div>
            <div className='radial_text_component'>
              <TitleComponent title={item} />
            </div>
          </div>
        ))
      }
    </div>
  );
}