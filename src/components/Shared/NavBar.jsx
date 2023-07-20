import React from 'react';
import { User, Users, MessageCircle, Settings, LogOut } from "lucide-react";
import { useLocation } from 'react-router-dom';
import Toggle from './Toggle.jsx';7755

const NavBar = () => {
  const location = useLocation();

  return (
<span className="flex justify-between items-center gap-4 bg-ga-lighter px-8 py-3 shadow-xl max-sm:p-3">
  <span className="flex items-center gap-2 font-semibold">
    <a href="/" className='text-ga-text'>
      Pygmalion<span className="text-purple-400">AI</span>
    </a>
    <Toggle/>
  </span>

    <span className="flex gap-4 ">
      <a
        aria-label="Character Settings"
        className="focusable-icon-button rounded p-1"
        href="/account"
      >
        <User style={location.pathname === "/account" ? { color: 'white' } : {}}/>
    </a>

      <a
        aria-label="Character Settings"
        className="focusable-icon-button rounded p-1"
        href="/characters"
      >
        <Users style={location.pathname === "/characters" ? { color: 'white' } : {}}/>
  </a>

      <a
        aria-label="Chat"
        className="focusable-icon-button rounded p-1"
        href="/chat"
      >
        <MessageCircle className={location.pathname === "/chat" ? { color: 'white' } : {}} />

</a>

      <a
        aria-label="Generation Settings"
        className="focusable-icon-button rounded p-1"
        href="/generation-settings"
      >
        <Settings style={location.pathname === "/generation-settings" ? { color: 'white' } : {}}/>
</a>

<a
        aria-label="Log out"
        className="focusable-icon-button rounded p-1"
        href="/"
      >
        <LogOut />
</a>
    </span>
  </span>
)};

export default NavBar;