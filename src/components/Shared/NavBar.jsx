import { MessageCircle, Settings, User, Users, LogOut } from "lucide-react";

const NavBar = () => (
  <span className="flex justify-between gap-4 bg-background-lighter px-8 py-5 shadow-xl max-sm:p-3">
    <span className="flex items-center gap-2 font-semibold">
      <a href="/">
        Pygmalion<span class="text-purple-400">AI</span>
      </a>
    </span>
    <span className="flex gap-4">
      <a
        aria-label="Character Settings"
        className="focusable-icon-button rounded p-1"
        href="/account"
      >
        <User />
    </a>

      <a
        aria-label="Character Settings"
        className="focusable-icon-button rounded p-1"
        href="/character"
      >
        <Users />
  </a>

      <a
        aria-label="Chat"
        className="focusable-icon-button rounded p-1"
        href="/chat"
      >
        <MessageCircle />
</a>

      <a
        aria-label="Generation Settings"
        className="focusable-icon-button rounded p-1"
        href="/generation-settings"
      >
        <Settings />
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
);

export default NavBar;