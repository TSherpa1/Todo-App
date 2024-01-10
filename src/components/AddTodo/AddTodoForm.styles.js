import styled from 'styled-components';

export const TodoFormContainer = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
`;

export const TodoForm = styled.form`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const EditTaskNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EditTaskInput = styled.input`
  border-radius: 30px;
  border: none;
  width: 290%;
  height: 50px;
`;

export const EditPriorityContainer = styled.div``;

export const EditComplexityContainer = styled.div``;

export const RadioBtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const RadioBtnInput = styled.input`
  display: flex;
  height: 30px;
  width: 30px;
`;
