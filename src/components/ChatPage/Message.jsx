import { ThumbsDown, ThumbsUp } from "lucide-react";
import showdown from "showdown";
import PropTypes from 'prop-types';
import "./Message.css";
import { mockMessages } from "./mockMessage";

const showdownConverter = new showdown.Converter();

/**An individual message.*/
const Message = (props) => {
  let innerHTML = { __html: showdownConverter.makeHtml(props.utterance) };

  return (
    <span className="flex gap-4">
      <img
        src={props.speaker.avatarUrl}
        className="mt-1 h-12 w-12 rounded-full bg-white"
      />

      <div className="flex select-text flex-col">
      <span>
        <b className="mr-2 text-white">{props.speaker.name}</b>
        <span className="text-sm text-white/25">
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "short",
            timeStyle: "short",
          }).format(props.timestamp)}
        </span>
      </span>
      <div className="message-text">
        <div dangerouslySetInnerHTML={innerHTML} />
        { !props.speaker.isHuman &&
  <div className="mt-3 flex gap-2 text-sm text-white/25">
    <ThumbsUp size={16} className="mt-[-0.15rem]" />
    <ThumbsDown size={16} />
  </div>
}
      </div>
      </div>
    </span>
  )
};

// Define propTypes after the component
Message.propTypes = {
  speaker: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    isHuman: PropTypes.bool
  }).isRequired,
  utterance: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired
};

export default Message;
