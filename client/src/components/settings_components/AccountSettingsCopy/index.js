import React, { useState } from 'react';
import images from '../../../assets/images';
import Button from '../../Button';
import TitleComponent from '../TitleComponent';

import './style.css';


export default function AccountSettingsCopy(props) {

  const { styles, children, onClose, onSave, onChecked } = props

  return (
    <div style={
      styles
    } className='account_settings_copy_container'>
      {/* <TitleComponent  styles={{marginBottom:'20px'}} title="Применить эти настройки к аккаунтам:" />
      <div className='account_settings_left_container'>
        <div className='account_settings_item_container'>
          {
            children
          }
        </div>
        <div className='account_settings_copy_btn_padding'>
          <Button onClick={()=>{ onChecked(true) }} icon={images.multicheck} />
          <Button onClick={()=>{ onChecked(false) }} icon={images.multiuncheck} />
        </div>
      </div> */}
      <div className='row_buttons_account_settings'>
        <div onClick={async () => { onSave(); }} className="signinBtn">
          <div className="signinBtntext">Сохранить</div>
        </div>
        <div onClick={() => { onClose(false); }} className="signinBtn">
          <div className="signinBtntext">Отмена</div>
        </div>
      </div>
    </div>
  );
}


