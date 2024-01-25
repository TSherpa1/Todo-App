import styled from 'styled-components';

export const TodosContainer = styled.div`
  padding-top: 50px;
  width: 500px;
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
  width: 170px;
  height: 65px;
  background-color: #0f99ff;
  &:hover {
    cursor: pointer;
  }
  a {
    color: white;
  }
`;
