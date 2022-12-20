import React from 'react'; 
import classNames from 'classnames';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';

import './Status.scss';

const Status = ({ online, fullname }) => (
  <div className="chat__dialog-header">
    <div className="chat__dialog-header-center">
      <b className="chat__dialog-header-username textName">{fullname}</b>
      <div className="chat__dialog-header-status">
        <span className={classNames('status', { 'status--online': online })}>
          {online ? 'онлайн' : 'офлайн'}
        </span>
      </div>
    </div>
    {/* <Popover
      className="chat__dialog-header-action"
      content={
        <div>
          <Button>Закрыть диолог</Button>
        </div>
      }
      trigger="click">
      <div>
        <Button type="link" shape="circle" icon={<CloseOutlined />} />
      </div>
    </Popover> */}
  </div>
);
 
export default Status;
