import styled from 'styled-components';

export const TaskInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TaskInputLabel = styled.label`
  font-size: 20px;
  margin-bottom: 15px;
  // margin-left: 10px;
  // position: relative;
  // right: 10%;
`;

export const TaskTextInput = styled.input`
  border-radius: 30px;
  border: none;
  width: 45%;
  height: 50px;
`;
