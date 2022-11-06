import React from 'react';
import images from '../../../assets/images';
import TitleComponent from '../TitleComponent';
import './style.css';

export default function CheckComponent(props) {

  const { check_item, Switching } = props;
  return (
    <div className='check_item_wrapper'>
      {      
        check_item?.map((item,key) => (
          <div key={key} style={{ pointerEvents: item.disabled ? 'none' : 'all' }}  className="check_component_wrapper" >
            <div 
              style={{ backgroundColor: item.disabled ? '#ddddddcc' : '' }} 
              onClick={() => {
                let arr = check_item;
                arr[key].check = !check_item[key].check
                Switching([
                  ...arr
                ]);
              }} 
              className='check_component_item'
            >
              { check_item[key].check ? <img src={images.check} alt="check" /> : false}
            </div>
            <TitleComponent disabled={item.disabled} title={item.title}/>
          </div>
        ))
      }
    </div>
  );
}