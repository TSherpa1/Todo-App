import {
  TimeDateInputContainer,
  TimeDateLabel,
  FormDateInput,
  DateInnerContainer,
  TimeInnerContainer,
} from './FormTimeDate.style';

const FormTimeDate = ({
  dueDate,
  time,
  handleTimeChange,
  handleDateChange,
}) => (
  <TimeDateInputContainer className="time-date-container">
    <DateInnerContainer className="time-date-inner-container">
      <TimeDateLabel htmlFor="due-date">Select Due Date</TimeDateLabel>
      <FormDateInput
        type="date"
        name="due-date"
        id="due-date"
        value={dueDate}
        onChange={handleDateChange}
      />
    </DateInnerContainer>
    <TimeInnerContainer className="time-date-inner-container">
      <TimeDateLabel htmlFor="time">Select Time</TimeDateLabel>
      <FormDateInput
        type="time"
        name="time"
        id="time"
        value={time}
        onChange={handleTimeChange}
      />
    </TimeInnerContainer>
  </TimeDateInputContainer>
);

export default FormTimeDate;
