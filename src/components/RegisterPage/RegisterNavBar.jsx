import { LogOut } from 'lucide-react';

const RegisterNavBar = () => {
  return (
    <nav className="flex justify-between gap-4 ga-lightblack px-8 py-5 shadow-xl max-sm:p-3">
      <div className="flex items-center">
        <a href="/" className="flex items-center font-semibold">
          Pygmalion<span className="text-[#9840a0]">AI</span>
        </a>
      </div>
      <div className="flex gap-4">
        <a aria-label="Back" href="/" className="relative focusable-icon-button rounded p-1">
          <LogOut />
        </a>
      </div>
    </nav>
  );
};

export default RegisterNavBar;
