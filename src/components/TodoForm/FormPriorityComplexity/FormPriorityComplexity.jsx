import { Fragment, useState } from 'react';
import {
  PriorityComplexityContainer,
  PriorityComplexityLabel,
  RadioBtnContainer,
  RadioBtnInput,
  ErrorText,
} from './FormPriorityComplexity.styles';

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FormPriorityComplexity = ({
  handleChange,
  type,
  currentLevel,
  error,
}) => {
  return (
    <PriorityComplexityContainer className={`edit-${type}-container`}>
      <PriorityComplexityLabel htmlFor={type}>
        * {`Select ${type} Level`}
      </PriorityComplexityLabel>
      <RadioBtnContainer className="radio-btn">
        {levels.map((level) => (
          <Fragment key={level}>
            <RadioBtnInput
              key={level}
              name={type}
              id={level}
              value={level}
              onClick={handleChange}
              selected={currentLevel}
            >
              {level}
            </RadioBtnInput>
          </Fragment>
        ))}
      </RadioBtnContainer>
      <ErrorText>{error ? '* Required Field' : ''}</ErrorText>
    </PriorityComplexityContainer>
  );
};

export default FormPriorityComplexity;
