import styled from 'styled-components';

export const SubTasksInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  width: 108%;
`;

export const SubTasksLabel = styled.label`
  font-size: 19px;
  margin-bottom: 15px;
  position: relative;
  left: 3%;
`;
export const SubTasksInputBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const SubTasksInput = styled.input`
  border-radius: 30px;
  border: 1px solid lightgray;
  width: 94%;
  height: 35px;
  padding: 10px 20px;
  font-size: 15px;
  position: relative;
  left: 3%;
`;

export const AddSubTaskBtn = styled.button`
  border: none;
  width: 45px;
  height: 42px;
  border-radius: 30px;
  background-color: #0f99ff;
  color: white;
  position: relative;
  // bottom: 37%;
  right: 5%;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const SubTaskListContainer = styled.ul`
  // position: fixed;
  width: 100%;
`;

export const SubTaskItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const SubTaskItemInput = styled.input`
  border-radius: 30px;
  border: none;
  width: 93%;
  height: 35px;
  padding: 10px 20px;
  font-size: 15px;
  position: relative;
  left: 3%;
`;

export const SubTaskRemoveBtn = styled.button`
  border: none;
  width: 45px;
  height: 42px;
  border-radius: 30px;
  background-color: red;
  color: white;
  position: relative;
  // bottom: 37%;
  right: 5%;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;

export const SubTaskEditBtn = styled.button`
  border: none;
  width: 45px;
  height: 42px;
  border-radius: 30px;
  background-color: orange;
  color: white;
  position: relative;
  // bottom: 37%;
  right: 5%;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;

export const EditSVG = styled.svg`
  height: 20px;
  width: 20px;
`;
