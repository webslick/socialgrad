import React, { useState, useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, { EllipsisOutlined } from '@ant-design/icons'; 
import { Popover, Button } from 'antd'; 

import { convertCurrentTime, isAudio } from '../../utils/helpers';
import images from '../../assets/images'; 
import { nanoid } from 'nanoid';
import Time from '../Time';
import IconReaded from '../IconReaded';
import Avatar from '../Avatar';
import { useSpeechSynthesis } from 'react-speech-kit';
import './Message.scss';

const { waveSvg, playSvg, pauseSvg } = images;

const MessageAudio = ({ audioSrc }) => {
  const audioElem = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
 
  const togglePlay = () => {
    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  useEffect(() => {
    audioElem.current.volume = '0.01';
    audioElem.current.addEventListener(
      'playing',
      () => {
        setIsPlaying(true);
      },
      false,
    );
    audioElem.current.addEventListener(
      'ended',
      () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      },
      false,
    );
    audioElem.current.addEventListener(
      'pause',
      () => {
        setIsPlaying(false);
      },
      false,
    );
    audioElem.current.addEventListener('timeupdate', () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0;
      setCurrentTime(audioElem.current.currentTime);
      setProgress((audioElem.current.currentTime / duration) * 100);
    });
  }, []);

  return (
    <div className="message__audio">
      <audio ref={audioElem} src={audioSrc} preload="auto" />
      <div className="message__audio-progress" style={{ width: progress + '%' }} />
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
            {isPlaying ? (
              <img src={pauseSvg} alt="Pause svg" />
            ) : (
              <img src={playSvg} alt="Play svg" />
            )}
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="Wave svg" />
        </div>
        <span className="message__audio-duration">{convertCurrentTime(currentTime)}</span>
      </div>
    </div>
  );
};

const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  readed,
  attachments,
  isTyping,
  onRemoveMessage,
  setPreviewImage,
  roomId
}) => {
   
  const [showCancelSpeakBtn, toogCancelSpeakBtn] = useState(false);

  function test(e) {
    toogCancelSpeakBtn('!!!')
    console.log(e)
  }

  const { speak, cancel } = useSpeechSynthesis({
    onEnd: () => { 
      test(showCancelSpeakBtn); 
    },
  });
 

  const renderAttachment = item => {
    if (item.ext !== 'webm') {
      return (
        <div
          key={item.id+nanoid(5)}
          onClick={() => setPreviewImage(item.url)}
          className="message__attachments-item">
          <div className="message__attachments-item-overlay">
            <Icon type="eye" style={{ color: 'white', fontSize: 18 }} />
          </div>

          <img src={item.url} alt={item.filename} />
        </div>
      );
    } else {
      return <MessageAudio key={item.id+nanoid(5)} audioSrc={item.url} />;
    }
  };

  console.log(showCancelSpeakBtn)
  
  return (
    <div 
      className={classNames('message', {
        'message--isme': isMe,
        'message--nome': !isMe,
        'message--is-typing': isTyping,
        'message--is-audio': isAudio(attachments),
        'message--image': !isAudio(attachments) && attachments && attachments.length === 1 && !text,
      })}>
      <div className="message__content">
    
        <Popover
          content={
            <div>
              <div className='popoverBtnContainer'>
                {
                  showCancelSpeakBtn ? <Button block danger onClick={() => { cancel();toogCancelSpeakBtn(true); }}>Остановить озвучку</Button> : <Button block onClick={() => { speak({ text }); toogCancelSpeakBtn(!showCancelSpeakBtn);}}>Озвучить сообщение</Button>
                } 
              </div>
              <div className='popoverBtnContainer'>
                <Button block danger onClick={onRemoveMessage}>Удалить сообщение</Button>
              </div> 
            </div>
          }
          trigger="click">
          <div className="message__icon-actions">
            <Button type="prymari" shape="circle" size="small" icon={<EllipsisOutlined />} />
          </div>
        </Popover>

        <div className="message__avatar">
          <Avatar user={user} roomId={roomId} />
        </div>
        <div className="message__info">
          {(text || isTyping) && (
            <div className="message__bubble">
              {!isTyping && ( <IconReaded isMe={isMe} isReaded={readed} /> )}
              
              {text && (
                <p className="message__text">
                  {text}
                </p>
              )}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {false && <MessageAudio audioSrc={null} />}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map(item => renderAttachment(item))}
            </div>
          )}

          {date && (
            <span className="message__date">
              <Time date={date} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// Message.defaultProps = {
//   user: {},
// };

// Message.propTypes = {
//   avatar: PropTypes.string,
//   text: PropTypes.string,
//   date: PropTypes.string,
//   user: PropTypes.object,
//   attachments: PropTypes.array,
//   isMe: PropTypes.bool,
//   isReaded: PropTypes.bool,
//   isTyping: PropTypes.bool,
//   audio: PropTypes.string,
// };

export default Message;
