import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import { Link } from 'react-router-dom';

import IconReaded from '../IconReaded';
import Avatar from '../Avatar';

const getMessageTime = createdAt => {
  if (isToday(createdAt)) {
    return format(createdAt, 'HH:mm');
  } else {
    return format(createdAt, 'DD.MM.YYYY');
  }
};

const renderLastMessage = (message, userId) => {
  let text = '';
  if (!message.text && message.attachments.length) {
    text = 'прикрепленный файл';
  } else {
    text = message.text;
  }

  return `${message.user.id === userId ? 'Вы: ' : ''}${text}`;
};

const DialogItem = ({
  id,
  undread,
  created_at,
  text,
  isMe,
  currentDialogId,
  partner,
  lastMessage,
  userId,
}) => (
  // <Link to={`/dialog/${id}`}>
    <div
      className={classNames('dialogs__item', {
        'dialogs__item--online': partner.isOnline,
        'dialogs__item--selected': currentDialogId === id,
      })}>
      <div className="dialogs__item-avatar">
        <Avatar user={partner} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{partner.fullname}</b>
          <span>{getMessageTime(lastMessage.createdAt)}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{renderLastMessage(lastMessage, userId)}</p>
          {isMe && <IconReaded isMe={isMe} isReaded={lastMessage.readed} />}
          {lastMessage.undread > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {lastMessage.undread > 9 ? '+9' : lastMessage.undread}
            </div>
          )}
        </div>
      </div>
    </div>
  // </Link>
);

export default DialogItem;
