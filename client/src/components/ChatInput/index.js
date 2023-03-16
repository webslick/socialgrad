import React, { Fragment } from "react"; 
import { Button, Input } from "antd"; 
import { FrownOutlined, SmileOutlined, AudioOutlined, SendOutlined,
CameraOutlined, CloseOutlined, SoundOutlined, NotificationOutlined } from '@ant-design/icons'; 

import { UploadField } from "@navjobs/upload";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import UploadFiles from "../UploadFiles";

import "./ChatInput.scss";

const { TextArea } = Input;

const ChatInput = props => {
  const {
    emojiPickerVisible,
    value,
    addEmoji,
    setValue,
    handleSendMessage,
    sendMessage,
    toggleEmojiPicker,
    attachments,
    onSelectFiles,
    isRecording,
    onRecord,
    onHideRecording,
    removeAttachment,
    isLoading,
    listening,
    listen,
    stop 
  } = props;
 
 
  return (
    <Fragment>
      <div className="chat-input">
        <div>
          <div className="chat-input__voismesages-btn">
            { 
              !isRecording && (<Button
                onClick={(e) => listening ? stop() : listen()}
                type={ listening ? "danger" : "prymari"}
                size="large"
                shape="circle" 
                icon={ listening ? <SoundOutlined /> : <NotificationOutlined />}
              />) 
            }
          </div>
          <div className="chat-input__smile-btn">
            <div className="chat-input__emoji-picker">
              {emojiPickerVisible && (
                   <Picker onEmojiSelect={emojiTag => addEmoji(emojiTag)}  data={data} locale="ru" theme="light" /> 
              )}
            </div>
            { 
             !isRecording && (<Button
                onClick={toggleEmojiPicker}
                danger={emojiPickerVisible}
                type="prymari"
                size="large"
                shape="circle"
                icon={emojiPickerVisible ? <FrownOutlined /> :  <SmileOutlined />}
              />) 
            }
          </div>
          {isRecording ? (
            <div className="chat-input__record-status">
              <i className="chat-input__record-status-bubble"></i>
              Recording...
              <Button
                onClick={onHideRecording}
                type="prymari"
                shape="circle"
                size="small"
                icon={<CloseOutlined />}
                className="stop-recording"
              />
            </div>
          ) : (
            <TextArea
              onChange={e => setValue(e.target.value)}
              onKeyUp={handleSendMessage}
              size="large"
              placeholder={`${listening ? 'Продиктуйте текст сообщения в микрофон…' : 'Введите текст сообщения…'}`}
              value={value}
              showCount
              maxLength={5000}
              style={{   
                width: '100%',
                resize: 'none',
              }}
            />
          )}

          <div className="chat-input__actions">
            {
             !isRecording && (<UploadField
              onFiles={onSelectFiles}
              containerProps={{
                className: "chat-input__actions-upload-btn"
              }}
              uploadProps={{
                accept: ".jpg,.jpeg,.png,.gif,.bmp",
                multiple: "multiple"
              }}
            >
              <Button type="prymari" size="large" shape="circle" icon={<CameraOutlined />} />
            </UploadField>)
            }
            {isLoading ? (
              <Button type="link" size="large" shape="circle" icon="loading" />
            ) : isRecording || value || attachments.length ? (
              <Button
                onClick={sendMessage}
                type="prymari"
                shape="circle"
                size="large"
                icon={<SendOutlined />}
              />
            ) : (
              <div className="chat-input__record-btn">
                <Button
                  onClick={onRecord}
                  type="prymari"
                  shape="circle"
                  icon={<AudioOutlined />}
                />
              </div>
            )}
          </div>
        </div>
        {attachments.length > 0 && (
          <div className="chat-input__attachments">
            <UploadFiles
              removeAttachment={removeAttachment}
              attachments={attachments}
            />
          </div>
        )}
      </div>
    </Fragment>
  );
};
 
export default ChatInput;
