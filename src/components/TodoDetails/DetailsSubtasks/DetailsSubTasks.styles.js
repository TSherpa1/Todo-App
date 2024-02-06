import styled from 'styled-components';

export const DetailsSubTaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  height: 35px;
  padding: 10px 20px;
  font-size: 15px;
  position: relative;
  left: 4%;
  &:hover {
    cursor: pointer;
  }
`;

export const SubTaskCompleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 47px;
  height: 40px;
  border-radius: 30px;
  background: ${(props) =>
    props.iscomplete === 'true' ? '#0f99ff' : '#e7f5ff'};
  color: ${(props) => (props.iscomplete === 'true' ? 'white' : 'black')};
  position: relative;
  right: 6%;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;

export const CompleteSVG = styled.svg`
  height: 25px;
  width: 25px;
`;
