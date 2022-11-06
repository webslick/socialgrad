import React from 'react';
import './style.css';

function Title(props) {
    const { title } = props;
    return (
      <div className='titlePriceContainer'>{title}</div>
    );
}

export default Title;
