import styled from 'styled-components';

export const SubTasksInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 100%;
`;

export const SubTasksLabel = styled.label`
  font-size: 19px;
  margin-bottom: 15px;
`;

export const SubTasksInput = styled.input`
  border-radius: 30px;
  border: none;
  width: 94%;
  height: 35px;
  padding: 10px 20px;
  font-size: 15px;
  position: relative;
`;

export const AddSubTaskBtn = styled.button`
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 30px;
  background-color: #0f99ff;
  color: white;
  position: relative;
  bottom: 37%;
  left: 92%;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;
