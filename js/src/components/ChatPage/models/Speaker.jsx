import PropTypes from 'prop-types';

const Speaker = ({ name, avatarUrl, isHuman }) => {
};

// Define propTypes after the component
Speaker.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  isHuman: PropTypes.bool
};

export default Speaker;

  