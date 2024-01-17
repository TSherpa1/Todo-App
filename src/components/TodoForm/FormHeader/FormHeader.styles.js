import styled from 'styled-components';

export const TodoFormHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top: 50px;
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
  position: absolute;
  right: 93%;
  &:hover {
    cursor: pointer;
  }
`;

export const TodoFormHeaderText = styled.h3`
  font-size: 25px;
`;
