import PropTypes from 'prop-types';

const Character = ({id, name, description, avatarId, visibility, createdAt, updatedAt}) => {
};

Character.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    avatarId: PropTypes.string,
    visibility: PropTypes.oneOf(['public', 'private', 'unlisted']).isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired
};

export default Character;

  