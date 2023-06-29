import PropTypes from 'prop-types';

const User = ({ id, email, displayName }) => {
};

// Define propTypes after the component
User.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired
};

export default User;
