import React from 'react';
import './style.css';

function Circle(props) {
    const {
      count,
      margin,
      mobile
    } = props;
    return (
      <div styles={`${mobile ? {} : {marginTop: `${margin}px` ,marginRight: `${margin}px`}}`} className={`${mobile ? 'mobileCirclewrapper' : 'circlewrapper'}`}>
       <div className='circlecount'>{count}</div>
      </div>
    );
}

export default Circle;
