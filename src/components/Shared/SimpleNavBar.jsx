import { LogOut } from 'lucide-react';
import Toggle from './Toggle';

const SimpleNavBar = () => {
  return (
    <nav className="flex justify-between items-center gap-4 bg-background-lighter px-8 py-3 shadow-xl max-sm:p-3">
      <div className="flex items-center gap-2 font-semibold">
        <a href="/" className="flex items-center">
          Pygmalion<span className="text-purple-400">AI</span>
        </a>
        <Toggle/>
      </div>
      <div className="flex gap-4">
        <a aria-label="Back" href="/" className="relative focusable-icon-button rounded p-1">
          <LogOut />
        </a>
      </div>
    </nav>
  );
};

export default SimpleNavBar;
