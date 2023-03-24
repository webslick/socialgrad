import React, { useEffect, useState } from 'react';  
import { useSelector, useDispatch } from 'react-redux';   
import { users, app, rooms, dialogs } from '../../redux/selectors'; 
import { setActiveRoom } from '../../redux/actions/rooms'; 
import './style.css'; 
import { Skeleton } from 'antd';
import Title from '../../components/Title'
import ChatMainField from '../../components/ChatMainField'
import SubTitle from '../../components/SubTitle'  
import { socket } from '../../socket';
import { getMessagesRoom } from '../../redux/actions/messages'; 
function ChatScreen (props) {
 
  const { scroll } = props;
 
  const user = useSelector(users.user);  
  const room = useSelector(rooms.room_active);  
  const dialog = useSelector(dialogs.dialog_active);   
  const work_data = useSelector(app.work_data);  
   

const dispatch = useDispatch();
 
  const [isConnected, setIsConnected] = useState(socket.connected); 
 
  useEffect(() => {
 
    socket.connect();

    function onConnect() {
      setIsConnected(true);
      console.log(socket.id);  
    }

    function onDisconnect() {
      setIsConnected(false);
    }
 
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect); 
     
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect); 
    }; 
  }, []);
 
  useEffect(() => {  
    socket.on('SERVER: MESSAGES_ACCEPT', (value) => {
      async function fetchData() { 
        await getMessagesRoom(room, user, dispatch);  
      }
 
      fetchData();
      console.log(value);
    }); 
    return () => {
      socket.off('SERVER: MESSAGES_ACCEPT', (value) => {
        console.log(value);
      }); 
    };
  }, []);
  
  if(Object.keys(user).length > 0) { 
    user.join_rooms.map(item => { 
      socket.emit("CLIENT:ROOMS_JOIN", item.roomId); 
    }) 
    dispatch(setActiveRoom(user.join_rooms[0].roomId))
  }
 
  return (
    <div className="chat_screen" > 
      <div className={`chat_wrapper ${scroll > 659 ? 'chat_compinsation' : ''}`}>
        <Title title="Чат дома" /> 
        <SubTitle work_data={work_data} subtitle={`обл.${user?.region}, г.${user?.city}, ул.${user?.street}, д.${user?.number}`} /> 
        { work_data ? <ChatMainField user={user} room={room} dialog={dialog} /> :  
        <div className='skeletonChatContainer'>
          <div className='skeletonMenuContainer'>  
            <Skeleton.Image active />
            <Skeleton.Button active block style={{ margin: '20px 0px' }} />
            <Skeleton.Button active block style={{ margin: '20px 0px' }} />
            <Skeleton.Button active block style={{ margin: '20px 0px' }} />
            <Skeleton.Button active block style={{ margin: '20px 0px' }} />
            <Skeleton.Button active block style={{ margin: '20px 0px' }} /> 
            <Skeleton.Button active block style={{ margin: '20px 0px' }} /> 
          </div>
          <div className='skeletonDialogContainer'>  
            <Skeleton.Button active block />
            <Skeleton.Button active style={{ margin: '20px 0px' }} block />
            <Skeleton active avatar paragraph={{ rows: 2 }} />
            <Skeleton active avatar paragraph={{ rows: 2 }} />
            <Skeleton active avatar paragraph={{ rows: 2 }} /> 
          </div>
          <div className='skeletonMessagesContainer'>
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
          </div> 
        </div>   
        }
      </div>
    </div>
  );
}

export default ChatScreen;