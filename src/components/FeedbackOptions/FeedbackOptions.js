import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptionsStyled } from './FeedbackOptionsStyled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyled>
      {options.map(option => (
        <li key={option}>
          <button
            className="btnFeedback"
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </FeedbackOptionsStyled>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
