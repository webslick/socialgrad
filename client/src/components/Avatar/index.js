import React from "react"; 
import { nanoid } from 'nanoid'
import { generateAvatarFromHash } from "../../utils/helpers";

import "./Avatar.scss";

const Avatar = ({ user, roomId }) => { 
  
  if (user.avatar) { 
    return (
      <img
        className="avatar"
        src={user.avatar}
        alt={`Avatar ${user.fullname}`}
      />
    );
  } else {
    const { color, colorLighten } = user.id === undefined ? { color:'', colorLighten: '' } : generateAvatarFromHash(roomId + user.id + roomId + user.id + roomId + user.id);
    const firstChar = user.fullname[0].toUpperCase();
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)` 
        }}
        className="avatar avatar--symbol"
      >
        {firstChar}
      </div>
    );
  }
};
 
export default Avatar;
