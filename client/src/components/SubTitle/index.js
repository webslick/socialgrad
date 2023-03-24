import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { app } from '../../redux/selectors/index';
import { Skeleton } from 'antd';
import './style.css';

function SubTitle(props) {
 
    const { subtitle, work_data } = props; 

    return (
      <div className='subTitlePriceContainer'>
        {
          work_data ? subtitle : <div style={{ width: '60%' }}><Skeleton.Button style={{ width: '100%' }} active block/></div> 
        }
      </div>
    );
}

export default SubTitle;
