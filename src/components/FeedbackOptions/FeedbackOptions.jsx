import PropTypes from 'prop-types';

import StyledButton from 'components/FeedbackOptions/Button.styled';
import Controls from 'components/FeedbackOptions/Controls.styled';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <Controls className="Feedback__controls">
      <StyledButton type="button" onClick={() => onLeaveFeedback('good')}>
        Good
      </StyledButton>
      <StyledButton type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </StyledButton>
      <StyledButton type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </StyledButton>
    </Controls>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
