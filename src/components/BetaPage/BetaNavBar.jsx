import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { close, menu, pygchiselsvg } from "../../assets";

const BetaNavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(Boolean);
  const auth = getAuth();
  const navigateTo = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        navigateTo("/login");
      }
    });

    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, [auth, navigateTo]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setLoggedIn(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav
      className={`px-custom fixed top-0 z-20 flex w-full items-center justify-between py-5`}
    >
      <div className="flex items-center">
        <img
          src={pygchiselsvg}
          alt="chisel"
          className="h-9 w-9 object-contain"
        />
        <p className="text-[18px] font-bold text-white">PygmalionAI</p>
      </div>
      <div>
        <ul className="hidden list-none flex-row gap-10 md:flex">
          <li>
            <a
              href="https://discord.gg/pygmalionai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-animation"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://docs.pygmalion.chat"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-animation"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://huggingface.co/PygmalionAI"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-animation"
            >
              HuggingFace
            </a>
          </li>
          <li>
            <a
              href="https://github.com/PygmalionAI"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-animation"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex">
        <button className="pink-gradient-background scale-10 mr-3 h-10 rounded-full px-5 text-white">
          <Link to="/account">Account</Link>
        </button>
        <button onClick={logOut} className="text-white">
          Log Out
        </button>
      </div>
      <div className="flex flex-1 items-center justify-end md:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] cursor-pointer object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } landing-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
            <li>
              <a
                href="https://discord.gg/pygmalionai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://docs.pygmalion.chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href="https://huggingface.co/PygmalionAI"
                target="_blank"
                rel="noopener noreferrer"
              >
                HuggingFace
              </a>
            </li>
            <li>
              <a
                href="https://github.com/PygmalionAI"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="/account">Account</a>
            </li>
            <li>
              <a onClick={logOut} className="cursor-pointer">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BetaNavBar;
