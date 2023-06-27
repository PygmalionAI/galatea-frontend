import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoginNavBar, Header, InputBar } from '../components'

const Chat = () => {
  return (
    <>
    <div className="ga-black scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-purple/900 scrollbar flex h-screen flex-col">
      <div>
        <LoginNavBar />
      </div>
      <Header />
      <InputBar />
    </div>
    </>
  )
}

export default Chat;