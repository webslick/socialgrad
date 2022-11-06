import React from 'react';
import './style.css';

function RegistrationButton(props) {
    const { text, width, height, color, onClick, margin} = props;
    return (
      <div 
        style={{ 
          width: width === undefined ? '180px': width,
          height: height === undefined ? '35px' : height,
          marginLeft: margin === undefined ? '0px' : margin,
          backgroundColor: color 
        }} 

        className="wrapperRegistrationButton"
        onClick={onClick === undefined ? () => {} : () => onClick()}
      >
        <div className="textRegistrationButton">{ text }</div>
      </div>
    );
}

export default RegistrationButton;
