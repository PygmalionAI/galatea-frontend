import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, InputBar } from '../components'
import { mockMessages } from '../components/ChatPage/mockMessage';
import Message from '../components/ChatPage/Message';
import NavBar from '../components/Shared/NavBar';

const Chat = () => {
  return (
    <>
    <div className="bg-ga-default flex h-screen flex-col">
      <div>
        <NavBar />
      </div>

      <div className='flex h-full flex-col-reverse min-h-1/4 max-w-1/2 !mx-8 p-3'>
      <InputBar />
      <div className="flex flex-col-reverse overflow-y-scroll bg-[var(--default)] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-purple/900 scrollbar">
        <div className="flex flex-col gap-6 pt-4 pb-8">
        {mockMessages.map((messageData, index) => (
  <Message key={index} {...messageData} />
))}
</div>
<Header participants={["Emily"]} />
        </div>
      </div>
    </div>

    </>
)};

export default Chat;