import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-4 bg-[var(--ga-lighter)] px-8 py-6 shadow-xl max-sm:p-3">
      {/* top row */}
      <div className="flex flex-row justify-between">
        {/* logo and about */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="w-fit text-[var(--ga-text)]">
            Pygmalion<span className="text-purple-400">AI</span>
          </Link>
          <p className="max-w-md text-sm font-light">
            An Open-source project dedicated to creating large language models
            for chat and role-play purposes.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-2 gap-8 text-sm md:px-12">
          {/* project list */}
          <ul className="flex flex-col gap-2">
            <li className="font-bold">Project</li>
            <Link className="underline-animation w-fit">
              <li className="">About</li>
            </Link>
            <Link className="underline-animation w-fit">
              <li>Privacy Policy</li>
            </Link>
            <Link className="underline-animation w-fit">
              <li>Terms of use</li>
            </Link>
          </ul>

          {/* connect list */}
          <ul className="flex flex-col gap-2">
            <li className="font-bold">Connect</li>
            <a
              href="https://discord.gg/pygmalionai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-animation w-fit"
            >
              <li>Discord</li>
            </a>
          </ul>
        </div>
      </div>

      {/* bottom row */}
      <div className="flex items-center justify-between gap-4">
        <small className="text-xs font-light italic">
          Copyright 2023 - PygmalionAI Project. All rights reserved.
        </small>

        <small
          className="cursor-pointer rounded-xl p-1 text-xs font-thin italic transition-colors hover:bg-purple-400 hover:text-gray-900"
          onClick={handleScrollToTop}
        >
          <ArrowUp />
        </small>
      </div>
    </div>
  );
};

export default Footer;
