import styled from 'styled-components';

export const TodoFormContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin-top: -60px;
`;

export const TodoForm = styled.form`
  height: 80%;
  width: 78%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // gap: 70px;
`;

export const AddFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AddFormLabel = styled.label`
  font-size: 20px;
  margin-bottom: 15px;
  // margin-left: 10px;
  // position: relative;
  // right: 10%;
`;

export const AddFormTextInput = styled.input`
  border-radius: 30px;
  border: none;
  width: 45%;
  height: 50px;
`;

export const EditPriorityContainer = styled.div``;

export const EditComplexityContainer = styled.div``;

export const RadioBtnContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const RadioBtnInput = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50px;
  background-color: #deecf6;
  &:hover {
    background-color: #0f99ff;
    cursor: pointer;
  }
`;
