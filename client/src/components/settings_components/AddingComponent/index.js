import React, { useEffect } from 'react';
import images from '../../../assets/images';
import CheckComponent from '../../settings_components/CheckComponent';
import Button from '../../Button';
import AnswerComponentArea from '../AnswerComponentArea';
import './style.css';

export default function AddingComponent(props) {
  const {
    addingMessages,
    setAddingMessages,
    dispatch
  } = props;
 
  useEffect(() => {
    addingMessages.on.check ? 
    dispatch(setAddingMessages({ on: addingMessages.on, random: { ...addingMessages.random, disabled: false }, text_areas: addingMessages.text_areas })) :
    dispatch(setAddingMessages({ on: addingMessages.on, random:{ ...addingMessages.random, disabled: true }, text_areas: addingMessages.text_areas }))
  },[addingMessages.on.check])

  // const [check_item_photo_arr, ChangeItemPhotoArr] = useState([
  //   { title: "Включить", disabled: false, check: false },
  //   { title: "Случайный порядок", disabled: false, check: false },
  //   { title: "Имя пользователя", disabled: false, check: false }
  // ]);

  // const [check_item_audio_arr, ChangeItemAudioArr] = useState([
  //   { title: "Включить", disabled: false, check: false },
  //   { title: "Случайный порядок", disabled: false, check: false },
  //   { title: "Имя пользователя", disabled: false, check: false }
  // ]);

  // addingMessages.on.disabled = check_item_text_arr[0].check ? false : true

  return (
    <div className="adding_component_wrapper">
      <div className='adding_top_part'>
        <div className='adding_component_left_part'>
          <CheckComponent 
            check_item={[addingMessages.on,addingMessages.random]} 
            Switching={(check) => { dispatch(setAddingMessages({ on: check[0], random: check[1], text_areas: addingMessages.text_areas })) }} 
          />
        </div> 
        <div className='adding_component_rigth_part'>
          <Button disabled={!addingMessages.on.check} icon={images.add} onClick={() => {
            let checks = [];
            checks.push(...addingMessages.text_areas,{ id: addingMessages.text_areas.length, text: "" , check: true })
            checks.map((item, key) => { item.id = key; return false;})
            dispatch(setAddingMessages({ on: addingMessages.on, random: addingMessages.random, text_areas: checks }))
          }} alt='adding' />
        </div>
      </div>
      <div className='adding_bottom_part'>
        {
         !addingMessages.on.check ? [] : addingMessages.text_areas.map(item => (
            <AnswerComponentArea 
              key={item.id}
              value={item.text}
              id={item.id} 
              addingMessages={addingMessages} 
              styles={{ height: '140px',marginBottom: '20px' }}
              onChangeArea={
                (arr) => {
                  dispatch(setAddingMessages({ 
                    on: addingMessages.on, 
                    random: addingMessages.random, 
                    text_areas: arr
                  })) 
                }
              }
              onCheckArea={(check) => { 
                dispatch(setAddingMessages({ 
                  on: addingMessages.on, 
                  random: addingMessages.random, 
                  text_areas: check
                })) 
              }} 
              onClick={(e) => { 
                let arr = addingMessages.text_areas;
                arr = arr.filter(item => { return (item.id !== e)});
                arr.map((item, key) => { item.id = key; return false;})
                dispatch(setAddingMessages({ 
                  on: addingMessages.on, 
                  random: addingMessages.random, 
                  text_areas: [...arr]
                })) 
              }}
            />
          ))
        }
      </div>
    </div>
  );
}