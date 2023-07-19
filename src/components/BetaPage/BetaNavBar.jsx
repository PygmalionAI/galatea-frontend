import { Link, useNavigate } from 'react-router-dom';
import { PointerLockControls } from '@react-three/drei';
import { pygchiselsvg, menu, close } from '../../assets';
import React, { useEffect, useState } from 'react';
import { styles } from '../../styles';
import { checkAuth, signOut } from '../../apis/api';

const BetaNavBar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);  
  const navigateTo = useNavigate();

  // On page load, check if the user is signed in
  useEffect(() => {
    checkAuth()
      .then((res) => {
        setLoggedIn(res);
        if (!res) {
          navigateTo('/login'); // Navigate to login page if not authenticated
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);  

  // Sign the user out when button is clicked
  const logOut = () => {
    signOut()
      .then((res) => {
        setLoggedIn(false);
        navigateTo('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center justify-between py-5 fixed top-0 z-20`}>
      <div className="flex items-center">
        <img src={pygchiselsvg} alt="chisel" className="w-9 h-9 object-contain"/>
        <p className="text-white text-[18px] font-bold">PygmalionAI</p>
      </div>
      <div>
        <ul className="list-none hidden md:flex flex-row gap-10">
          <li>
            <a href="https://discord.gg/pygmalionai" target="_blank" rel="noopener noreferrer" className="underline-animation">Discord</a>
          </li>
          <li>
            <a href="https://docs.pygmalion.chat" target="_blank" rel="noopener noreferrer" className="underline-animation">Docs</a>
          </li>
          <li>
            <a href="https://huggingface.co/PygmalionAI" target="_blank" rel="noopener noreferrer" className="underline-animation">HuggingFace</a>
          </li>
          <li>
            <a href="https://github.com/PygmalionAI" target="_blank" rel="noopener noreferrer" className="underline-animation">GitHub</a>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex">
        <button className="text-white h-10 px-5 pink-gradient-background rounded-full mr-3 scale-10"><Link to="/account">Account</Link></button>
        <button onClick={logOut} className="text-white">Log Out</button>
      </div>
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)}/>
        <div className={`${ !toggle ? "hidden" : "flex" } p-6 landing-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          <li>
            <a href="https://discord.gg/pygmalionai" target="_blank" rel="noopener noreferrer">Discord</a>
          </li>
          <li>
            <a href="https://docs.pygmalion.chat" target="_blank" rel="noopener noreferrer">Docs</a>
          </li>
          <li>
            <a href="https://huggingface.co/PygmalionAI" target="_blank" rel="noopener noreferrer">HuggingFace</a>
          </li>
          <li>
            <a href="https://github.com/PygmalionAI" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
          <li>
            <a onClick={logOut} className="cursor-pointer">Log Out</a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BetaNavBar;
