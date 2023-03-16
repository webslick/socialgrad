import React from 'react';
import './style.css';

function OrangeButton(props) {
    const { text, width, height, color, onClick, margin, disabled} = props;
    return (
      <div 
        style={{ 
          width: width === undefined ? '150px': width,
          height: height === undefined ? '40px' : height,
          margin: margin === undefined ? '0px' : margin,
          background:`linear-gradient(0deg, ${color === undefined ? 'rgb(94 156 236)': color} 0%, ${color === undefined ? 'rgb(58 112 244)': color} 100%)` 
        }} 

        className="wrapperOrangeButton"
        onClick={(onClick === undefined) || (disabled === true) ? () => {} : () => onClick()}
      >
        <div className="textOrangeButton">{ text }</div>
      </div>
    );
}

export default OrangeButton;
