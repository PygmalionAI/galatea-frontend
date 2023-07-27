import { MessageCircle } from "lucide-react";

/**The header shown at the beginning of a conversation.*/
export const Header = (props: {
	  participants: string[];
}) => (
  <>
    <div className="mt-8 flex flex-col gap-3">
      <div className="w-fit rounded-full bg-ga-white-default/10 p-3">
        <MessageCircle className="text-ga-white-lightest/75" size={32} />
      </div>
      <h1 className="text-4xl font-bold text-ga-white-lightest">
        {props.participants.join(", ")}
      </h1>
      <h2 className="text-lg text-ga-white-lightest/75">
        {props.participants.length === 1 ? (
          <>
            This is the beginning of your conversation with{" "}
            {props.participants[0]}.
          </>
        ) : (
          <>This is the beginning of the group conversation.</>
        )}
      </h2>
      <div className="border-b border-ga-white-default/10" />
    </div>
  </>
);