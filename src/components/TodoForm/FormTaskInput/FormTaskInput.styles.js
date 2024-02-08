import styled from 'styled-components';

export const TaskInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 100%;
`;

export const TaskInputLabel = styled.label`
  font-size: 19px;
  margin-bottom: 15px;
  // margin-left: 10px;
  // position: relative;
  // right: 170px;
`;

export const TaskTextInput = styled.input`
  border-radius: 30px;
  border: 1px solid lightgray;
  width: 94%;
  height: 35px;
  padding: 10px 20px;
  font-size: 15px;
`;

export const ErrorText = styled.label`
  color: red;
  margin-top: 10px;
  margin-left: 3px;
  position: relative;
`;
