import PropTypes from 'prop-types';
import Speaker from "./Speaker"; // Make sure this is correct. If Speaker is a custom PropTypes object then import it accordingly.

const Message = ({ speaker, utterance, timestamp }) => {
    // Your component logic goes here...
}

Message.propTypes = {
    speaker: PropTypes.instanceOf(Speaker).isRequired,
    utterance: PropTypes.string.isRequired,
    timestamp: PropTypes.instanceOf(Date).isRequired
};

export default Message;
