import styled from 'styled-components';

export const TodosContainer = styled.div`
  padding: 30px 0px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const AddNewTaskBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  font-size: 17px;
  border: none;
  padding: 10px;
  width: 150px;
  height: 50px;
  background-color: #0f99ff;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
