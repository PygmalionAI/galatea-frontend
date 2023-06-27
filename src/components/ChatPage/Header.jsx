import { MessageCircle } from "lucide-react";

/** The header shown at the beginning of a conversation. */
const Header = () => (
  <>
    <div class="mt-8 flex flex-col gap-3">
      <div class="w-fit rounded-full bg-white/10 p-3">
        <MessageCircle class="text-white/75" size={32} />
      </div>
      <h1 class="text-4xl font-bold text-white">
        Emily
      </h1>
      <h2 class="text-lg text-white/75">
          This is the beginning of your conversation with Emily
      </h2>
      <div class="border-b border-white/10" />
    </div>
  </>
);

export default Header;