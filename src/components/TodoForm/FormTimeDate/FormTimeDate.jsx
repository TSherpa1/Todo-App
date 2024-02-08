import { useState } from 'react';
import {
  TimeDateInputContainer,
  TimeDateLabel,
  FormDateInput,
  DateInnerContainer,
  TimeInnerContainer,
  ErrorText,
} from './FormTimeDate.style';

const FormTimeDate = ({
  dueDate,
  time,
  handleTimeChange,
  handleDateChange,
  error,
  dateTimeError,
}) => {
  return (
    <TimeDateInputContainer className="time-date-container">
      <DateInnerContainer className="time-date-inner-container">
        <TimeDateLabel htmlFor="due-date">* Select Due Date</TimeDateLabel>
        <FormDateInput
          type="date"
          name="due-date"
          id="due-date"
          value={dueDate}
          onChange={handleDateChange}
        />
        <ErrorText>
          {error && dateTimeError.includes('dueDate') ? '* Required Field' : ''}
        </ErrorText>
      </DateInnerContainer>
      <TimeInnerContainer className="time-date-inner-container">
        <TimeDateLabel htmlFor="time">* Select Time</TimeDateLabel>
        <FormDateInput
          type="time"
          name="time"
          id="time"
          value={time}
          onChange={handleTimeChange}
        />
        <ErrorText>
          {error && dateTimeError.includes('time') ? '* Required Field' : ''}
        </ErrorText>
      </TimeInnerContainer>
    </TimeDateInputContainer>
  );
};

export default FormTimeDate;
