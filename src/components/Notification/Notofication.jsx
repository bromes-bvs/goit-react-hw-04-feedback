import PropTypes from 'prop-types';
import Text from './Notification.styled';

export default function Notification({ messege }) {
  return <Text>{messege}</Text>;
}

Notification.propTypes = {
  messege: PropTypes.string.isRequired,
};
