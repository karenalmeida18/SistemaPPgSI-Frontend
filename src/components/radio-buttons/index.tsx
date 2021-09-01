/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React from 'react';
// import { Container } from './styles';

const InputRadio: React.FC = () => {
  return (
    <div>
      <div className="radio">
        <label>
          <input type="radio" value="option1" checked />
          Option 1
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="option2" />
          Option 2
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="option3" />
          Option 3
        </label>
      </div>
    </div>
  );
};

export default InputRadio;
