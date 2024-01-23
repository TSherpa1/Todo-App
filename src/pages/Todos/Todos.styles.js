import styled from 'styled-components';

export const TodosContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

export const AddNewTaskBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  font-size: 17px;
  border: none;
  width: 140px;
  height: 50px;
  background-color: #0f99ff;
  &:hover {
    cursor: pointer;
  }
  a {
    color: white;
  }
`;
