import styled from 'styled-components';

export const DetailsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const BackToHomeBtn = styled.button`
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50px;
  padding: 10px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const DetailsText = styled.h3`
  font-size: 25px;
`;

export const EditCompleteTodoSVG = styled.svg`
  height: 25px;
  width: 25px;
  background: #e2ecf6;
  padding: 8px;
  border-radius: 50px;
  &:hover {
    cursor: pointer;
  }
`;
