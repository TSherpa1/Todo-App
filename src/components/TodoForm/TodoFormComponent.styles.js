import styled from 'styled-components';

export const TodoFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  margin: 30px 0px;
`;

export const TodoForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  gap: 30px;
`;

export const SaveTaskBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  font-size: 17px;
  border: none;
  width: 120px;
  height: 50px;
  background-color: #0f99ff;
  color: white;
  padding: 20px 10px;
  &:hover {
    cursor: pointer;
  }
`;
