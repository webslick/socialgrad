import React from 'react';
import './style.css';

function Button(props) {
    const {
      icon,
      onClick,
      alt,
      id,
      disabled
    } = props;
    return (
      <div style={{ pointerEvents: disabled ? 'none' : 'all', backgroundColor: disabled ? '#c7c7c7' : null }} className='btnwrapper'>
        <img id={id} className='settingBtn' onClick={(e) => { onClick(e); e.preventDefault(); }} src={icon} alt={alt} />
      </div>
    );
}

export default Button;
