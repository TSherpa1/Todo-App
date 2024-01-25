import styled from 'styled-components';

export const TodoSortContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TodoSortBtn = styled.button`
  border-radius: 30px;
  width: 45%;
  border: none;
  height: 55px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  font-size: 16px;
`;

export const ChevronIcon = styled.svg`
  height: 30px;
  width: 30px;
`;
