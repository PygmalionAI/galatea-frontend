import PropTypes from 'prop-types';

const User = ({ id, email, displayName }) => {
    // Your component logic and return statement here...
};

// Define propTypes after the component
User.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired
};

export default User;
