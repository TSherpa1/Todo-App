import styled from 'styled-components';

export const DetailsSubTaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  width: 108%;
`;

export const DetailSubTaskListHeader = styled.p`
  font-weight: 600;
  font-size: 17px;
  position: relative;
  left: 3%;
`;

export const SubTaskItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const SubTaskItem = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 30px;
  border: none;
  width: 93%;
  height: 35px;
  padding: 10px 20px;
  font-size: 15px;
  position: relative;
  left: 3%;
  &:hover {
    cursor: pointer;
  }
`;

export const SubTaskCompleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 45px;
  height: 42px;
  border-radius: 30px;
  background: ${(props) =>
    props.complete === props.value ? '#0f99ff' : '#deecf6'};
  color: white;
  position: relative;
  right: 7%;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;

export const CompleteSVG = styled.svg`
  height: 25px;
  width: 25px;
`;
