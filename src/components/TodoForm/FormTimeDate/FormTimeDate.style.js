import styled from 'styled-components';

export const TimeDateInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DateInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  position: relative;
  left: 2%;
`;

export const TimeInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  position: relative;
  left: 7%;
`;

export const TimeDateLabel = styled.label`
  font-size: 19px;
  margin-bottom: 10px;
  width: 50%;
  position: relative;
  right: 30%;
  // bottom: 100%;
`;

export const DateLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  width: 50%;
  position: relative;
  // right: 50%;
  // bottom: 100%;
`;

export const FormDateInput = styled.input`
  border-radius: 30px;
  border: none;
  width: 85%;
  height: 35px;
  position: relative;
  right: 10%;
  padding: 10px;
`;
