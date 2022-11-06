import React from 'react';
import './style.css';

function SubTitle(props) {
    const { subtitle } = props;
    return (
      <div className='subTitlePriceContainer'>{subtitle}</div>
    );
}

export default SubTitle;
