import styled from 'styled-components';

export const TodoSortContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TodoSortInnerContainer = styled.div`
  width: 45%;
  position: relative;
  display: flex;
  justify-content: center;
`;
export const TodoSortBtn = styled.button`
  border-radius: 30px;
  width: 100%;
  border: none;
  height: 55px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const ChevronIcon = styled.svg`
  height: 30px;
  width: 30px;
  transform: ${(props) => (props.clicked === 'true' ? 'rotate(180deg)' : '')};
`;

export const PowerModeBtn = styled.button`
  border-radius: 30px;
  width: 60%;
  border: none;
  height: 55px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const PowerModeSVG = styled.svg`
  height: 30px;
  width: 30px;
`;

export const SortTypeList = styled.ul`
  background: white;
  padding: 15px;
  border-radius: 20px;
  width: 82%;
  position: absolute;
  top: 100%;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px, rgba(0, 0, 0, 0.1) 0px 5px 10px;
  display: ${(props) => (props.clicked === 'true' ? 'block' : 'none')};
`;

export const SortListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 6px 0px 6px 6px;
  padding-bottom: 7px;
  border-bottom: 1px solid lightgray;
  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    border: none;
    margin-bottom: 0px;
    padding: 0px;
  }
`;
