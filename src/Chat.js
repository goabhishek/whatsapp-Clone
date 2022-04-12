import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';

import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import './Chat.css';
const Chat = () => {
  const [input, setInput] = useState('');
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log('you type <<<<<', input);
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chat__headerInfo'>
          <h3>Room Name</h3>
          <p>Last Seen at...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        9
      </div>
      <div className='chat__body'>
        <p className={`chat__message ${true && 'chat__reciever'}`}>
          <span className='chat__name'>Abishek mishra</span>
          Hey Guys
          <span className='chat__timestamp'>5:40</span>
        </p>
      </div>
      <div className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Type a massage' />
          <button onClick={sendMessage} type='submit'>
            Send a massage
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;
